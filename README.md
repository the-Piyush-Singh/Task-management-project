A full-stack Task Management System that allows users to manage, track,
assign, and upload documents related to their daily tasks. Built using the
MERN stack (MongoDB, Express, React, Node.js), this app also supports JWT authentication and file uploads.


Tech Stack

| Frontend        | Backend         | DevOps / Tools        |
|----------------|------------------|------------------------|
| React.js        | Node.js (Express) | Docker                |
| Bootstrap       | MongoDB          | Postman / Swagger     |
| React Router    | Multer (file upload) | JWT (authentication) |

Project Structure

/backend
├── controllers
├── middleware
├── models
├── routes
├── uploads/
├── .env
└── index.js

/frontend
├── src/
├── Components/
├── redux/
├── services/
└── App.js

Backend Setup--->
cd backend
npm install
PORT=8080

Start the backend server:
npm run dev

Frontend Setup--->
npm install

Start the frontend app:
npm start
http://localhost:3000/.
