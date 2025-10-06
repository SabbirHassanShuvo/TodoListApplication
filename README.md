# 📝 MERN Todo List Application

A modern, responsive **Todo List Web Application** built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**.  
You can create todos with multiple checkpoints, set start and end times, and track your progress with a beautiful Bootstrap interface.

---

## 🚀 Features

- Add, Edit, and Delete todos
- Add multiple checkpoints for each todo
- Checkpoints can be marked as done/undone
- Set start and end time for each task
- Live progress bar for task completion
- Responsive Bootstrap design
- Auto-refresh after adding or editing
- Uses Axios for API calls
- Uses Mongoose for data modeling

---

## 🧩 Tech Stack

**Frontend:**

- React.js
- Bootstrap 5
- Axios

**Backend:**

- Node.js
- Express.js
- MongoDB
- Mongoose
- Nodemon

---

## 📂 Project Structure

mern-todo-app/
```
│
├── backend/
│ ├── models/
│ │ └── Todo.js
│ ├── routes/
│ │ └── todoRoutes.js
│ ├── server.js
│ ├── package.json
│ └── .env
│
├── frontend/
│ ├── src/
│ │ ├── App.js
│ │ └── index.js
│ ├── public/
│ ├── package.json
│
└── README.md
```
---

## ⚙️ Installation Guide

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/mern-todo-app.git
cd mern-todo-app
```

2️⃣ Setup Backend

```bash
cd backend
npm install
```

Create a .env file inside backend/ folder:

PORT=5000
MONGO_URI=your_mongodb_connection_string

Run the backend server:

```bash
npm run dev
```

3️⃣ Setup Frontend

```bash
cd ../frontend
npm install
npm start
```

🧠 API Endpoints

| Method | Endpoint       | Description   |
| ------ | -------------- | ------------- |
| GET    | /api/todos     | Get all todos |
| POST   | /api/todos     | Add new todo  |
| PUT    | /api/todos/:id | Update todo   |
| DELETE | /api/todos/:id | Delete todo   |

🎨 UI Overview

Clean and minimal Bootstrap UI

Progress bar for completed checkpoints

Separate section for each todo card

Buttons for edit and delete

Responsive layout for mobile and desktop

🧰 Available Commands
In Backend:

```bash
npm run dev # Start with nodemon
npm start # Production mode
```

In Frontend:

```bash
npm start # Run React app
npm run build # Build for production
```

💡 Future Enhancements

Countdown timer for each todo duration

Dark mode

User login/signup system

Cloud-hosted MongoDB connection

Task reminders and notifications

👨‍💻 Author

Developed by: Sabbir Hassan Shuvo
📧 Email: sabbirhassanshuvo71@gmail.com

🌐 GitHub: https://github.com/sabbirhassanshuvo
