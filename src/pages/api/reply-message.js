// pages/api/reply-message.js

import connectDB from "../../utils/mongodb";
import Message from "../../models/Message";

connectDB();

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { orderId, price, reply } = req.body;

    //   Find the message by orderId and update it with the reply and price
        const message = await Message.findOneAndUpdate(
          { orderId },
          { reply, price },
          { new: true }
        );

    //   const replymessage = new Message({
    //     orderId,
    //     reply,
    //     price,
    //   });

      await message.save();

      res.status(200).json({ message: "Reply sent successfully" });
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while sending the reply" });
    }
  } else {
    res.status(400).json({ error: "Invalid request method" });
  }
}
