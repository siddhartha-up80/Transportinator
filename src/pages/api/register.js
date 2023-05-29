
import bcrypt from "bcryptjs";
// import connectDB from "../../utils/connectDB";
import connectDB from "@/utils/mongodb";
import User from "../../models/User";

connectDB();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { username, password, role } = req.body;

    try {
      // Check if the username already exists
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.status(400).json({ error: "Username already exists" });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user in the database
      const newUser = new User({
        username,
        password: hashedPassword,
        role,
      });

      await newUser.save();

      res.status(200).json({ message: "Registration successful" });
    } catch (error) {
      res.status(500).json({ error: "An error occurred during registration" });
    }
  } else {
    res.status(400).json({ error: "Invalid request method" });
  }
}
