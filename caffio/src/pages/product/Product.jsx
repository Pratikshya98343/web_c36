import React, { useState } from "react";
import { ArrowLeft, Star, ShoppingCart, Heart, MapPin, Clock, Coffee } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Ethiopian Yirgacheffe Beans - Floral & Citrusy",
    price: 450,
    image: "./image/product1.png",
    description: "A bright and complex coffee with pronounced floral notes and vibrant citrus acidity. Grown at high altitudes in the birthplace of coffee.",
    origin: "Yirgacheffe, Ethiopia",
    altitude: "1,700-2,200m",
    process: "Washed",
    roastLevel: "Light-Medium",
    notes: ["Floral", "Citrus", "Tea-like", "Bright"],
    rating: 4.8,
    inStock: true,
    weight: "250g",
    details: {
      story: "Sourced directly from smallholder farmers in the Yirgacheffe region, this coffee represents the pinnacle of Ethiopian coffee excellence. The unique terroir and traditional processing methods create a cup that's both complex and approachable.",
      brewingTips: "Best brewed with pour-over methods like V60 or Chemex. Use water at 200°F and a 1:16 ratio for optimal extraction.",
      certifications: ["Organic", "Fair Trade", "Single Origin"]
    }
  },
  {
    id: 2,
    name: "Colombian Supremo - Smooth & Balanced",
    price: 525,
    image: "./image/product2.png",
    description: "A well-balanced coffee with medium body and smooth finish. Perfect for those who enjoy a classic, approachable cup.",
    origin: "Huila, Colombia",
    altitude: "1,500-1,800m",
    process: "Fully Washed",
    roastLevel: "Medium",
    notes: ["Chocolate", "Caramel", "Balanced", "Smooth"],
    rating: 4.6,
    inStock: true,
    weight: "250g",
    details: {
      story: "From the mountainous region of Huila, this Supremo grade coffee represents the finest Colombian beans. Grown by cooperatives committed to sustainable farming practices.",
      brewingTips: "Excellent for espresso, drip, or French press. Medium grind works best with most brewing methods.",
      certifications: ["Rainforest Alliance", "Single Origin"]
    }
  },
  {
    id: 3,
    name: "Sumatra Mandheling - Earthy & Bold",
    price: 575,
    image: "./image/product3.png",
    description: "A full-bodied coffee with earthy, herbal notes and low acidity. Known for its unique wet-hulling process that creates distinctive flavors.",
    origin: "North Sumatra, Indonesia",
    altitude: "750-1,500m",
    process: "Wet-hulled (Giling Basah)",
    roastLevel: "Medium-Dark",
    notes: ["Earthy", "Herbal", "Full-body", "Low acidity"],
    rating: 4.5,
    inStock: true,
    weight: "250g",
    details: {
      story: "Processed using the traditional Giling Basah method unique to Indonesia, this coffee develops its characteristic earthy profile and full body that Sumatra is famous for.",
      brewingTips: "Perfect for French press or cold brew. The full body and low acidity make it ideal for darker roast preparations.",
      certifications: ["Organic", "Single Origin"]
    }
  },
  {
    id: 4,
    name: "Guatemalan Antigua - Rich & Velvety",
    price: 475,
    image: "./image/product4.png",
    description: "A rich, full-bodied coffee with chocolate and spice notes. Grown in volcanic soil that imparts unique mineral complexity.",
    origin: "Antigua, Guatemala",
    altitude: "1,500-1,700m",
    process: "Fully Washed",
    roastLevel: "Medium",
    notes: ["Chocolate", "Spice", "Velvety", "Rich"],
    rating: 4.7,
    inStock: true,
    weight: "250g",
    details: {
      story: "Cultivated in the shadow of three volcanoes, Antigua coffee benefits from rich volcanic soil and a unique microclimate that produces consistently exceptional beans.",
      brewingTips: "Excellent for espresso-based drinks. The rich body and chocolate notes make it perfect for cappuccinos and lattes.",
      certifications: ["Fair Trade", "Single Origin", "Shade Grown"]
    }
  },
  {
    id: 5,
    name: "Brazil Santos - Sweet & Nutty",
    price: 625,
    image: "./image/product5.png",
    description: "A sweet, nutty coffee with low acidity and medium body. Brazil's most famous coffee export with consistent quality.",
    origin: "São Paulo, Brazil",
    altitude: "800-1,200m",
    process: "Natural/Dry",
    roastLevel: "Medium",
    notes: ["Sweet", "Nutty", "Chocolate", "Low acidity"],
    rating: 4.4,
    inStock: true,
    weight: "250g",
    details: {
      story: "From the renowned Santos port region, this coffee represents Brazil's coffee heritage. Sun-dried to perfection, it develops natural sweetness and nutty characteristics.",
      brewingTips: "Versatile for all brewing methods. Particularly excellent in espresso blends due to its natural sweetness and crema production.",
      certifications: ["UTZ Certified", "Single Origin"]
    }
  },
  {
    id: 6,
    name: "Kenyan AA - Bright & Wine-like Acidity",
    price: 600,
    image: "./image/product6.png",
    description: "A bright, wine-like coffee with pronounced acidity and fruity notes. Kenya's highest grade beans with exceptional cup quality.",
    origin: "Central Province, Kenya",
    altitude: "1,500-2,100m",
    process: "Fully Washed",
    roastLevel: "Light-Medium",
    notes: ["Wine-like", "Bright", "Fruity", "Complex"],
    rating: 4.9,
    inStock: false,
    weight: "250g",
    details: {
      story: "Hand-picked at peak ripeness and processed using Kenya's renowned double fermentation method, resulting in the characteristic bright acidity and complex fruit notes.",
      brewingTips: "Best with pour-over methods that highlight the bright acidity. Try with Kalita Wave or V60 for optimal flavor extraction.",
      certifications: ["Fair Trade", "Single Origin", "AA Grade"]
    }
  },
  {
    id: 7,
    name: "Costa Rica Tarrazú - Clean & Citrusy",
    price: 500,
    image: "./image/product7.png",
    description: "A clean, bright coffee with citrus notes and medium body. Grown in one of Costa Rica's most prestigious coffee regions.",
    origin: "Tarrazú, Costa Rica",
    altitude: "1,200-1,700m",
    process: "Fully Washed",
    roastLevel: "Medium",
    notes: ["Clean", "Citrusy", "Bright", "Medium body"],
    rating: 4.6,
    inStock: true,
    weight: "250g",
    details: {
      story: "From the high mountains of Tarrazú, known for producing some of Costa Rica's finest coffees. The volcanic soil and cool climate create ideal growing conditions.",
      brewingTips: "Perfect for drip coffee and pour-over methods. The clean profile makes it excellent for showcasing brewing technique.",
      certifications: ["Rainforest Alliance", "Single Origin", "SHB"]
    }
  },
  {
    id: 8,
    name: "Honduras Marcala - Sweet & Full-bodied",
    price: 675,
    image: "./image/product8.png",
    description: "A sweet, full-bodied coffee with chocolate and caramel notes. Representing the emerging excellence of Honduran specialty coffee.",
    origin: "Marcala, Honduras",
    altitude: "1,300-1,700m",
    process: "Fully Washed",
    roastLevel: "Medium",
    notes: ["Sweet", "Full-bodied", "Chocolate", "Caramel"],
    rating: 4.5,
    inStock: true,
    weight: "250g",
    details: {
      story: "From the protected La Paz region, this coffee represents Honduras' growing reputation in specialty coffee. Carefully cultivated by dedicated farmer cooperatives.",
      brewingTips: "Great for espresso and milk-based drinks. The full body and sweet notes make it perfect for cappuccinos.",
      certifications: ["Organic", "Fair Trade", "Single Origin"]
    }
  }
];

