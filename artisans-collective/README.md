# The Artisans Collective

The Artisans Collective is an e-commerce platform that connects local artisans with customers to showcase and sell handcrafted products, promoting unique and sustainable goods.

## Demo:

![Product-List](https://github.com/rangari-rani/The-Artisans-Collective/blob/e8dbbb7beb325a0e88b5ee0a23e19abe074288cd/art1.png)

![Product-Description](https://github.com/rangari-rani/The-Artisans-Collective/blob/e8dbbb7beb325a0e88b5ee0a23e19abe074288cd/art2.png)

![Login](https://github.com/rangari-rani/The-Artisans-Collective/blob/e8dbbb7beb325a0e88b5ee0a23e19abe074288cd/art4.png)

## Tech Stack:

Some of the technologies used in the development of this web application are as follows:

- **[React.js](https://reactjs.org/)**: A JavaScript library for building dynamic and responsive user interfaces.
- **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for creating custom, responsive designs quickly.
- **[Spring Boot](https://spring.io/projects/spring-boot)**: A robust Java framework for developing scalable and production-ready backend services.
- **[JWT (JSON Web Tokens)](https://jwt.io/)**: A standard for securely authenticating HTTP requests.
- **[MySQL](https://www.mysql.com/)**: A widely-used, open-source relational database management system for efficiently storing and managing structured data.
- **[Vercel](https://vercel.com/)**: A platform for deploying and hosting modern web applications.

## Features

### Authentication & Authorization:

- **Registration & Validation**: User details are validated using Yup, and an OTP is generated using Formic during registration.
- **Email Verification**: OTP is sent via Java Mail Sender for account verification.
- **JWT Token Authentication**: Issued after email verification for secure login.
- **Role-based Authentication**: Ensures users, sellers and admins have appropriate access.

### User Features:

1. **Product Management**:

- **Fetch product list** : Users can browse through available products.
- **Search, Filter & Sort** : Search & filter products by categories and sort them by price.
- **Pagination** : Display products in multiple pages.
- **Product Details** : View detailed information about specific product.

2. **Cart Management**:

   - **Add Item to Cart** : Add products to shopping cart.
   - **Update Cart Item** : Modify item quantities or remove items from the cart.

3. **Checkout Process**:

   - **Add New Address** : Add and manage shipping address during checkout.
   - **Payment Gateway** : Checkout using payment option like Razorpay.

4. **Order History**:

   - **View Past orders** : Users can see their previous order details.
   - cancel order

5. **Review & Rating** : Write Review & give ratings.

### Seller Features:

1. **Product Management**:

   - **Create Products** : Add new products to the store.
   - **Order Management** : View and manage customer orders.

2. **Payment & Transactions**:
   - **Track payments** : Monitor incoming payments for orders.
   - **Transaction History** : Detailed history of all transactions.

### Admin Features:

- **Home Page Management** : Update and customize the home page through admin panel.

### License:

[MIT License](LICENSE)
