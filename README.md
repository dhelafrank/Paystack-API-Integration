# Paystack API Integration
This project demonstrates how to integrate the Paystack payment gateway into a backend application built with Express.js and MongoDB.

### Overview
This project provides a simple example of integrating the Paystack API for processing payments within a Node.js and Express.js environment. It showcases basic functionalities such as creating transactions, verifying payments, and handling callbacks from Paystack.

### Features
1. Create Transactions: Allows users to initiate transactions through Paystack.

2. Verify Payments: Verifies payment status and details using Paystack API.

### Technologies Used
- Node.js: JavaScript runtime environment
- Express.js: Web application framework for Node.js
- MongoDB: NoSQL database for storing transaction data
- Paystack API: Payment gateway for processing online payments

### Setup Instructions
1. Clone the repository:
```
git clone https://github.com/dhelafrank/Paystack-API-Integration.git
```
2. Install Dependencies
```
cd Paystack-API-Integration
npm install
```
3. Set up enviromental variables by using the sample from `.env.sample` make sure to replace the placeholder with your actual data

4. Start the server
```
npm start
```
5. Access your application from the port logged on the console

### Usage
- Use the provided endpoints to interract with the Paystack API
- Refer to the [API documentation](https://github.com/dhelafrank/Paystack-API-Integration/blob/master/docs.md) for detailed instructions

### API Endpoints
- <b>POST /api/v1/initialize:</b> Initiate a new transaction
- <b>GET /api/v1/verifyPayment:</b> Verify a transaction
- <b>POST /api/v1/getPayment:</b> Get a transaction reciept

### License
This project is licensed under the [MIT License](https://github.com/dhelafrank/Paystack-API-Integration/tree/master?tab=MIT-1-ov-file)