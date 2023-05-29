
import connectDB from "@/utils/mongodb";
import Message from "../../models/Message";

connectDB();

export default async function handler(req, res) {
  console.log(req.body);
  if (req.method === "POST") {
    try {
      const { to, from, quantity, address, transporter, orderId } = req.body;

      const message = new Message({
        orderId,
        to,
        from,
        quantity,
        address,
        transporter,
      });

      await message.save();
      res.status(201).json({ message: "Message sent successfully" });
    } catch (error) {
      res
        .status(500)
        // .json({ error: "An error occurred while sending the message" });
        .json({error})
    }
  } else {
    res.status(400).json({ error: "Invalid request method" });
  }
}
