# 📋 Project Execution Hub – Manage Projects, Tasks & Teams | Java Full Stack App

![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![MySQL](https://img.shields.io/badge/MySQL-00758F?style=for-the-badge&logo=mysql&logoColor=white)

A full-stack web application for collaborative project planning and task execution. Users can create technical projects, invite team members, assign issues, and track progress with category-wise filtering.

---

## 📚 About This Project

**Project Execution Hub** is a collaborative task and team management platform built using **Spring Boot** and **React** during my **PG-DAC training at CDAC**.    

Key highlights include:  
- ✅ Dynamic project creation with categories (Frontend, Backend, Full Stack)
- 👥 Member invitation via email and real-time role assignment
- 📌 Issue tracking across To-Do, In Progress, and Done stages
- 🔎 Tag and category-based project filtering for intuitive navigation

> 🕒 _Organized and published later for clarity, learning, and portfolio presentation._

---

## 🛠️ Tech Stack

- **[React.js](https://reactjs.org/)** – Frontend library for building dynamic user interfaces.
- **[Tailwind CSS](https://tailwindcss.com/)** – Utility-first CSS framework for responsive, clean UI design.
- **[Spring Boot](https://spring.io/projects/spring-boot)** – Backend framework for building scalable REST APIs.
- **[MySQL](https://www.mysql.com/)** – Relational database to store users, projects, and task data.
- **[Razorpay](https://razorpay.com/)** – Payment gateway integration for handling premium subscriptions.

---

## 📸 Screenshots

### Desktop Views
![Project List Page](https://github.com/rangari-rani/Project-Execution-Hub/blob/db7292a84b951a37ac4da2025b23e10eef02db34/screenshots/projectpage.png)  
_Project List Page_
![Project Detail Page](https://github.com/rangari-rani/Project-Execution-Hub/blob/db7292a84b951a37ac4da2025b23e10eef02db34/screenshots/projectdetailpage.png)  
_Project Detail Page_
![Comment Page](https://github.com/rangari-rani/Project-Execution-Hub/blob/db7292a84b951a37ac4da2025b23e10eef02db34/screenshots/commentpage.png)  
_Comment Page_  
![Pricing Page](https://github.com/rangari-rani/Project-Execution-Hub/blob/db7292a84b951a37ac4da2025b23e10eef02db34/screenshots/pricingpage.png)  
_Pricing Page_   

### 📱 Mobile Views  
<p align="center">
  <img src="https://github.com/rangari-rani/Project-Execution-Hub/blob/db7292a84b951a37ac4da2025b23e10eef02db34/screenshots/signin_mobile.png" alt="Mobile Signin Page" width="18%">
  <img src="https://github.com/rangari-rani/Project-Execution-Hub/blob/db7292a84b951a37ac4da2025b23e10eef02db34/screenshots/projectpage_mobile.png" alt="Mobile Product View" width="18%">
  <img src="https://github.com/rangari-rani/Project-Execution-Hub/blob/db7292a84b951a37ac4da2025b23e10eef02db34/screenshots/projectdetailpage_mobile.png" alt="Mobile Cart Page" width="18%">
  <img src="https://github.com/rangari-rani/Project-Execution-Hub/blob/db7292a84b951a37ac4da2025b23e10eef02db34/screenshots/createpage_mobile.png" width="18%">
  <img src="https://github.com/rangari-rani/Project-Execution-Hub/blob/db7292a84b951a37ac4da2025b23e10eef02db34/screenshots/pricingpage_mobile.png" alt="Mobile Payment Page" width="18%">
</p>

<p align="center"><em>Mobile responsive design screenshots</em></p>

---

## ✨ Features

- **Project Dashboard**: Create up to 3 projects (name, description, category, tags) with filtering by tech stack.
- **Team Collaboration**: Invite members via email or shareable link.
- **Task Management**: Create issues and to-do items. Assign tasks to members, update status (To Do → In Progress → Done).
- **Project View**: View full project details, active issues, and task status in a Kanban-style board.
- **Search & Filter**: Filter projects by category (Frontend, Backend, Full Stack) and tags (ReactJS, Spring Boot, etc.).
- **Razorpay Checkout (Test)**: Upgrade to unlock unlimited project creation via payment flow.


---

## 🔄 What Came Next

This project helped me apply full-stack skills in the context of real-time team collaboration—featuring project planning, member roles, and status-based task handling.  

After this, I shifted focus toward building **enterprise-grade full-stack applications** using **Spring Boot and ReactJS**, applying concepts like modular monoliths, layered architecture, and production-grade backend APIs.

📌 **Explore my pinned repositories to see enterprise-grade full-stack apps built with Spring Boot and ReactJS.**

---

## 📁 Project Structure & Detailed Documentation

This repository is organized into multiple folders, each with its own README to help you get started quickly and understand that part of the project:

- [Backend (Java + Spring Boot) README](backend/README.md)  
  Detailed instructions to build, run, and test the backend API.

- [Frontend (React + Vite) README](frontend/README.md)  
  Setup and run instructions for the frontend UI.
  
---

## 🧑‍💻 Local Setup  
> 💡 Make sure **MySQL** is running locally, and configure your `application.properties` with the correct DB credentials. 

## 1. Clone the repository

```bash
git clone https://github.com/rangari-rani/academic-projects-cdac.git
cd Project-Execution-Hub
```

## 2. Start the backend

```bash
cd backend
# Ensure you have Java 17+ and Maven installed
./mvnw spring-boot:run
```
> ⚙️ Configure your `application.properties` with database URL, server port, etc., if needed.

## 3. Start the frontend

```bash
cd frontend
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

📫 Connect with me on [LinkedIn – Rani Rangari](https://www.linkedin.com/in/rani-rangari/)   
⭐ If you found this project helpful or insightful, feel free to leave a ⭐!  
