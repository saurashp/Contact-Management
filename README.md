# 📇 Contact Management System

A full-stack Contact Management application built using the MERN Stack. This application allows users to securely manage their contacts with features like creating, updating, deleting, and viewing contact details through a clean and responsive interface.

## 🚀 Features

- 🔐 User Authentication
- ➕ Add New Contacts
- ✏️ Edit Existing Contacts
- 🗑️ Delete Contacts
- 🔍 Search Contacts
- 📋 View All Contacts
- 📱 Responsive User Interface
- ⚡ RESTful API Integration

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- Axios
- React Router DOM

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

## 📂 Project Structure

```
Contact-Management/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── contact-management/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/saurashp/Contact-Management.git
cd Contact-Management
```

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start the backend server:

```bash
npm run dev
```

---

### Frontend Setup

```bash
cd ../contact-management
npm install
npm run dev
```

The frontend will run on:

```
http://localhost:5173
```

Backend API:

```
http://localhost:5000
```

## 📸 Screenshots

You can add screenshots of the application here.

- Login Page
- Dashboard
- Contact List
- Add Contact Form

## 🔮 Future Enhancements

- Profile Management
- Contact Categories
- Favorites
- Import & Export Contacts
- Pagination
- Dark Mode
- Email Verification
- Password Reset

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new feature branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push to the branch

```bash
git push origin feature-name
```

5. Open a Pull Request

## 👨‍💻 Author

**Saurash Preet**

- GitHub: https://github.com/saurashp
- LinkedIn: https://www.linkedin.com/in/saurash-preet-9358a2227/

## 📄 License

This project is licensed under the MIT License.