export default function ProductSection() {
  const [cart, setCart] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, { ...item, id: Date.now() }]);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const toggleFavorite = (productId) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const openProductDetails = (product) => {
    setSelectedProduct(product);
    // In a real app, you would use react-router navigate
    window.history.pushState({}, '', `/product/${product.id}`);
  };

  const closeProductDetails = () => {
    setSelectedProduct(null);
    window.history.pushState({}, '', '/products');
  };

  if (selectedProduct) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
        <div className="container mx-auto px-4 py-8">
          {/* Back Button */}
          <button 
            onClick={closeProductDetails}
            className="flex items-center gap-2 text-amber-800 hover:text-amber-900 mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Products
          </button>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="relative">
              <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <button
                onClick={() => toggleFavorite(selectedProduct.id)}
                className={`absolute top-4 right-4 p-2 rounded-full transition-colors ${
                  favorites.includes(selectedProduct.id) 
                    ? 'bg-red-500 text-white' 
                    : 'bg-white text-gray-400 hover:text-red-500'
                }`}
              >
                <Heart size={20} fill={favorites.includes(selectedProduct.id) ? 'currentColor' : 'none'} />
              </button>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  {selectedProduct.name}
                </h1>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i} 
                        size={16} 
                        fill={i < Math.floor(selectedProduct.rating) ? '#fbbf24' : 'none'}
                        className="text-yellow-400"
                      />
                    ))}
                    <span className="text-sm text-gray-600 ml-1">({selectedProduct.rating})</span>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    selectedProduct.inStock 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {selectedProduct.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {selectedProduct.description}
                </p>
              </div>

              {/* Price and Actions */}
              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-3xl font-bold text-amber-800">
                    NPR {selectedProduct.price.toFixed(2)}
                  </div>
                  <div className="text-sm text-gray-500">
                    {selectedProduct.weight}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <button
                    onClick={() => addToCart(selectedProduct)}
                    disabled={!selectedProduct.inStock}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-semibold transition-colors ${
                      selectedProduct.inStock
                        ? 'bg-amber-800 text-white hover:bg-amber-900'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <ShoppingCart size={20} />
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* Coffee Details */}
              <div className="grid grid-cols-2 gap-4 border-t border-gray-200 pt-6">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin size={16} className="text-amber-800" />
                  <span className="font-medium">Origin:</span>
                  <span className="text-gray-600">{selectedProduct.origin}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Coffee size={16} className="text-amber-800" />
                  <span className="font-medium">Process:</span>
                  <span className="text-gray-600">{selectedProduct.process}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-medium">Altitude:</span>
                  <span className="text-gray-600">{selectedProduct.altitude}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-medium">Roast:</span>
                  <span className="text-gray-600">{selectedProduct.roastLevel}</span>
                </div>
              </div>

              {/* Tasting Notes */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-semibold mb-3">Tasting Notes</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProduct.notes.map((note) => (
                    <span 
                      key={note}
                      className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>

              {/* Story & Details */}
              <div className="border-t border-gray-200 pt-6 space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Our Story</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {selectedProduct.details.story}
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Brewing Tips</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {selectedProduct.details.brewingTips}
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Certifications</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.details.certifications.map((cert) => (
                      <span 
                        key={cert}
                        className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section
      id="product"
      className="py-24 bg-gradient-to-br from-orange-50 to-white min-h-screen relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-16 border-b-2 border-b-amber-800 pb-4">
          <h2 className="text-4xl font-bold text-amber-800 container mx-auto px-6 py-12 relative z-10">Products</h2>
          <div className="text-sm text-gray-600">
            {cart.length} items in cart
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-2">
            SIGNATURE BEAN COLLECTION
          </h3>
          <p className="text-gray-600 max-w-2xl">
            Explore our finest selection of whole coffee beans sourced from top
            regions around the world. Perfectly roasted for flavor, aroma, and
            depth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="relative h-56 bg-gray-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                  onClick={() => openProductDetails(product)}
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(product.id);
                  }}
                  className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-200 ${
                    favorites.includes(product.id) 
                      ? 'bg-red-500 text-white' 
                      : 'bg-white/80 text-gray-400 hover:text-red-500'
                  }`}
                >
                  <Heart size={16} fill={favorites.includes(product.id) ? 'currentColor' : 'none'} />
                </button>
                
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Out of Stock
                    </span>
                  </div>
                )}
              </div>
              
              <div className="p-6 text-center min-h-[280px] flex flex-col justify-between">
                <div className="flex-1">
                  <h3 
                    className="text-lg font-semibold text-gray-800 mb-2 leading-snug cursor-pointer hover:text-amber-800 transition-colors line-clamp-2"
                    onClick={() => openProductDetails(product)}
                  >
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center justify-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={12} 
                        fill={i < Math.floor(product.rating) ? '#fbbf24' : 'none'}
                        className="text-yellow-400"
                      />
                    ))}
                    <span className="text-xs text-gray-500 ml-1">({product.rating})</span>
                  </div>
                  
                  <div className="text-amber-800 font-bold text-xl mb-4">
                    NPR {product.price.toFixed(2)}
                  </div>
                </div>
                
                <button
                  onClick={() => addToCart(product)}
                  disabled={!product.inStock}
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 {
                    product.inStock
                      ? ' bg-amber-900 hover:bg-amber-900 hover:shadow-lg'
                      : 'bg-amber-900 text-white-500 cursor-not-allowed'
                  }`}
                >
                  <ShoppingCart size={16} />
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating coffee beans */}
      {[10, 20, 30, 50, 70, 80].map((left, i) => (
        <div
          key={i}
          className="absolute w-2 h-3 bg-amber-800 rounded-full opacity-10"
          style={{ 
            left: `${left}%`, 
            animation: `float 15s linear infinite ${i * 3}s`
          }}
        ></div>
      ))}

      {/* Notification */}
      {showNotification && (
        <div className="fixed top-5 right-5 bg-gradient-to-br from-green-600 to-green-400 text-white px-6 py-3 rounded-lg shadow-lg font-semibold z-50 transition-transform duration-300">
          Item added to cart!
        </div>
      )}

      <style jsx>{`
        @keyframes float {
          from {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10%,
          90% {
            opacity: 0.1;
          }
          to {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}