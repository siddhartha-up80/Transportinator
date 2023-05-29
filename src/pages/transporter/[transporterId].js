// pages/transporter/[transporterId].js

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const TransporterPage = () => {
  // const router = useRouter();
  // const { transporterId } = router.query;
  const [messages, setMessages] = useState([]);
  const [selectedOrderId, setSelectedOrderId] = useState("");
  const [price, setPrice] = useState("");
  const [reply, setReply] = useState("");
  const [transporter, setTransporter] = useState("transporter1");

 

  const fetchMessages = async () => {
    try {
      const response = await axios.get(
        `/api/transporter-messages?transporterId=${transporter}`
      );
      const { messages } = response.data;
      setMessages(messages);
      console.log(messages);
    } catch (error) {
      console.error(error.response.data);
    }
  };

   useEffect(() => {
     fetchMessages();
   }, [transporter]);


  const handleSendReply = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/reply-message", {
        orderId: selectedOrderId,
        price,
        reply,
      });
      console.log(response.data);

      // Clear the input fields
      setPrice("");
      setReply("");
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div>
      <h1>Transporter Dashboard</h1>
      <div>
        <label htmlFor="transporter">Transporter:</label>
        <select
          id="transporter"
          value={transporter}
          type="text"
          onChange={(e) => setTransporter(e.target.value)}
          required
        >
          <option value="transporter1">Transporter 1</option>
          <option value="transporter2">Transporter 2</option>
          <option value="transporter3">Transporter 3</option>
        </select>
      </div>
      <h2>Received Messages</h2>
      {messages.length === 0 ? (
        <p>No messages found</p>
      ) : (
        <ul>
          {messages.map((message) => (
            <li key={message._id}>
              <button onClick={() => setSelectedOrderId(message.orderId)}>
                {message.orderId}
              </button>
            </li>
          ))}
        </ul>
      )}
      <h2>Send Reply</h2>
      {selectedOrderId ? (
        <form onSubmit={handleSendReply}>
          <div>
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="reply">Reply:</label>
            <textarea
              id="reply"
              value={reply}
              onChange={(e) => setReply(e.target.value)}
              required
            />
          </div>
          <div>
            <button type="submit">Send Reply</button>
          </div>
        </form>
      ) : (
        <p>No order selected</p>
      )}
    </div>
  );
};

export default TransporterPage;
