# 🍔 Food Fusion – Backend (Node.js + Express)

This is the **Node.js + Express backend** for the Food Delivery App built during my MCA (2022) using the MERN stack.  
🔧 It handles user authentication, order placement, cart management, and integrates with Stripe for secure payment processing.

---

## 🚀 Features

- 🔐 **JWT-based Authentication** – Signup & login APIs
- 🛒 **Cart API** – Add/remove food items
- 📦 **Order Management** – Save order details and user delivery info
- 💳 **Stripe Integration** – Handles checkout and payment sessions
- 🌐 **MongoDB** – Stores user data, cart items, and orders

---

## 🛠️ Tech Stack

- **[Node.js](https://nodejs.org/)** – JavaScript runtime for building scalable backend services  
- **[Express.js](https://expressjs.com/)** – Fast, unopinionated backend framework  
- **[MongoDB](https://www.mongodb.com/)** + **[Mongoose](https://mongoosejs.com/)** – NoSQL database and object modeling  
- **[JWT](https://jwt.io/)** – Token-based authentication for secure login sessions  
- **[Stripe API](https://stripe.com/in)** – Secure payment processing and checkout  
- **[Multer](https://github.com/expressjs/multer)** – Middleware for handling `multipart/form-data`, used for image uploads  
- **[dotenv](https://www.npmjs.com/package/dotenv)** – Load environment variables from `.env` file  
- **[cors](https://www.npmjs.com/package/cors)** – Enable Cross-Origin Resource Sharing for frontend-backend communication  
- **[bcryptjs](https://www.npmjs.com/package/bcryptjs)** – Hash user passwords before saving to the database

---

## 📂 Folder Structure

```text
backend/
├── config/           → MongoDB connection setup (e.g., db.js)
├── controllers/      → Business logic for routes (auth, cart, orders, etc.)
├── middleware/       → Custom middleware like JWT auth validator
├── models/           → Mongoose schemas for User, Product, and Order
├── routes/           → Route definitions for API endpoints (auth, cart, orders)
├── uploads/          → Folder to store uploaded files (e.g., product images)
├── .env.example      → Sample environment file for required secrets
├── server.js         → Main server entry point that runs the Express app
```

---

## 📬 Sample API Endpoints

| Method | Endpoint                       | Description              |
| ------ | ------------------------------ | ------------------------ |
| POST   | `/api/register`                | Register a new user      |
| POST   | `/api/login`                   | Login and get JWT token  |
| POST   | `/api/cart`                    | Add/update cart items    |
| GET    | `/api/cart`                    | Get cart for logged user |
| POST   | `/api/order`                   | Place a new order        |
| GET    | `/api/orders/:id`              | Get user's past orders   |
| POST   | `/api/create-checkout-session` | Create Stripe session    |  

🔐 Secured endpoints require an Authorization: Bearer <token> header.  

---

## 🔧 Environment Setup

### 1. Create a `.env` file in `/backend` with the following:

```bash
PORT=4000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
```

### 2. Install dependencies:

```bash
npm install
```

### 3. Start backend server:

```bash
npm run start
```

---

## 🧾 Academic Note  

- 🔍 This backend was originally built during my MCA (2022) to learn Express.js, secure APIs, and payment flow integration.
📢 I’m now focused on building Java + Spring Boot full-stack projects with real-world architecture and API design.
- 📌 **Check my pinned GitHub repositories for latest monolithic projects.**  

---

## 📜 License

[MIT License](LICENSE)

---

## 📬 Contact

-  Feel free to explore my latest work on GitHub or LinkedIn! 
- 📫 Connect with me on [LinkedIn – Rani Rangari](https://www.linkedin.com/in/rani-rangari/)  
⭐ If you found this project helpful, consider giving it a star!

