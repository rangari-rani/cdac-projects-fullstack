# 📋 Project Execution Hub – Backend (Java + Spring Boot)

![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)


This is the backend application of Project Execution Hub, built with Java, Spring Boot, and MySQL.
It handles RESTful APIs for user authentication, project and issue management, member collaboration,
status tracking, and integrates Razorpay for premium project creation.

---

## ⚙️ Tech Stack

- **[Java](https://www.oracle.com/java/)** – Core backend language for building scalable APIs  
- **[Spring Boot](https://spring.io/projects/spring-boot)** – Framework for creating RESTful backend services  
- **[MySQL](https://www.mysql.com/)** – Relational database for storing users, projects, and tasks  
- **[Razorpay](https://razorpay.com/)** – Payment gateway integration for premium project access  
- **[Postman](https://www.postman.com/)** – API testing and debugging tool during development

> ➡️ For full feature list and screenshots, check the [root README](../README.md).

---

## 📂 Folder Structure

```text
server/
├── config/       # Configuration classes (e.g., security, CORS)
├── controller/   # REST API endpoints (e.g., project, user, issue controllers)     
├── model/        # Entity classes mapped to database tables
├── repository/   # Spring Data JPA interfaces for DB access        
├── request/      # DTOs for handling incoming API requests     
├── response/     # DTOs for shaping API responses to the frontend     
├── service/      # Business logic and service layer implementations  
├── resources/    # application.properties and static resources 
```

---

## 📮 API Endpoints

### 🔐 Authentication

| Method | Endpoint         | Description                      |
|--------|------------------|----------------------------------|
| POST   | `/auth/signup`   | Register a new user              |
| POST   | `/auth/signin`   | Authenticate and log in a user   |

### 📁 Project

| Method | Endpoint                              | Description                                      |
|--------|----------------------------------------|--------------------------------------------------|
| GET    | `/api/projects`                        | Fetch all projects with optional category/tag    |
| GET    | `/api/projects/{projectId}`            | Get project details by ID                        |
| POST   | `/api/projects`                        | Create a new project                             |
| PATCH  | `/api/projects/{projectId}`            | Update a specific project                        |
| DELETE | `/api/projects/{projectId}`            | Delete a project                                 |
| GET    | `/api/projects/search`                 | Search for projects using keyword                |
| GET    | `/api/projects/{projectId}/chat`       | Get project-specific chat                        |
| POST   | `/api/projects/invite`                 | Invite user to a project                         |
| GET    | `/api/projects/accept_invitation`      | Accept a project invitation via token            |

🔐 Secured endpoints require an `Authorization: Bearer <token>` header. 

---

## 🔧 Environment Setup

> ✅ Java 17+, Maven, and MySQL installed  
> ✅ Gmail account configured for SMTP (for email invites)  
> ✅ Razorpay account for test keys

### 1. Configure `application.properties`

Set the following essential properties:

- **Server Port**
- **MySQL Database URL, Username & Password**
- **Spring Mail (SMTP) settings**  
- **Razorpay API keys** for payment processing

Example:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/your_database_name
spring.datasource.username=your_mysql_username
spring.datasource.password=your_mysql_password

spring.mail.username=your_email@gmail.com
spring.mail.password=your_app_password

razorpay.key=your_razorpay_key
razorpay.secret=your_razorpay_secret
```

## Run the Application  

```bash
./mvnw spring-boot:run
```
> The backend should now be running at:
> ➡️ http://localhost:5054/api
---

## 📜 License

[MIT License](LICENSE)  

---

## 📬 Contact
     
📫 Connect with me on [LinkedIn – Rani Rangari](https://www.linkedin.com/in/rani-rangari/)   
⭐ If you found this project helpful or insightful, feel free to leave a ⭐!  
