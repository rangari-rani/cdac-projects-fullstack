# Food Fusion – MERN Stack Food Delivery App  

![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)


**Food Fusion** is a full-stack food delivery platform built with **MERN stack** (MongoDB, Express, React, Node.js), complete with user authentication, cart functionality, admin panel, and Stripe integration.  

---

## 🚀 Live Demo – [Try it on Render](https://food-ordering-frontend-wu7u.onrender.com/)
---

## 📚 About This Project

**Food Fusion** is a full-stack food delivery app built in 2024, after completing my **PG-DAC training at CDAC (2023)**. It was developed independently by following a guided YouTube series to strengthen my MERN stack skills through a hands-on, real-world project.

Key highlights include:
- Role-based access (User/Admin) with secure JWT authentication
- Dynamic food menu and cart functionality
- Stripe-powered checkout flow
- Admin dashboard for managing orders and food items    

> 📄 [Certificate of Completion – GreatStack, August 7, 2024](https://github.com/rangari-rani/academic-projects-cdac/blob/b38fb4c6f92f5fa2a5ebb13417d6880805e4dfb6/Food-Fusion-mern/Food-delivery-Greatstack.png)  
> 🛡️ Includes a scannable barcode verifying authenticity.  
> 🕒 Organized and published later for clarity, learning, and portfolio presentation.

---

## Tech Stack:

- **[React.js](https://reactjs.org/)** – Frontend library for building dynamic user interfaces.  
- **[Node.js](https://nodejs.org/en/)** – JavaScript runtime for building fast server-side applications.  
- **[Express.js](https://expressjs.com/)** – Lightweight Node.js framework for backend APIs and routing.  
- **[MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database)** – Cloud-hosted NoSQL database service.  
- **[Stripe](https://stripe.com/in)** – Secure payment gateway integration for online transactions.  
  
---

## 📸 Screenshots

### Desktop Views
![Product List Page](https://github.com/rangari-rani/academic-projects-cdac/blob/50bc1df420561d5193461c74d14bcd5c80c860ef/Food-Fusion-mern/foodhome.png)  
_Product List Page_
![Cart Page](https://github.com/rangari-rani/academic-projects-cdac/blob/50bc1df420561d5193461c74d14bcd5c80c860ef/Food-Fusion-mern/cartpage.png)  
_Cart Page_
![Login Page](https://github.com/rangari-rani/Food-Fusion/blob/105186f572cd4616f726f0d7d4c066ff984dfc99/signinpage.png)  
_Login Page_  

### 📱 Mobile Views  
<p align="center">
  <img src="https://github.com/rangari-rani/academic-projects-cdac/blob/50bc1df420561d5193461c74d14bcd5c80c860ef/Food-Fusion-mern/mobile_signin.png" alt="Mobile Signin Page" width="18%">
  <img src="https://github.com/rangari-rani/academic-projects-cdac/blob/50bc1df420561d5193461c74d14bcd5c80c860ef/Food-Fusion-mern/mobile_foodhome.png" alt="Mobile Product View" width="18%">
  <img src="https://github.com/rangari-rani/academic-projects-cdac/blob/50bc1df420561d5193461c74d14bcd5c80c860ef/Food-Fusion-mern/mobile_cartpage.png" alt="Mobile Cart Page" width="18%">
  <img src="https://github.com/rangari-rani/academic-projects-cdac/blob/50bc1df420561d5193461c74d14bcd5c80c860ef/Food-Fusion-mern/mobile_deliverypage.png" alt="Mobile Delivery Page" width="18%">
  <img src="https://github.com/rangari-rani/academic-projects-cdac/blob/50bc1df420561d5193461c74d14bcd5c80c860ef/Food-Fusion-mern/mobile_payment.png" alt="Mobile Payment Page" width="18%">
</p>

<p align="center"><em>Mobile responsive design screenshots</em></p>

---

## ✨ Features  

- **🔐 Role-Based Authentication**: Secure login/signup using JWT, with user and admin access separation.  
- **🛍 Menu Browsing & Filters**: Explore food items with category-based filtering (e.g., desserts, sandwiches).  
- **🛒 Cart System**: Add/remove/update food items with live price calculation.  
- **💳 Stripe Payment Integration**: Seamless checkout with secure Stripe gateway.  
- **📦 Order History & Status**: Users can track orders and view past purchases.  
- **⚙️ Admin Dashboard**: Manage menu, update orders, and upload images from a dedicated panel.  
- **📱 Fully Responsive UI**: Mobile-first layout using Tailwind CSS and React.

---

## 🔄 What Came Next

This project is a complete full-stack build, combining both frontend and backend logic in a real-world use case—user registration, authentication, cart flow, and admin controls.

After this, I shifted focus toward building **enterprise-grade full-stack applications** using **Spring Boot and ReactJS**, applying concepts like modular monoliths, layered architecture, and production-grade backend APIs.

📌 **Explore my pinned repositories to see enterprise-grade full-stack apps built with Spring Boot and ReactJS.**

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
git clone https://github.com/rangari-rani/cdac-projects-fullstack.git
cd Food-Fusion-mern
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
npm run dev
```
> The app will be available at:   
> 🌐 http://localhost:5173  

## 4. Start the admin panel (optional)

```bash
cd ../admin
npm install
npm run dev
```
> The app will be available at:   
> 🌐 http://localhost:5174  (or whichever port Vite assigns)
  
---

## 📜 License

[MIT License](LICENSE)

---

## 📬 Contact

📫 Connect with me on [LinkedIn – Rani Rangari](https://www.linkedin.com/in/rani-rangari/)   
⭐ If you found this project helpful or insightful, feel free to leave a ⭐!  
