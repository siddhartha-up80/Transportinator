# Transportinator

Transportinator is a web dashboard built using the MERN stack (MongoDB, Express, React, Node.js) that facilitates communication between two users: Manufacturer and Transporter. Each user has different input forms for entering data and can exchange messages related to orders. This project enables seamless coordination and collaboration between the two user roles.

## Technologies Used

- MongoDB: NoSQL database for storing user data and messages.
- Express: Web application framework for building the backend API.
- Next.js: Next.js by Vercel is the full-stack React framework for the web.
- React: JavaScript library for building the user interface.
- Node.js: JavaScript runtime for executing server-side code.
- Tailwind CSS: Utility-first CSS framework for styling the components.
- Axios: Promise-based HTTP client for making API requests.
- Bcrypt.js: Library for hashing and comparing passwords.
- JSON Web Tokens (JWT): Authentication mechanism for securing user sessions.
- Mongoose: MongoDB object modeling for Node.js.

## Features

- User authentication and registration with the option to choose either Manufacturer or Transporter role.
- Landing page for each user role, displaying a list of received messages with order details.
- Search functionality to filter messages based on order ID, "To" and "From" fields.
- Manufacturer Input Form:
  - Order ID: Auto-populated alphanumeric code (e.g., XB120).
  - To: Field to enter recipient information.
  - From: Field to enter sender information.
  - Quantity: Dropdown menu to select the desired tonnage (1, 2, or 3 tons).
  - Address: Auto-populated field based on the address entered during registration.
  - Transporter: Dropdown menu to select a single transporter.
  - Send Button: Sends the message to the selected transporter.
- Transporter Input Form:
  - Order ID: List box to select the order ID received from the Manufacturer.
  - Price: Input field to enter the price as a floating-point value.
  - Reply Button: Sends the message back to the Manufacturer.
