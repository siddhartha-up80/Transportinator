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
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900">
          Transporter Dashboard
        </h1>

        <div className="mt-8">
          <h2 className="text-xl font-semibold">Received Messages</h2>
          {messages.length === 0 ? (
            <p>No messages found</p>
          ) : (
            <ul className="mt-4 space-y-4">
              {messages.map((message) => (
                <li
                  key={message.orderId}
                  className="bg-white rounded-lg shadow-sm p-4"
                >
                  <div className="text-lg font-medium">
                    OrderId: {message.orderId}
                  </div>
                  <div className="text-gray-600">From: {message.from}</div>
                  <div className="text-blue-600 hover:underline">
                    <Link href={`/transporter/${message.orderId}`}>
                      View Details
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Transporter;
