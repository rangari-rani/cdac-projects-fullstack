# 🧘‍♀️ Holistic Wellbeing – MERN Stack Health & Mindfulness App

![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)


A full-stack web application that enables users to explore, purchase, and access wellness courses like yoga, meditation, and healthy living. Instructors can create and publish video courses with real-time revenue insights.  

---

## 📚 About This Project

**Holistic Wellbeing** is a full-stack wellness course platform built in 2024, after completing my **PG-DAC training at CDAC (2023)**.   
This self-initiated MERN stack project was designed to simulate real-world e-learning platforms, integrating authentication, payments, and role-based dashboards.

Key highlights include:
- User registration, course browsing, and secure Stripe checkout
- Access to full video lectures upon course purchase
- Instructor dashboard to track revenue and upload video content via Cloudinary
- Role-switching via MongoDB for testing both user and instructor flows

> 🕒 _**Organized and published later for clarity, learning, and portfolio presentation**._

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
![Home Page](https://github.com/rangari-rani/academic-projects-cdac/blob/6cd5a48f3e9544c5581bfcb9ce7f60beebc5888c/Holistic-WellBeing-mern/screenshots/homepage.png)  
_Home Page_
![Course Page](https://github.com/rangari-rani/academic-projects-cdac/blob/6cd5a48f3e9544c5581bfcb9ce7f60beebc5888c/Holistic-WellBeing-mern/screenshots/coursepage.png)  
_Course Page_
![Lectures Page](https://github.com/rangari-rani/academic-projects-cdac/blob/6cd5a48f3e9544c5581bfcb9ce7f60beebc5888c/Holistic-WellBeing-mern/screenshots/lecturespage.png)  
_Lectures Page_  
![Add Course](https://github.com/rangari-rani/academic-projects-cdac/blob/6cd5a48f3e9544c5581bfcb9ce7f60beebc5888c/Holistic-WellBeing-mern/screenshots/addcourse.png)  
_Add Course Page_  
![Dashboard](https://github.com/rangari-rani/academic-projects-cdac/blob/6cd5a48f3e9544c5581bfcb9ce7f60beebc5888c/Holistic-WellBeing-mern/screenshots/dashboard.png)  
_Dashboard Page_  

### 📱 Mobile Views  
<p align="center">
  <img src="https://github.com/rangari-rani/academic-projects-cdac/blob/6cd5a48f3e9544c5581bfcb9ce7f60beebc5888c/Holistic-WellBeing-mern/screenshots/signinpage_mobile.png" alt="Mobile Signin Page" width="18%">
  <img src="https://github.com/rangari-rani/academic-projects-cdac/blob/6cd5a48f3e9544c5581bfcb9ce7f60beebc5888c/Holistic-WellBeing-mern/screenshots/homepage_mobile.png" alt="Mobile Product View" width="18%">
  <img src="https://github.com/rangari-rani/academic-projects-cdac/blob/6cd5a48f3e9544c5581bfcb9ce7f60beebc5888c/Holistic-WellBeing-mern/screenshots/lecturespage_mobile.png" alt="Mobile Cart Page" width="18%">
  <img src="https://github.com/rangari-rani/academic-projects-cdac/blob/6cd5a48f3e9544c5581bfcb9ce7f60beebc5888c/Holistic-WellBeing-mern/screenshots/addcourse_mobile.png" width="18%">
  <img src="https://github.com/rangari-rani/academic-projects-cdac/blob/6cd5a48f3e9544c5581bfcb9ce7f60beebc5888c/Holistic-WellBeing-mern/screenshots/coursepage_mobile.png" alt="Mobile Payment Page" width="18%">
</p>

<p align="center"><em>Mobile responsive design screenshots</em></p>

---

## ✨ Features   

### 👤 User Features  
- 🔐 User authentication (Login/Signup)  
- 🧘 Browse wellness courses (yoga, meditation, etc.)
- 📄 View course details (title, description, price, preview)
- 💳 Purchase courses using **Stripe**
- 🎥 Access full course after purchase (e.g., 4 video lectures)

### 🎓 Instructor Features  
- 🔐 Instructor login (after role update in MongoDB)
- 📊 Dashboard showing: Sales, Revenue
- ➕ Add new courses with: Title, description, price, lecture videos (uploaded via **Cloudinary**)
- 🚀 Publish/unpublish courses

---

## 🔄 What Came Next

This project is a complete full-stack build, integrating both frontend and backend logic for a real-world learning platform—user authentication, course browsing, Stripe checkout, video lectures, and instructor dashboard with revenue tracking.

After this, I shifted focus toward building **enterprise-grade full-stack applications** using **Spring Boot and ReactJS**, applying concepts like modular monoliths, layered architecture, and production-grade backend APIs.

📌 **Explore my pinned repositories to see enterprise-grade full-stack apps built with Spring Boot and ReactJS.**

---

## 📁 Project Structure & Detailed Documentation

This repository is organized into multiple folders, each with its own README to help you get started quickly and understand that part of the project:

- [Backend (Node.js + Express) README](backend/README.md)  
  Detailed instructions to build, run, and test the backend API.

- [Frontend (React + Vite) README](frontend/README.md)  
  Setup and run instructions for the frontend UI.
  
---

## 🧑‍💻 Local Setup  
Make sure MongoDB is running locally or use MongoDB Atlas.  

## 1. Clone the repository

```bash
git clone https://github.com/rangari-rani/academic-projects-cdac.git
cd Holistic-Wellbeing-mern
```

## 2. Start the backend

```bash
cd backend
npm install
cp .env.example .env      # Fill in your Mongo URI, Stripe key, etc.
npm run dev
```

## 3. Start the frontend

```bash
cd ../frontend
npm install
npm run dev
```
> The app will be available at:   
> 🌐 http://localhost:5173  

---

## 📜 License

[MIT License](LICENSE)

---

## 📬 Contact

Built as part of my full-stack learning journey after completing CDAC (2023).   
📫 Connect with me on [LinkedIn – Rani Rangari](https://www.linkedin.com/in/rani-rangari/)   
⭐ If you found this project helpful or insightful, feel free to leave a ⭐!  
