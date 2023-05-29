import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  orderId: {
    type: String,
    // required: true,
    // unique: true,
  },
  to: {
    type: String,
    // required: true,
  },
  from: {
    type: String,
    // required: true,
  },
  quantity: {
    type: String,
    // enum: ["1", "2", "3"],
    // required: true,
  },
  address: {
    type: String,
    // required: true,
  },
  transporter: {
    // type: mongoose.Schema.Types.ObjectId,
    type: String,
    ref: "Transporter",
    // required: true,
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
