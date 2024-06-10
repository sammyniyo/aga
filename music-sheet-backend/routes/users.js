import { Router } from "express";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import User, { findOne } from "../models/user.model.js";

const router = Router();

router.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existingUser = await findOne({ email });

    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const newUser = new User({ username, email, password });
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await findOne({ email });

    if (!user) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const isMatch = await compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const token = sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
