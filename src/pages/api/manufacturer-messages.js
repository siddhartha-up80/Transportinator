
import connectDB from "../../utils/mongodb";
import Message from "../../models/Message";

connectDB();

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const { transporterId } = req.query;
      // Fetch messages for the specified transporter
      const messages = await Message.find({ transporter: transporterId });

      res.status(200).json({ messages });
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while fetching messages" });
    }
  } else {
    res.status(400).json({ error: "Invalid request method" });
  }
}
