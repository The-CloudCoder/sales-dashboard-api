# Sales Dashboard API

A RESTful API for managing sales data, integrating with Firebase for authentication and MongoDB for data storage. This API serves as the backend for the sales dashboard, providing endpoints for fetching and managing sales information.

## Features

- Authentication using Firebase Bearer tokens
- MongoDB integration for storing and querying sales data
- Endpoints for retrieving sales data, adding new sales records, and updating existing records
- Secure and efficient API design for handling sales data in real time

## Technologies Used

- **Node.js**: Server-side JavaScript runtime
- **Express**: Web framework for building APIs
- **MongoDB**: NoSQL database for storing sales data
- **Firebase Authentication**: Secure authentication with Bearer token
- **Mongoose**: MongoDB ODM for interacting with MongoDB
- **dotenv**: Environment variable management
- **cors**: Cross-Origin Resource Sharing handling

## Installation

### Prerequisites

Ensure you have the following installed:

- Node.js (v14 or higher)
- npm (or yarn)
- MongoDB (for local development or use MongoDB Atlas for cloud)

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/The-CloudCoder/sales-dashboard-api.git
   cd sales-dashboard-api
   confirgure env file with port and MONGODB_URI
   update firebase-admin-sdk.json with firebase configuration
   npm install
   npm start
   ```

### API Endpoints
1. Get Sales Data
    - URL: /api/sales
    - Method: GET
    - Authorization: Bearer Token (from Firebase)
    - Description: Fetches all sales data.
2. Add New Sale
    - URL: /api/sales
    - Method: POST
    - Body:
    ``` 
    {
        "product": "Product Name",
        "quantity": 10,
        "price": 100
    }
    ```
    - Description: Adds a new sale record to the database.


