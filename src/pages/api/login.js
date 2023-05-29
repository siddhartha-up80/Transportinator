// pages/api/login.js

import bcrypt from "bcryptjs";
// import connectDB from "../../utils/connectDB";
import connectDB from "@/utils/mongodb";
import User from "../../models/User";
import jwt from "jsonwebtoken";

connectDB();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body;

    try {
      // Check if the username exists in the database
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      // Compare the provided password with the hashed password
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ error: "Invalid password" });
      }

      // Generate a JSON Web Token (JWT)
      const token = jwt.sign(
        { userId: user._id, role: user.role },
        "secretkey",
        {
          expiresIn: "1h",
        }
      );

      res.status(200).json({ token });
    } catch (error) {
      res.status(500).json({ error: "An error occurred during login" });
    }
  } else {
    res.status(400).json({ error: "Invalid request method" });
  }
}
