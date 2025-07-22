# Food Fusion – MERN Stack Food Delivery App

**Food Fusion** is a full-stack food delivery web application built using the **MERN Stack** to understand real-world frontend-backend integration, authentication, cart logic, and payment workflows.

---

## 🚀 Live Demo – [Try it on Render](https://food-ordering-frontend-wu7u.onrender.com/)

---

## 📘 Academic Context

 Originally built during my MCA (2022), this project helped me learn:  
 - Full-stack request/response cycle
 - State management and routing in React
 - Token-based security using JWT
 - Payment integration using Stripe

I am now focused on **Java + Spring Boot** full-stack applications, REST APIs, and monolithic architecture design.

📌 Check out my **pinned GitHub repositories** for current Java projects.

---

## Tech Stack:
Some of the technologies used in the development of this web application are as follows:

- **[React.js](https://reactjs.org/)**: A JavaScript library for building dynamic and responsive user interfaces.
- **[Nodejs](https://nodejs.org/en/)**: A runtime environment to help build fast server applications using JS.
- **[Express.js](https://expressjs.com/)**: A popular Node.js framework to build scalable server-side for web applications.
- **[MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database)**:It provides a free cloud service to store MongoDB collections.
- **[JWT (JSON Web Tokens)](https://jwt.io/)**: A standard for securely authenticating HTTP requests.
- **[Stripe](https://stripe.com/in)** – Payment gateway
  
---

## Features
- **User Authentication**: Secure login and signup for customers using JWT.
- **Menu Browsing**: Browse restaurant menus with detailed descriptions, images, and pricing.
- **Filters**:  Filtered food menu by category like desserts, cakes, sandwich etc.  
- **Secure Payments**: Integration with payment gateway like Stripe.
- **Real-Time Order Tracking**: Live updates on order preparation and delivery status.
- **Cart Management**: Add, remove or modify items in the cart with automatic price recalculations.
- **Order History** : Allow users to view their past orders.
- **Admin Panel**: Centralized dashboard for managing orders, update orders, add food items, upload images.
- **Mobile-Responsive Design**: Optimized for seamless use across mobile, tablet, and desktop devices.

---

## 📸 Screenshots

### Desktop Views
![Product List Page](https://github.com/rangari-rani/Food-Fusion/blob/105186f572cd4616f726f0d7d4c066ff984dfc99/foodhome.png)  
_Product List Page_

![Cart Page](https://github.com/rangari-rani/Food-Fusion/blob/105186f572cd4616f726f0d7d4c066ff984dfc99/cartpage.png)  
_Cart Page_

![Login Page](https://github.com/rangari-rani/Food-Fusion/blob/105186f572cd4616f726f0d7d4c066ff984dfc99/signinpage.png)  
_Login Page_

![Admin Food List](https://github.com/rangari-rani/Food-Ordering/blob/e8b89bbee2e16cb20c58aa64f7dbded1fc581203/food%20list.png)
_Admin Page_

### 📱 Mobile Views  
<p align="center">
  <img src="https://github.com/rangari-rani/Food-Fusion/blob/28ba6cfae4f769a0c88c83ec580be72c53af88c6/mobile_signin.png" alt="Mobile Signin Page" width="18%">
  <img src="https://github.com/rangari-rani/Food-Fusion/blob/28ba6cfae4f769a0c88c83ec580be72c53af88c6/mobile_foodhome.png" alt="Mobile Product View" width="18%">
  <img src="https://github.com/rangari-rani/Food-Fusion/blob/28ba6cfae4f769a0c88c83ec580be72c53af88c6/mobile_cartpage.png" alt="Mobile Cart Page" width="18%">
  <img src="https://github.com/rangari-rani/Food-Fusion/blob/28ba6cfae4f769a0c88c83ec580be72c53af88c6/mobile_deliverypage.png" alt="Mobile Delivery Page" width="18%">
  <img src="https://github.com/rangari-rani/Food-Fusion/blob/28ba6cfae4f769a0c88c83ec580be72c53af88c6/mobile_payment.png" alt="Mobile Payment Page" width="18%">
</p>

<p align="center"><em>Mobile responsive design screenshots</em></p>

---

## 📁 Project Structure & Detailed Documentation

This repository is organized into multiple folders, each with its own README to help you get started quickly and understand that part of the project:

- [Backend (Node.js + Express) README](backend/README.md)  
  Detailed instructions to build, run, and test the backend API.

- [Frontend (React + Vite) README](frontend/README.md)  
  Setup and run instructions for the frontend UI.

- [Admin (React + Vite) README](admin/README.md)  
  Setup and run instructions for the admin UI.
  
---

## 🧑‍💻 Local Setup  
Make sure MongoDB is running locally or use MongoDB Atlas.  

## 1. Clone the repository
```bash
git clone https://github.com/rangari-rani/academic-projects-mca.git
cd academic-projects-mca/Food-Fusion-mern
```

## 2. Start the backend

```bash
cd backend
npm install
cp .env.example .env      # Fill in your Mongo URI, Stripe key, etc.
npm start
```

## 3. Start the frontend

```bash
cd ../frontend
npm install
npm start
```

---

## 📜 License

[MIT License](LICENSE)

---

## 📬 Contact

- This was one of my early projects from my MCA days. Feel free to explore my latest work on GitHub or LinkedIn!  
- 📫 Connect with me on [LinkedIn – Rani Rangari](https://www.linkedin.com/in/rani-rangari/)  
⭐ If you found this project helpful, consider giving it a star!

