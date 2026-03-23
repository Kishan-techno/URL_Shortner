A simple and efficient URL Shortener built using Node.js and Express.  
This project converts long URLs into short, shareable links and redirects users to the original URL.

---

## 🚀 Features

- 🔗 Convert long URLs into short URLs
- 🔁 Redirect short URL to original URL
- 📊 Track number of clicks (if implemented)
- ⚡ Fast and lightweight backend
- 🧩 REST API support

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB (if used)
- Mongoose (if used)

---

## 📁 Project Structure


URL_Shortner/
│── controllers/
│── models/
│── routes/
│── connect.js
│── index.js
│── package.json


---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository
```bash
git clone https://github.com/Kishan-techno/URL_Shortner.git
cd URL_Shortner
2️⃣ Install Dependencies
npm install
3️⃣ Start Server
node index.js

Server will run at:

http://localhost:8001
📡 API Endpoints
🔹 Create Short URL
POST /url

Body:

{
  "url": "https://example.com"
}
🔹 Redirect to Original URL
GET /:shortId
🔄 How It Works
User sends a long URL
Server generates a unique short ID
Stores mapping in database
When user visits short URL → redirects to original
📌 Example
Original URL:
https://example.com/very/long/link

Short URL:
http://localhost:8001/abc123
🎯 Future Improvements
User authentication (JWT)
Custom short URLs
Expiry links
Analytics dashboard
Rate limiting & security
👨‍💻 Author

Kishan Kumar

GitHub: https://github.com/Kishan-techno
