# 🍽️ Food Fusion – Backend (Node.js + Express)

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-635BFF?style=for-the-badge&logo=stripe&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)

This is the **backend application** of Food Fusion, built with **Node.js**, **Express**, and **MongoDB**. It manages RESTful APIs for authentication, user/admin roles, product handling, order processing, and integrates **Stripe** for secure payments.

---

## ⚙️ Tech Stack

- **[Node.js](https://nodejs.org/)** – JavaScript runtime environment  
- **[Express.js](https://expressjs.com/)** – Backend web framework  
- **[MongoDB](https://www.mongodb.com/)** – NoSQL database  
- **[Mongoose](https://mongoosejs.com/)** – MongoDB ODM for schema & queries  
- **[JWT](https://jwt.io/)** – Authentication using JSON Web Tokens  
- **[Bcrypt.js](https://www.npmjs.com/package/bcryptjs)** – Password hashing  
- **[Stripe](https://stripe.com/)** – Payment integration  

> ➡️ For full feature list and screenshots, check the [root README](../README.md).

---

## 📂 Folder Structure

```text
backend/
├── config/           → MongoDB connection setup (e.g., db.js)
├── controllers/      → Business logic for routes (cart, food, order, user)
├── middleware/       → auth.js
├── models/           → Mongoose schemas for food, order, user
├── routes/           → Route definitions for API endpoints (cart, food, order, user)
├── uploads/          → Folder to store uploaded files (e.g., product images)
├── .env.example      → Sample environment file for required secrets
├── server.js         → Main server entry point that runs the Express app
```

---

## 📮 API Endpoints

### 👤 User

| Method | Endpoint             | Description             |
|--------|----------------------|-------------------------|
| POST   | `/api/user/register` | Register a new user     |
| POST   | `/api/user/login`    | Log in an existing user |

### 🍽️ Food

| Method | Endpoint           | Description                     |
|--------|--------------------|---------------------------------|
| POST   | `/api/food/add`    | Add a new food item (with image)|
| GET    | `/api/food/list`   | Get list of all food items      |
| POST   | `/api/food/remove` | Remove a food item              |

### 🛒 Cart

| Method | Endpoint            | Description           |
|--------|---------------------|-----------------------|
| POST   | `/api/cart/add`     | Add item to cart      |
| POST   | `/api/cart/remove`  | Remove item from cart |
| POST   | `/api/cart/get`     | Get all cart items    |

### 📦 Orders

| Method | Endpoint               | Description                     |
|--------|------------------------|---------------------------------|
| POST   | `/api/order/place`     | Place a new order               |
| POST   | `/api/order/verify`    | Verify Stripe payment session   |
| POST   | `/api/order/userorders`| Get orders of logged-in user    |
| GET    | `/api/order/list`      | Get all orders (admin)          |
| POST   | `/api/order/status`    | Update order status             |

🔐 Secured endpoints require an `Authorization: Bearer <token>` header. 

---

## 🔧 Environment Setup  

> MongoDB set up locally or using MongoDB Atlas  
> Node.js and npm installed

### 1. Create a `.env` file in `/backend` with the following:

```bash
PORT=4000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
```

### 2. Install Dependencies:

```bash
npm install
```

### 3. Start backend server:

```bash
npm start
```

> The backend should now be running on:
> ➡️ http://localhost:4000/api

---

## 📜 License

[MIT License](LICENSE)  

---

## 📬 Contact
     
📫 Connect with me on [LinkedIn – Rani Rangari](https://www.linkedin.com/in/rani-rangari/)   
⭐ If you found this project helpful or insightful, feel free to leave a ⭐!  
