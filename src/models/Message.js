import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  orderId: {
    type: String,
  },
  to: {
    type: String,
  },
  from: {
    type: String,
  },
  quantity: {
    type: String,
  },
  address: {
    type: String,
  },
  transporter: {
    type: String,
    ref: "Transporter",
  },

  reply: {
    type: String,
  },

  price: {
    type: String,
  },
});

const Message =
  mongoose.models.AllMessage || mongoose.model("AllMessage", messageSchema);

export default Message;
