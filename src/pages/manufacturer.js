// pages/manufacturer.js

import React, { useState } from "react";
import axios from "axios";

const Manufacturer = () => {

      const genOrderId = () => {
        // Generate random alphanumeric code for order ID
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
  const [transporter, setTransporter] = useState("");

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
        // content: "",
      };

      const response = await axios.post("/api/sendmessages", messageData);
      console.log(response.data);
      // Reset form fields
      setTo("");
      setFrom("");
      setOrderId("");
      setQuantity("");
      setAddress("");
      setTransporter("");
    } catch (error) {
      console.error(error.response.data);
    }
  };




  return (
    <div>
      <h1>Manufacturer Dashboard</h1>
      <h2>Send New Message</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="to">To:</label>
          <input
            type="text"
            id="to"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="from">From:</label>
          <input
            type="text"
            id="from"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="orderId">OrderId:</label>
          <input
            type="text"
            id="orderId"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="quantity">Quantity:</label>
          <select
            id="quantity"
            type="text"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          >
            <option value="">Select Quantity</option>
            <option value="1">1 ton</option>
            <option value="2">2 ton</option>
            <option value="3">3 ton</option>
          </select>
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="transporter">Transporter:</label>
          <select
            id="transporter"
            value={transporter}
            type="text"
            onChange={(e) => setTransporter(e.target.value)}
            required
          >
            <option value="">Select Transporter</option>
            <option value="transporter1">Transporter 1</option>
            <option value="transporter2">Transporter 2</option>
            <option value="transporter3">Transporter 3</option>
          </select>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Manufacturer;
