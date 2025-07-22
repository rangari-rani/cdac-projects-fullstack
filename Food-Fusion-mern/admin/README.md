# 🛠️ Food Fusion – Admin Panel (React)

This is the **Admin Panel** for the Food Fusion food delivery app. Built using **React.js**, it enables the admin to manage products and orders easily through a user-friendly dashboard.

---

## 🚀 Features

- 📦 **Add Item** – Upload new food items with image, name, description, category, and price
- 🧾 **View Product List** – See a list of all food items with quick delete/update options
- 📬 **View Orders** – See all placed orders with user delivery info and purchased items
- 📱 **Responsive Layout** – Admin dashboard works across desktop and mobile resolutions

---

## 🛠️ Tech Stack

- **[React.js](https://reactjs.org/)** – Component-based UI
- **[Axios](https://axios-http.com/)** – API requests
- **[React Router](https://reactrouter.com/)** – Routing between dashboard views
- **[CSS Modules / Plain CSS]** – For dashboard styling
- **[MongoDB](https://www.mongodb.com/)** – Product and order data
- **[Express.js](https://expressjs.com/)** – API backend (shared with user app)

---

## 📂 Folder Structure

```bash
admin/
├── components/     → Reusable components like Sidebar, Navbar
├── pages/          → Add.jsx, List.jsx, Orders.jsx
├── App.jsx         → Route definitions
├── index.css
```

---

## 🖥️ Dashboard Pages

| Page             | Description                                                |
| ---------------- | ---------------------------------------------------------- |
| **Add Item**     | Form to add new food item: image, name, desc, price, etc.  |
| **Product List** | Table layout of existing products with delete/edit |
| **Orders**       | View placed orders with item and delivery details          |

---

## 📬 API Dependencies

```bash
cd ../admin
npm install
npm start
```

## 📘 Notes

- 🔐 This panel is intended for internal/admin use only
- 🖼️ Uploaded images are saved in the uploads/ directory of the backend
- ✅ This dashboard helped me understand admin-side workflows and full-stack role separation

---

## 📜 License

[MIT License](LICENSE)

---

## 📬 Contact

-  Feel free to explore my latest work on GitHub or LinkedIn! 
- 📫 Connect with me on [LinkedIn – Rani Rangari](https://www.linkedin.com/in/rani-rangari/)  
⭐ If you found this project helpful, consider giving it a star!
