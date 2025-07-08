## About The Project

The MERN POS Application is a comprehensive Point of Sale solution that helps businesses manage products, inventory, sales, and customers through an intuitive web interface. It supports role-based access, real-time stock tracking, and detailed reporting.

## Built With

- **Frontend:** React, Redux, React Router 
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB, Mongoose  
- **Styling:** Tailwind CSS and AntDesign

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) v14.x or higher  
- [npm](https://www.npmjs.com/) v6.x or higher  
- [MongoDB](https://www.mongodb.com/) (local or Atlas cluster)  
## Installation

### Install server dependencies
```bash
cd server
npm install

### Folder Structure
mern-pos/
├── client/           # React front-end
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── redux/
│       └── App.js
├── server/           # Express back-end
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
└── README.md         # Project overview and setup instructions
