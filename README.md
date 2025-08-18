# Welcome to JOI Delivery

JOI Delivery is built for real life. For the young professional who gets home late and doesn't have the energy to cook. For the student with an exam tomorrow and an empty fridge tonight. These aren't exceptions — they're everyday moments. That's why JOI Delivery brings food and groceries to your door, fast, fresh, and right when you need them.

Customers struggle with:

- Cluttered browsing experiences that don't understand their preferences.
- Limited customization when ordering meals or groceries.
- Unclear order status or delivery timelines.
- Poor payment experience, or failed checkouts.
- Lack of timely feedback channels to report a bad experience or appreciate a good one.

JOI Delivery was built not just as another delivery app, but as a thoughtful, technology-first platform that reimagines how essentials reach customers in the most seamless way.

# Introducing JOI Delivery

JOI Delivery, launched in 2024, is a hyperlocal delivery app designed to bring food and groceries to your doorstep in under 45 minutes. With the tagline "Speed meets convenience," it connects customers to nearby restaurants and stores through a seamless digital experience. The app solves the hassle of long wait times and limited local options by offering real-time tracking, instant order updates, and a wide network of trusted vendors.

## Business Goals

- Differentiated Value Proposition & Niche Dominance
- Deliver Unmatched Customer Experience & Loyalty
- Superior Operational Efficiency & Cost Advantage
- Robust & Engaged Partner Ecosystem

## Why they need Thoughtworks help

As JOI Delivery continues to grow and serve more neighborhoods, we're scaling our platform to handle increasing demand, enhance user experience, and support smarter delivery logistics. They're looking for passionate developers to help us build robust, efficient, and scalable solutions that power everything from order placement to real-time tracking.
Your expertise will directly impact how quickly and reliably customers receive their essentials—and how smoothly local vendors and delivery partners operate within our ecosystem.

## Project Architecture

The project follows a **Clean Architecture** with clear separation of concerns:

### Core Domain Entities

- **`Cart`** - Shopping cart with products, outlet, and user association
- **`User`** - User management with cart association
- **`Product`** - Base product class with common properties
- **`FoodProduct`** - Extends Product for restaurant items
- **`GroceryProduct`** - Extends Product for grocery items with inventory management
- **`Outlet`** - Base class for all store types
- **`GroceryStore`** - Extends Outlet with inventory management
- **`Restaurant`** - Extends Outlet with menu management

### Service Layer

- **`CartService`** - Business logic for cart operations (add products, fetch cart)
- **`ProductService`** - Product management and retrieval by store
- **`UserService`** - User operations and cart association

### Controller Layer

- **`CartController`** - HTTP request handling for cart operations
- **`InventoryController`** - Store health and inventory management

### Data Layer

- **`SeedData`** - Initial data population with factory methods

### Users/Customers

Sample user profiles are available in the repository to support development and testing scenarios.

| UserId  | FirstName | LastName | Email                 | PhoneNumber |
| ------- | --------- | -------- | --------------------- | ----------- |
| user101 | John      | Doe      | john.doe@gmail.com    | Random      |
| user102 | Rachel    | Zane     | rachel.zane@gmail.com | Random      |

### Stores

Sample store data seeded for development purposes only.

| StoreId  | OutletName     | Type    | Description                  |
| -------- | -------------- | ------- | ---------------------------- |
| store101 | Fresh Picks    | Grocery | Premium grocery store        |
| store102 | Natural Choice | Grocery | Health-focused grocery store |

### Products

Dummy Products for Stores to sell and users to buy from.

| ProductId  | ProductName | Type    | StoreRefId | MRP   | Weight | Stock |
| ---------- | ----------- | ------- | ---------- | ----- | ------ | ----- |
| product101 | Wheat Bread | Grocery | store101   | 10.50 | 0.5kg  | 30    |
| product102 | Spinach     | Grocery | store101   | 10.50 | 0.5kg  | 30    |
| product103 | Crackers    | Grocery | store101   | 10.50 | 0.5kg  | 30    |

## Requirements

The project requires [Node v14](https://nodejs.org/).

## Useful Node commands

The project makes use of node and its package manager to help you out carrying some common tasks such as building the project or running it.

### Install dependencies

```console
$ npm install
```

### Run the tests

There are two options to run the tests

- Run the tests once

  ```console
  $ npm test
  ```

- Keep running the tests with every change

  ```console
  $ npm run test-watch
  ```

### Run the application

Run the application which will be listening on port `8080`. There are two ways to run the application.

- Run the application with the current code

  ```console
  $ npm start
  ```

- Run the application with reload on save

  ```console
  $ npm run dev
  ```

## API Endpoints

### Cart Management

#### Add Product to Cart

```http
POST /cart/product
Content-Type: application/json

{
  "userId": "user101",
  "productId": "product101",
  "outletId": "store101"
}
```

#### View Cart

```http
GET /cart/view?userId=user101
```

### Inventory Health

#### Get Store Inventory Health

```http
GET /inventory/health?storeId=store101
```

### Health Check

```http
GET /health
```

## Features

- **Smart Search**: Find food and grocery items quickly with intelligent search
- **Shopping Cart Management**: Add, update, and remove items from your cart with real-time total calculation
- **Customizable Orders**: Modify quantities, add special instructions, and customize your order
- **Real-time Tracking**: Track your order from kitchen to doorstep with live updates
- **Secure Payment Processing**: Multiple payment options with mock gateway integration for testing
- **Payment History & Refunds**: Complete payment tracking and refund processing capabilities
- **Delivery Plans**: Choose from standard, express, or free delivery options
- **Order History**: View past orders and reorder favorites
- **Customer Feedback**: Rate your experience and provide feedback

## Technology Stack

- **Backend**: Node.js with Express.js
- **Architecture**: Clean Architecture with Class-based inheritance
- **Testing**: Jest for unit testing
- **Development**: Nodemon for hot reloading
- **API**: RESTful API design

## Project Structure

```
src/
├── app.js                 # Main application entry point
├── controllers/           # HTTP request handlers
│   ├── cartController.js  # Cart operations
│   └── inventoryController.js # Inventory health
├── services/              # Business logic layer
│   ├── cartService.js     # Cart business operations
│   ├── productService.js  # Product management
│   └── userService.js     # User management
├── domain/                # Core business entities
│   ├── cart.js           # Cart entity
│   ├── user.js           # User entity
│   ├── product.js        # Base Product class
│   ├── foodProduct.js    # Food product entity
│   ├── groceryProduct.js # Grocery product entity
│   ├── outlet.js         # Base Outlet class
│   ├── groceryStore.js   # Grocery store entity
│   └── restaurant.js     # Restaurant entity
├── seedData/              # Initial data and factory methods
│   └── seedData.js       # Seed data and object creation
```

## Key Implementation Details

### Domain Entities

- **Class-based inheritance** following Java patterns
- **JSDoc type annotations** for better code documentation
- **Protected properties** equivalent to Java's protected fields

### Services

- **Plain object pattern** for simplicity and consistency
- **Static data management** through SeedData class
- **Business logic separation** from controllers

### Controllers

- **Simple object structure** matching the service pattern
- **Direct service calls** without complex error handling
- **Clean HTTP response handling**

## Contributing

This project follows the same development practices as the original JOI Energy project. Please refer to the story wall and ensure all features are properly tested before moving to the "Done" column.

## Note

This project demonstrates proper separation of concerns, inheritance patterns, and clean architecture principles. The implementation follows Java patterns while maintaining JavaScript best practices, making it an excellent learning platform for understanding enterprise-level application architecture.
