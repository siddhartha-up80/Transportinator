import React, { useState, useEffect } from "react";
import axios from "axios";

const Manufacturer = () => {
  const genOrderId = () => {
    // for Generate random alphanumeric code for order ID
    const alphanumeric = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let orderId = "";
    for (let i = 0; i < 4; i++) {
      orderId += alphanumeric.charAt(
        Math.floor(Math.random() * alphanumeric.length)
      );
    }
    return orderId;
  };
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const [orderId, setOrderId] = useState(genOrderId());
  const [quantity, setQuantity] = useState("");
  const [address, setAddress] = useState("");
  const [transporter, setTransporter] = useState("transporter1");
  const [messages, setMessages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const messageData = {
        orderId,
        to,
        from,
        quantity,
        address,
        transporter,
      };

      const response = await axios.post("/api/sendmessages", messageData);
      console.log(response.data);

      // for reseting form fields
      setTo("");
      setFrom("");
      setOrderId(genOrderId());
      setQuantity("");
      setAddress("");
      setTransporter("");
    } catch (error) {
      console.error(error.response.data);
    }
  };

  const fetchMessages = async () => {
    try {
      const response = await axios.get(
        `/api/manufacturer-messages?transporterId=${transporter}`
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

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900">
          Manufacturer Dashboard
        </h1>

      {/* to get recieved messages from transporters which was replied by individual transporters  */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold">
            Received Messages from Transporters
          </h2>
          {messages.length === 0 ? (
            <p>No messages found</p>
          ) : (
            <ul className="mt-4 space-y-4">
              {messages.map((message) => (
                <li
                  key={message._id}
                  className="bg-white rounded-lg shadow-sm p-4"
                >
                  <div className="text-lg font-medium">
                    OrderId: {message.orderId}
                  </div>
                  <div className="mt-2">
                    Reply: {message.reply ? message.reply : "Reply not given"}
                  </div>
                  <div className="mt-2">
                    Price: {message.price ? message.price : "Reply not given"}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold">Send New Message</h2>
          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <div>
              <label
                htmlFor="to"
                className="block text-sm font-medium text-gray-700"
              >
                To:
              </label>
              <input
                type="text"
                id="to"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                required
                className="mt-1 px-4 py-2 border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="from"
                className="block text-sm font-medium text-gray-700"
              >
                From:
              </label>
              <input
                type="text"
                id="from"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                required
                className="mt-1 px-4 py-2 border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm rounded-md"
              />
            </div>

            <div>
              <label
                htmlFor="orderId"
                className="block text-sm font-medium text-gray-700"
              >
                OrderId:
              </label>
              <input
                type="text"
                id="orderId"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                required
                className="mt-1 px-4 py-2 border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="quantity"
                className="block text-sm font-medium text-gray-700"
              >
                Quantity:
              </label>
              <select
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                required
                className="mt-1 px-4 py-2 border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm rounded-md"
              >
                <option value="">Select Quantity</option>
                <option value="1">1 ton</option>
                <option value="2">2 ton</option>
                <option value="3">3 ton</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Address:
              </label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                className="mt-1 px-4 py-2 border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm rounded-md"
              />
            </div>
            <div>
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
                required
                className="mt-1 px-4 py-2 border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm rounded-md"
              >
                <option value="transporter1">Transporter 1</option>
                <option value="transporter2">Transporter 2</option>
                <option value="transporter3">Transporter 3</option>
              </select>
            </div>
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Manufacturer;
