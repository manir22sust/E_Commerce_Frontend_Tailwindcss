# E-commerce Application App

It provides an overview of the application's features, technical details, and instructions for running and deploying the application. The App is built using React, Redux and Redux Toolkit, along with other libraries.

## Backend:

https://github.com/manir22sust/mern_e_commerce_backend

```bash
git clone https://github.com/manir22sust/mern_e_commerce_backend
```

## Features

The E-commerce application includes the following features:

1. Product lists: Users can view a list of products available for purchase.

2. Product details: Users can view detailed information about a specific product.

3. Cart: Users can add products to a shopping cart.

4. Checkout: Users can proceed to the checkout process to complete their purchase.
5. Secure card payments / Cash payments: Users can make secure payments using credit cards or choose cash on delivery.
6. Admin Panel: Admin users have access to an admin panel to manage orders and products.
7. Add/Edit Orders: Admin users can add or edit orders.
8. Add/Edit Products: Admin users can add or edit products.
9. Sorting, Filtering, and Pagination queries using Mongoose: Users can sort, filter, and paginate the product lists.
10. Authentication with Passport JS strategies: Users can authenticate using various Passport JS authentication strategies.
11. Order Emails, Reset Password Emails: Users receive order confirmation emails and can reset their passwords.
12. User Profile and user orders: Users can view and manage their profiles and order history.

## Technologies Used

- React
- JavaScript
- React Hooks
- Redux
- Redux Toolkit
- Tailwindcss

## Technical Details

The E-commerce application is built using the following technologies and frameworks:

#### Front-end:

- React 18 with Tailwind CSS: The user interface is built using React with the Tailwind CSS utility framework.
- Redux Toolkit with Async Thunk: State management is handled using Redux Toolkit and asynchronous actions using Thunks.
- React Router v6: Routing is implemented using React Router v6 for navigation between pages.
- JSON-server for front-end testing: During development, a JSON-server can be used to simulate API responses.

#### Back-end:

- MongoDB: The application uses MongoDB as the database for storing product, user, and order data.
- Mongoose : Mongoose is used as the Object Data Modeling (ODM) library for MongoDB.
- REST API using Express: The server-side API is built using Express, providing endpoints for accessing and manipulating data.
- Authentication using Passport JS: Passport JS is used for user authentication with various strategies.
- API Authentication using Passport JWT: JSON Web Tokens (JWT) are used for API authentication.
- MongoDB Atlas cloud database: The application can connect to a MongoDB Atlas cloud database for production deployment.

#### Other:

- Email using Nodemailer: Nodemailer is used for sending emails, utilizing the Gmail SMTP system.
- Payments using Stripe: Stripe is used for handling payment processing with a custom flow based on PaymentIntents.

## Prerequisites

## Installation

1. Make sure you have Node.js , npm (Node Package Manager) and Vite installed on your machine.

2. Clone this repository or download the source code.

```bash
git clone https://github.com/manir22sust/E_Commerce_Frontend_Tailwindcss.git
```

3. Open a terminal and navigate to the project directory.

```bash
cd E_Commerce_Frontend_Tailwindcss
```

4. Run the following command to install the dependencies:

```bash
yarn or npm
```

## Usage

After the installation is complete, run the following command to start the development server:

```bash
yarn start
```

1. Open your web browser and navigate to http://localhost:5173 to see the search prototype in action.

2. json-server running on

http://localhost:8080/products
http://localhost:8080/products
http://localhost:8080/categories
http://localhost:8080/brands
http://localhost:8080/users

Home https://localhost:8000

## Customization

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

[MIT](https://choosealicense.com/licenses/mit/)
