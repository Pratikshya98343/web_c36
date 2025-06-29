import { User } from "../../models/index.js";
import bcrypt from "bcrypt";

/**
 *  fetch all users
 */
const getAll = async (req, res) => {
  try {
    //fetching all the data from users table
    const users = await User.findAll();
    res.status(200).send({ data: users, message: "successfully fetched data" });
  } catch (e) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

/**
 *  create new user
 */

const create = async (req, res) => {
  try {
    const { First_Name, Last_Name, Email_ADDRESS, password } = req.body;
    console.log(req.body);
    //validation
    if (!First_Name || !Last_Name || !Email_ADDRESS || !password)
      return res.status(500).send({ message: "Invalid paylod" });

    const existingUser = await User.findOne({ where: { Email_ADDRESS } });
    if (existingUser) {
      return res.status(500).send({ message: "User already exists" });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const users = await User.create({
      First_Name,
      Last_Name,
      Email_ADDRESS,
      password: passwordHash,
    });
    res.status(201).send({ data: users, message: "successfully created user" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Failed to register user" });
  }
};

/**
 * *  login user
 */
const login = async (req, res) => {
  try {
    const { Email_ADDRESS, password } = req.body;
    //validation
    if (!Email_ADDRESS || !password)
      return res.status(500).send({ message: "Invalid paylod" });

    const user = await User.findOne({ where: { Email_ADDRESS } });
    if (!user) {
      return res.status(500).send({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).send({ message: "Invalid credentials" });
    }

    res.status(200).send({ data: user, message: "Login successful" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Failed to login user" });
  }
};

/**
 *  update existing user
 */

const update = async (req, res) => {
  try {
    const { id = null } = req.params;
    const body = req.body;
    console.log(req.params);
    //checking if user exist or not
    const oldUser = await User.findOne({ where: { id } });
    if (!oldUser) {
      return res.status(500).send({ message: "User not found" });
    }
    oldUser.name = body.name;
    oldUser.password = body.password || oldUser.password;
    oldUser.email = body.email;
    oldUser.save();
    res
      .status(201)
      .send({ data: oldUser, message: "user updated successfully" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Failed to update users" });
  }
};

/**
 *  delete user
 */
const delelteById = async (req, res) => {
  try {
    const { id = null } = req.params;
    const oldUser = await User.findOne({ where: { id } });

    //checking if user exist or not
    if (!oldUser) {
      return res.status(500).send({ message: "User not found" });
    }
    oldUser.destroy();
    res.status(201).send({ message: "user deleted successfully" });
  } catch (e) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

/**
 *  fetch user by id
 */
const getById = async (req, res) => {
  try {
    const { id = null } = req.params;
    const user = await User.findOne({ where: { id } });
    if (!user) {
      return res.status(500).send({ message: "User not found" });
    }
    res.status(201).send({ message: "user fetched successfully", data: user });
  } catch (e) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

export const userController = {
  getAll,
  create,
  login,
  getById,
  delelteById,
  update,
};
