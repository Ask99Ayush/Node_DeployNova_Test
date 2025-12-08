📦 Mini MERN-Style CRUD App

A simple Node.js + Express backend, HTML/CSS/JS frontend, and MongoDB database—all containerized using Docker & Docker Compose.
This project is perfect for learning full-stack basics with clean folder structure and copy-paste setup.

🚀 Features

Full CRUD (Create, Read, Update, Delete)

Simple HTML/CSS/JS UI (no frameworks)

Express.js backend with REST API

MongoDB database

Docker Compose support

Clean & minimal codebase for learning

📁 Folder Structure
project/
│── backend/
│   ├── server.js
│   ├── package.json
│   ├── Dockerfile
│   ├── .env
│── frontend/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   ├── Dockerfile
│── docker-compose.yml
│── README.md
│── .gitignore

🛠 Technologies Used

Node.js

Express.js

MongoDB

Docker

HTML / CSS / JavaScript

⚙ Installation (Without Docker)
1️⃣ Install Dependencies
cd backend
npm install

2️⃣ Start Backend
npm start

3️⃣ Open Frontend

Just open frontend/index.html in your browser.

🐳 Running With Docker (Recommended)
1️⃣ Build & Run Containers

Run from project root:

docker-compose up --build

2️⃣ Access the App
Service	URL
Frontend	http://localhost:8080

Backend API	http://localhost:5000

MongoDB	mongodb://localhost:27017
📚 API Endpoints
Method	Endpoint	Description
GET	/api/items	Get all items
POST	/api/items	Add new item
PUT	/api/items/:id	Update item
DELETE	/api/items/:id	Delete item
🧪 Testing API (Optional)

Using curl:

curl -X POST http://localhost:5000/api/items \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"Test Item\"}"

🧰 Environment Variables

Create backend/.env:

PORT=5000
MONGO_URL=mongodb://mongo:27017/cruddb

📸 UI Preview

Simple clean UI:

Add items

Delete items

Update items

Display list

📝 Scripts
Backend:
npm start
npm run dev

Docker:
docker-compose up
docker-compose down

🤝 Contributing

Feel free to fork, modify, or extend this tiny project.

📄 License

MIT License