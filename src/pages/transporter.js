// pages/transporter.js

import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const Transporter = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get("/api/messages");
      setMessages(response.data);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div>
      <h1>Transporter Dashboard</h1>
      <h2>Received Messages</h2>
      <ul>
        {messages.map((message) => (
          <li key={message.orderId}>
            <Link href={`/transporter/${message.orderId}`}>
              {message.orderId}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Transporter;
