![image](https://github.com/shubhatRashid/Ecommer/assets/106548827/e16e34df-f900-48db-9254-ed2f722dbb94)


# Ecommer
This README provides essential information and instructions for setting up, deploying, and using the Ecommerce WebApp developed with Strapi, React, PostgreSQL, and Stripe for payment processing.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Backend (Strapi)](#backend-strapi)
  - [Frontend (React)](#frontend-react)
- [Configuration](#configuration)
  - [Environment Variables](#environment-variables)
  - [Stripe Integration](#stripe-integration)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Ecommerce WebApp is a full-stack application that allows users to browse, search, and purchase products online. It utilizes Strapi as the backend CMS for managing products and orders, React for the frontend user interface, PostgreSQL as the database, and Stripe for secure payment processing.

## Features

- User authentication and registration.
- Shopping cart and order management.
- Secure payment processing using Stripe.
- Admin dashboard for managing products and orders.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or higher)
- npm (v7 or higher)
- PostgreSQL database
- Stripe account for payment processing

## Getting Started

Follow the steps below to set up and run the Ecommerce WebApp on your local machine.

### Backend (Strapi)

1. Clone this repository.
2. Navigate to the `backend` directory: `cd backend`.
3. Install dependencies: `npm install`.
4. Copy the `.env.example` file to `.env` and update the environment variables.
5. Set up the PostgreSQL database and update the database configurations in `.env`.
6. Run migrations: `npm run build && npm run develop`.

### Frontend (React)

1. Navigate to the `frontend` directory: `cd frontend`.
2. Install dependencies: `npm install`.
3. Copy the `.env.example` file to `.env` and update the environment variables.
4. Configure Stripe integration (see [Stripe Integration](#stripe-integration)).
5. Run the development server: `npm start`.

## Configuration

### Environment Variables

Make sure to configure the following environment variables in both the backend and frontend `.env` files:

- `REACT_APP_API_URL`: URL of the Strapi backend API.
- `REACT_APP_STRIPE_PUBLIC_KEY`: Stripe public API key.

In the backend `.env` file, configure the PostgreSQL database connection details:

- `DATABASE_HOST`
- `DATABASE_PORT`
- `DATABASE_NAME`
- `DATABASE_USERNAME`
- `DATABASE_PASSWORD`

### Stripe Integration

1. Sign up for a Stripe account at [https://stripe.com](https://stripe.com).
2. Obtain your Stripe publishable and secret keys.
3. Set the `REACT_APP_STRIPE_PUBLIC_KEY` environment variable in the frontend `.env` file to your Stripe publishable key.

## Deployment

For deploying the Ecommerce WebApp to a production environment, refer to the deployment guides for Strapi and React. Ensure that you set up appropriate security measures and configure environment variables for production.

## Contributing

Contributions to the Ecommerce WebApp are welcome! If you find any issues or want to add new features, feel free to open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

Enjoy using the Ecommerce WebApp! If you have any questions or need assistance, please don't hesitate to contact us.
