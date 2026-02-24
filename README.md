# First Class Detailing

Full-stack web application for a car detailing service.

---

## 🌐 Live Demo

Frontend (Netlify):  
https://luxury-genie-562c2d.netlify.app

Backend (Render):  
https://first-class-detailing.onrender.com/api/health

---

## 📦 Tech Stack

### Frontend

- React
- Vite

### Backend

- Node.js
- Express
- MongoDB Atlas
- Joi validation
- Resend (email notifications)

---

## 🏗 Project Structure

Monorepo:

- frontend/ — React + Vite
- backend/ — Node.js + Express + MongoDB

---

## 🚀 How to Run Locally

### 1. Clone repository

```bash
git clone <your-repo-url>
cd first-class-detailing
```

2. Backend Setup
   cd backend
   npm install
   npm run dev

Create a .env file inside backend/ with:
PORT=4000
MONGODB_URI=your_mongodb_connection_string
RESEND_API_KEY=your_resend_api_key
EMAIL_FROM=your_verified_sender_email
EMAIL_TO=your_destination_email

3. Frontend Setup
   cd frontend
   npm install
   npm run dev

For local frontend development, create:

frontend/.env.local
VITE_API_URL=http://localhost:4000

🌍 Production Deployment

Frontend: Netlify
Backend: Render

Environment variables are configured in their respective dashboards.

⚙️ Notes

Backend does not crash if RESEND_API_KEY is missing.

Email sending is disabled automatically if API key is not provided.

Free Render instance may spin down after inactivity.
