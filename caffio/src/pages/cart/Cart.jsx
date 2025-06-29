import React, { useState } from "react";
import { ShoppingCart, Check } from "lucide-react";

export default function CaffioAddToCart() {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("Medium");
  const [selectedMilk, setSelectedMilk] = useState("Regular");
  const [selectedSweetness, setSelectedSweetness] = useState("Normal");
  const [selectedTemp, setSelectedTemp] = useState("Hot");
  const [extraShots, setExtraShots] = useState(0);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const product = {
    name: "Caffio Signature Latte",
    basePrice: 4.5,
    originalPrice: 5.5,
    rating: 4.9,
    reviews: 342,
    description:
      "Our exclusive signature latte crafted with premium Colombian arabica beans, perfectly steamed milk, and our secret blend of vanilla and caramel notes. A smooth, rich experience that defines the Caffio brand.",
    image:
      "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=500&h=500&fit=crop",
    prepTime: "3-4 min",
    calories: 150,
    specialty: "House Specialty",
    origin: "Colombian Highlands",
  };

  const sizes = [
    { name: "Small", price: -0.5, size: "8oz", ml: "240ml" },
    { name: "Medium", price: 0, size: "12oz", ml: "360ml" },
    { name: "Large", price: 0.75, size: "16oz", ml: "480ml" },
    { name: "Extra Large", price: 1.25, size: "20oz", ml: "600ml" },
  ];

  const milkOptions = [
    { name: "Regular", price: 0 },
    { name: "Oat", price: 0.6 },
    { name: "Almond", price: 0.5 },
    { name: "Soy", price: 0.5 },
    { name: "Coconut", price: 0.6 },
    { name: "Skim", price: 0 },
  ];

  const sweetnessLevels = ["No Sugar", "Less Sweet", "Normal", "Extra Sweet"];
  const tempOptions = ["Hot", "Iced"];

  const getCurrentPrice = () => {
    const sizeUpcharge = sizes.find((s) => s.name === selectedSize)?.price || 0;
    const milkUpcharge =
      milkOptions.find((m) => m.name === selectedMilk)?.price || 0;
    const shotUpcharge = extraShots * 0.75;
    return (
      (product.basePrice + sizeUpcharge + milkUpcharge + shotUpcharge) *
      quantity
    );
  };

  const handleAddToCart = () => {
    setIsAddedToCart(true);
    setTimeout(() => setIsAddedToCart(false), 2500);
  };

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="max-w-4xl mx-auto">
          {/* Product Details Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h2>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className="text-yellow-400 text-xl"
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="font-semibold text-gray-900">
                    {product.rating}
                  </span>
                  <span className="text-gray-600">
                    ({product.reviews} reviews)
                  </span>
                </div>
                <span className="text-amber-600 font-semibold">
                  • {product.origin}
                </span>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                {product.description}
              </p>
            </div>

            {/* Price Display with Cart Icon */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="text-4xl font-bold text-gray-900">
                    ${getCurrentPrice().toFixed(2)}
                  </span>
                  <span className="text-xl text-gray-500 line-through">
                    ${(product.originalPrice * quantity).toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="text-sm text-gray-600">You save</div>
                    <div className="text-lg font-bold text-green-600">
                      $
                      {(
                        (product.originalPrice - getCurrentPrice() / quantity) *
                        quantity
                      ).toFixed(2)}
                    </div>
                  </div>
                  {/* Cart Icon Button */}
                  <button
                    onClick={handleAddToCart}
                    disabled={isAddedToCart}
                    className={`p-4 rounded-full font-bold transition-all duration-300 ${
                      isAddedToCart
                        ? "bg-green-500 text-white shadow-lg"
                        : "bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 hover:from-amber-600 hover:via-orange-600 hover:to-red-600 text-white shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-110"
                    }`}
                  >
                    {isAddedToCart ? (
                      <Check size={24} />
                    ) : (
                      <ShoppingCart size={24} />
                    )}
                  </button>
                </div>
              </div>
              {/* Add to Cart Success Message */}
              {isAddedToCart && (
                <div className="mt-4 text-center">
                  <span className="inline-flex items-center space-x-2 text-green-600 font-semibold">
                    <Check size={20} />
                    <span>Added to Cart Successfully!</span>
                  </span>
                </div>
              )}
            </div>

            {/* Temperature Selection */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Temperature
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {tempOptions.map((temp) => (
                  <button
                    key={temp}
                    onClick={() => setSelectedTemp(temp)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                      selectedTemp === temp
                        ? "border-amber-500 bg-amber-50 text-amber-700 shadow-lg"
                        : "border-gray-200 hover:border-gray-300 bg-white"
                    }`}
                  >
                    <div className="font-bold text-lg">{temp}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Size</h3>
              <div className="grid grid-cols-2 gap-4">
                {sizes.map((size) => (
                  <button
                    key={size.name}
                    onClick={() => setSelectedSize(size.name)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                      selectedSize === size.name
                        ? "border-amber-500 bg-amber-50 text-amber-700 shadow-lg"
                        : "border-gray-200 hover:border-gray-300 bg-white"
                    }`}
                  >
                    <div className="font-bold">{size.name}</div>
                    <div className="text-sm text-gray-600">
                      {size.size} • {size.ml}
                    </div>
                    <div className="text-sm font-semibold">
                      {size.price > 0
                        ? `+$${size.price.toFixed(2)}`
                        : size.price < 0
                        ? `-$${Math.abs(size.price).toFixed(2)}`
                        : "Standard"}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Milk Options */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Milk Options
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {milkOptions.map((milk) => (
                  <button
                    key={milk.name}
                    onClick={() => setSelectedMilk(milk.name)}
                    className={`p-3 rounded-xl border-2 transition-all duration-300 text-center ${
                      selectedMilk === milk.name
                        ? "border-amber-500 bg-amber-50 text-amber-700 shadow-lg"
                        : "border-gray-200 hover:border-gray-300 bg-white"
                    }`}
                  >
                    <div className="font-semibold">{milk.name}</div>
                    <div className="text-xs text-gray-600">
                      {milk.price > 0 ? `+$${milk.price.toFixed(2)}` : "Free"}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Extra Shots */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Extra Shots ($0.75 each)
              </h3>
              <div className="flex items-center justify-between bg-white/80 backdrop-blur-sm rounded-xl p-4">
                <span className="font-semibold">Espresso Shots</span>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setExtraShots(Math.max(0, extraShots - 1))}
                    className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                  >
                    <span className="text-lg font-bold">−</span>
                  </button>
                  <span className="text-xl font-bold min-w-[2rem] text-center">
                    {extraShots}
                  </span>
                  <button
                    onClick={() => setExtraShots(extraShots + 1)}
                    className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                  >
                    <span className="text-lg font-bold">+</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Sweetness Level */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Sweetness Level
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {sweetnessLevels.map((level) => (
                  <button
                    key={level}
                    onClick={() => setSelectedSweetness(level)}
                    className={`p-3 rounded-xl border-2 transition-all duration-300 ${
                      selectedSweetness === level
                        ? "border-amber-500 bg-amber-50 text-amber-700 shadow-lg"
                        : "border-gray-200 hover:border-gray-300 bg-white"
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selection */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quantity</h3>
              <div className="flex items-center justify-between bg-white/80 backdrop-blur-sm rounded-xl p-4">
                <span className="font-semibold">Number of drinks</span>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                  >
                    <span className="text-lg font-bold">−</span>
                  </button>
                  <span className="text-2xl font-bold min-w-[3rem] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                  >
                    <span className="text-lg font-bold">+</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 space-y-4">
              <h4 className="text-xl font-bold text-gray-900">Order Summary</h4>
              <div className="space-y-3 text-gray-700">
                <div className="flex justify-between items-center">
                  <span>Temperature:</span>
                  <span className="font-semibold">{selectedTemp}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Size:</span>
                  <span className="font-semibold">
                    {selectedSize}{" "}
                    {sizes.find((s) => s.name === selectedSize)?.size}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Milk:</span>
                  <span className="font-semibold">{selectedMilk}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Sweetness:</span>
                  <span className="font-semibold">{selectedSweetness}</span>
                </div>
                {extraShots > 0 && (
                  <div className="flex justify-between items-center">
                    <span>Extra Shots:</span>
                    <span className="font-semibold">+{extraShots}</span>
                  </div>
                )}
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>
                      Total ({quantity} item{quantity > 1 ? "s" : ""})
                    </span>
                    <span className="text-2xl text-amber-600">
                      ${getCurrentPrice().toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
