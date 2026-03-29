# AnythingAI Backend Assignment

The goal is to Build a **Scalable REST API with Authentication & Role-Based Access**, and **create a simple frontend UI** for testing your APIs.

---

## 🚀 FULL PROJECT: Scalable REST API + Basic Frontend

### 🧠 Key Concepts Used

    For fastest development :

  - **Backend**: Node.js + Express
  - **Database**: MongoDB
  - **Frontend**: React
  - **Auth**: JWT + bcrypt

---

``` 
  # Task Manager API

  ## Setup
  npm install
  npm run dev

  ## Tech Stack
  Node.js, Express, MongoDB, JWT

  ## Features
  - Authentication (JWT)
  - Role-based access
  - CRUD Tasks

  ## API Endpoints
  POST /api/v1/auth/register
  POST /api/v1/auth/login
  GET /api/v1/tasks

  ## Scalability
  - Horizontal scaling using load balancers
  - Redis caching
  - DB indexing

```

---


## 🧱 Project Setup :

``` 
  npm init -y
  npm install express mongoose bcryptjs jsonwebtoken dotenv cors joi morgan

```

📦 1. Backend Setup

``` 
  cd backend
  node app.js

  **Open**: API → http://localhost:5000

```

📦 2. Frontend Setup

``` 
  npx create-react-app frontend
  cd frontend
  npm install
  npm start

```

---

## 📁 Folder Structure

```
  AnythingAI-Assignment/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── models/
│   ├── config/
│   ├── utils/
│   └── app.js
│
├── frontend/
│   ├── pages/
│   ├── services/
│   └── App.js
│
├── README.md
└── .env

```

---

## ✅ Features Covered

    ✔ Authentication (JWT)
    
    ✔ Role-based access (admin/user)
    
    ✔ Full CRUD APIs
    
    ✔ Protected routes
    
    ✔ Validation (Joi)
    
    ✔ API versioning
    
    ✔ Swagger basic setup
    
    ✔ Frontend integration
    
    ✔ Clean structure

---

## 💡Bonus Ideas

    - [Pagination (?page=1&limit=10)]
    - [Redis caching]
    - [Docker setup]
    - [Rate limiting]
    - [Better UI (forms, error messages)]

---

### If you want, I can do next:

  - 🔥 Convert this into production-level code
  - 🚀 Help you deploy live (Render)
  - 📊 Add advanced features (pagination, search, caching)

Please tell me 👍

---
