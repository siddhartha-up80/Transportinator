// pages/api/messages.js

import connectDB from "../../utils/mongodb";
import Message from "../../models/Message";

connectDB();

export default async function handler(req, res) {
  if (req.method === "GET") {
    if (req.query.orderId) {
      try {
        const message = await Message.findOne({ orderId: req.query.orderId });
        res.status(200).json(message);
      } catch (error) {
        res
          .status(500)
          .json({ error: "An error occurred while fetching the message" });
      }
    } else {
      try {
        const messages = await Message.find({});
        res.status(200).json(messages);
      } catch (error) {
        res
          .status(500)
          .json({ error: "An error occurred while fetching messages" });
      }
    }
  } else {
    res.status(400).json({ error: "Invalid request method" });
  }
}
