# 🧘‍♀️ Holistic Wellbeing – Backend (Node.js + Express)

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-635BFF?style=for-the-badge&logo=stripe&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)

This is the backend application of Holistic Wellbeing, built with Node.js, Express, and MongoDB. 
It manages RESTful APIs for authentication, user/instructor roles, course management, 
video handling via Cloudinary, and integrates Stripe for secure course purchases.

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
server/
├── controllers/      → Business logic for routes (course, user etc)
├── database/         → db.js
├── middlewares/      → isAuthenticated.js
├── models/           → Mongoose schemas for course, user etc
├── routes/           → Route definitions for API endpoints (course, user)
├── uploads/          → Folder to store uploaded files (e.g., product images)
├── utils/            → Cloudinary.js
├── .env.example      → Sample environment file for required secrets
├── index.js         → Main server entry point that runs the Express app
```

---

## 📮 API Endpoints

### 👤 User

| Method | Endpoint                      | Description                             |
| ------ | ----------------------------- | --------------------------------------- |
| POST   | `/api/v1/user/register`       | Register a new user                     |
| POST   | `/api/v1/user/login`          | Log in an existing user                 |
| GET    | `/api/v1/user/profile`        | Get current user profile (JWT required) |
| PUT    | `/api/v1/user/profile/update` | Update user profile photo/info (JWT)    |
| GET    | `/api/v1/user/logout`         | Log out the user                        |

### 🎓 Course Management (Instructor)

| Method | Endpoint                               | Description                              |
| ------ | -------------------------------------- | ---------------------------------------- |
| GET    | `/api/v1/course/published-courses`     | View all published wellness courses      |
| GET    | `/api/v1/course/search`                | Search for courses (JWT required)        |
| POST   | `/api/v1/course/`                      | Create a new course (Instructor only)    |
| GET    | `/api/v1/course/`                      | Get instructor's created courses (JWT)   |
| GET    | `/api/v1/course/:courseId`             | Get course details by ID (JWT)           |
| PATCH  | `/api/v1/course/:courseId`             | Toggle publish/unpublish course (JWT)    |
| POST   | `/api/v1/course/:courseId/lecture`     | Add a lecture to a course (JWT + Upload) |
| GET    | `/api/v1/course/:courseId/lecture`     | Get all lectures in a course (JWT)       |
| POST   | `/api/v1/course/:courseId/lecture/:id` | Edit specific lecture (JWT)              |
| GET    | `/api/v1/course/lecture/:lectureId`    | Get lecture by ID (JWT)                  |
| DELETE | `/api/v1/course/lecture/:lectureId`    | Delete a lecture from course (JWT)       |

🔐 Secured endpoints require an `Authorization: Bearer <token>` header. 

---

## 🔧 Environment Setup  

> MongoDB set up locally or using MongoDB Atlas  
> Node.js and npm installed

### 1. Create a `.env` file in `/backend` with the following:

```bash
PORT=3000
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
npm run dev
```

> The backend should now be running on:
> ➡️ http://localhost:3000/api

---

🛠️ **Note**:  
By default, every registered user has the role of `"student"`.   
To assign `"instructor"` privileges (e.g., for course creation), manually update the user's role in MongoDB:

---

## 📜 License

[MIT License](LICENSE)  

---

## 📬 Contact
     
📫 Connect with me on [LinkedIn – Rani Rangari](https://www.linkedin.com/in/rani-rangari/)   
⭐ If you found this project helpful or insightful, feel free to leave a ⭐!  
