import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const TransporterPage = () => {
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
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900">
          Transporter Dashboard
        </h1>

        <div className="mt-8">
          <label
            htmlFor="transporter"
            className="block text-sm font-medium text-gray-700"
          >
            Transporter:
          </label>
          <select
            id="transporter"
            value={transporter}
            onChange={(e) => setTransporter(e.target.value)}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            required
          >
            <option value="transporter1">Transporter 1</option>
            <option value="transporter2">Transporter 2</option>
            <option value="transporter3">Transporter 3</option>
          </select>
        </div>

        <h2 className="mt-8 text-xl font-semibold">Received Messages</h2>
        {messages.length === 0 ? (
          <p>No messages found</p>
        ) : (
          <ul className="mt-4 space-y-4">
            {messages.map((message) => (
              <li key={message._id}>
                <button
                  onClick={() => setSelectedOrderId(message.orderId)}
                  className="text-blue-500 underline focus:outline-none"
                >
                  {message.orderId}
                </button>
              </li>
            ))}
          </ul>
        )}

        <h2 className="mt-8 text-xl font-semibold">Send Reply</h2>
        {selectedOrderId ? (
          <form onSubmit={handleSendReply} className="mt-4 space-y-4">
            <div>
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700"
              >
                Price:
              </label>
              <input
                type="number"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                required
              />
            </div>
            <div>
              <label
                htmlFor="reply"
                className="block text-sm font-medium text-gray-700"
              >
                Reply:
              </label>
              <textarea
                id="reply"
                value={reply}
                onChange={(e) => setReply(e.target.value)}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Send Reply
              </button>
            </div>
          </form>
        ) : (
          <p>No order selected</p>
        )}
      </div>
    </div>
  );
};

export default TransporterPage;
