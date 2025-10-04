# 🍽️ Food Fusion – Admin Panel (React + Vite)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

This is the admin dashboard of Food Fusion, a MERN-based food delivery platform. Built with React.js and Axios, it enables administrators to manage food items and monitor customer orders efficiently.

---

## 🚀 Live Demo - [Try it on Render](https://food-ordering-admin-j5fg.onrender.com/add)  

---

## 🛠️ Tech Stack

- [**React.js**](https://reactjs.org/) – Building dynamic, component-based user interfaces  
- [**Vite**](https://vitejs.dev/) – Lightning-fast frontend build tool and development server  
- [**Axios**](https://axios-http.com/) – Simplified HTTP requests for backend communication

---

## 📸 Screenshots

![Home Page](https://github.com/rangari-rani/academic-projects-cdac/blob/50bc1df420561d5193461c74d14bcd5c80c860ef/Food-Fusion-mern/admin_add.png)
_Admin - Add Product_
![Collection Page](https://github.com/rangari-rani/academic-projects-cdac/blob/50bc1df420561d5193461c74d14bcd5c80c860ef/Food-Fusion-mern/admin_list.png)
_Admin - List Products_
![Product Page](https://github.com/rangari-rani/academic-projects-cdac/blob/50bc1df420561d5193461c74d14bcd5c80c860ef/Food-Fusion-mern/admin_orders.png)
_Admin - Orders Page_  

### Mobile Views
<p align="center">
  <img src="https://github.com/rangari-rani/academic-projects-cdac/blob/50bc1df420561d5193461c74d14bcd5c80c860ef/Food-Fusion-mern/admin_add_mobile.png" alt="Mobile Product List" width="22%">
  &nbsp;&nbsp;&nbsp;
  <img src="https://github.com/rangari-rani/academic-projects-cdac/blob/50bc1df420561d5193461c74d14bcd5c80c860ef/Food-Fusion-mern/admin_list_mobile.png" alt="Mobile Product View" width="22%">
  &nbsp;&nbsp;&nbsp;
  <img src="https://github.com/rangari-rani/academic-projects-cdac/blob/50bc1df420561d5193461c74d14bcd5c80c860ef/Food-Fusion-mern/admin_orders_mobile.png" alt="Mobile Login" width="22%">
  
</p>
_Mobile responsive design screenshots_

---

## ✨ Features

- 📦 **Add Item** – Upload new food items with image, name, description, category, and price
- 🧾 **View Product List** – See a list of all food items with quick delete/update options
- 📬 **View Orders** – See all placed orders with user delivery info and purchased items
- 📱 **Responsive Layout** – Admin dashboard works across desktop and mobile resolutions

---

## 📂 Folder Structure

```bash
admin/
├── components/     → Sidebar, Navbar
├── pages/          → Add.jsx, List.jsx, Orders.jsx
├── App.jsx         → Route definitions
├── index.css
```

---

## 📮 API Endpoints

### 🍽️ Food Management

| Method | Endpoint           | Description           |
|--------|--------------------|-----------------------|
| POST   | /api/food/add      | Add a new food item   |
| GET    | /api/food/list     | Get all food items    |
| POST   | /api/food/remove   | Remove a food item    |

### 📦 Order Management

| Method | Endpoint             | Description                    |
|--------|----------------------|--------------------------------|
| GET    | /api/order/list      | Get all orders                 |
| POST   | /api/order/status    | Update order status            |

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/rangari-rani/cdac-projects-fullstack.git
cd Food-Fusion-mern/admin
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

> The app will be available at:  
> 🌐 http://localhost:5174 (or whichever port Vite assigns)  

🔗 **Note:** Ensure the backend server is running at `http://localhost:4000` before using the admin panel.  

---

## 📜 License

[MIT License](LICENSE)

---

## 📬 Contact
     
📫 Connect with me on [LinkedIn – Rani Rangari](https://www.linkedin.com/in/rani-rangari/)   
⭐ If you found this project helpful or insightful, feel free to leave a ⭐!  

