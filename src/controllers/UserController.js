import UserModel from "../models/UserModel.js";

export const getUser = (req, res) => {
  res.send("hello");
};

export const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).send({
      success: false,
      message: "Name, email, and password are required",
    });
  }
  const isMatch = await UserModel.findOne({ email });
  if (isMatch) {
    return res.status(400).send({
      success: false,
      message: "Email is already in use",
    });
  }
  try {
    const result = await UserModel.create({
      name,
      email,
      password,
    });
    res.status(201).send({
      success: true,
      message: "User created successfully",
      user: result,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).send({ success: false, message: "Internal server error" });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send({
      success: false,
      message: " email, and password are required",
    });
  }

  try {
    const isMatch = await UserModel.findOne({ email });
    if (!isMatch) {
      return res.status(400).send({
        success: false,
        message: "Invalid Credentials",
      });
    }

    res.status(200).send({
      success: true,
      message: "Login Success",
      user: isMatch,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).send({ success: false, message: "Internal server error" });
  }
};
