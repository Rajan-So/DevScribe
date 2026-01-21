# DevScribe

DevScribe is a production-ready MERN blog platform that demonstrates secure authentication, protected routes, and Markdown-based content publishing. It is designed with clean separation of concerns and follows real-world patterns suitable for interviews and portfolio review.

**Live Demo:** *Coming soon*
**Backend API:** *Coming soon*

---

## 🚀 Features

* User authentication (Register / Login)
* JWT-based authorization
* Protected routes (only logged-in users can create or delete posts)
* Create, read, and delete blog posts
* Markdown support for blog content
* Global authentication state using React Context
* Responsive and simple UI
* Deployed backend and frontend

---

## 🛠 Tech Stack

### Frontend

* React (Vite)
* React Router DOM
* Axios (with interceptor for auth)
* React Context API (global auth state)
* react-markdown (Markdown rendering)

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT (jsonwebtoken)
* bcryptjs
* CORS

### Deployment

* Backend: Render
* Frontend: Netlify

---

## 📁 Project Structure

```
DevScribe/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── README.md
```

---

## 🔐 Authentication Flow

1. User registers with email and password
2. User logs in and receives a signed JWT
3. JWT and user info are stored in localStorage
4. React Context restores auth state on refresh
5. Axios interceptor attaches JWT to every API request
6. Protected routes wait for auth check before rendering
7. Backend verifies JWT and enforces ownership

---

## ✍️ Markdown Support

Blog content is written in Markdown format and rendered on the frontend using `react-markdown`. The backend stores Markdown as plain text.

Example:

```
# Title
This is **bold** text
- List item
```

---

## ⚙️ Environment Variables (Backend)

Create a `.env` file inside the `backend` folder:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## ▶️ Run Locally

### Prerequisites

* Node.js (LTS)
* MongoDB Atlas account

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

* Frontend: [http://localhost:5173](http://localhost:5173)
* Backend: [http://localhost:5000](http://localhost:5000)

---

## 🌐 Deployment

* Backend deployed on Render
* Frontend deployed on Netlify
* MongoDB hosted on MongoDB Atlas

---

## 📌 Future Improvements

* Edit post functionality
* Comments on posts
* User profile page
* Role-based access (admin/moderator)
* Improved UI with Tailwind CSS
* Dark mode

---

## 👨‍💻 Author

**Rajan Sonkar**
B.Tech (ECE) Student
Aspiring Full Stack Developer

---

## 📄 License

This project is intended for learning and educational purposes.
