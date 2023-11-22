# Job Portal

Job Portal: A Comprehensive MERN Stack Solution for Job Applications
Our Job Portal, developed using the MERN (MongoDB, Express.js, React, Node.js) stack, is designed to streamline the entire job application process. Users can easily select their roles as either applicants or recruiters and create accounts for a personalized experience.

Key Features:
User Authentication:
Robust user authentication ensures a secure environment.
Persistent login sessions for a seamless user experience.

Security Measures:
REST APIs are safeguarded with JWT token verification, ensuring the confidentiality and integrity of data.

Recruiter Functions:
Recruiters have the ability to effortlessly create, delete, and update job listings.
Efficiently manage applications through shortlisting, accepting, or rejecting candidates.
Review applicant resumes and maintain an updated professional profile.

Applicant Capabilities:
Applicants can explore available job opportunities with advanced filters and a powerful fuzzy search functionality.
Submit applications with Statements of Purpose (SOP) to stand out to recruiters.
Monitor the status of their applications and view feedback.
Personalize their profiles with a profile picture and resume uploads.
Easily update and maintain their profiles for optimal visibility.

Comprehensive Solution:
Our web app provides an all-in-one solution, catering to the needs of both job seekers and recruiters.

Technological Foundation:
Leveraging the MERN stack, we utilize MongoDB for robust data storage, Express.js for efficient server-side development, React for a dynamic and engaging user interface, and Node.js for server-side scripting.

RESTful API Integration:
The application adheres to RESTful principles, offering standardized and scalable interactions with resources.

Fuzzy Search Functionality:
The inclusion of a fuzzy search enhances user experience by accommodating typos and partial search terms.

File Uploads for Enhanced Profiles:
Applicants can upload both profile pictures and resumes, creating a comprehensive and appealing profile for recruiters.

Responsive Design:
The web app is designed to be responsive, ensuring a seamless experience across various devices.

Efficient Job Application Workflow:
The streamlined workflow for job applications, including SOP submission and application status tracking, adds efficiency to the overall process.

Our Job Portal stands as a testament to our commitment to providing a user-friendly and feature-rich platform for job seekers and recruiters alike. If you have any specific inquiries or require further information, feel free to reach out!

Directory structure of the web app is as follows:

```
- backend/
    - public/
        - profile/
        - resume/
- frontend/
- README.md
```

## Instructions for initializing web app:

- Install Node JS, MongoDB in the machine.
- Start MongoDB server: `sudo service mongod start`
- Move inside backend directory: `cd backend`
- Install dependencies in backend directory: `npm install`
- Start express server: `npm start`
- Backend server will start on port 4444.
- Now go inside frontend directory: `cd ..\frontend`
- Install dependencies in frontend directory: `npm install`
- Start web app's frontend server: `npm start`
- Frontend server will start on port 3000.
- Now open `http://localhost:3000/` and proceed creating jobs and applications by signing up in required categories.

## Dependencies:

- Frontend
  - @material-ui/core
  - @material-ui/icons
  - @material-ui/lab
  - axios
  - material-ui-chip-input
  - react-phone-input-2
- Backend
  - bcrypt
  - body-parser
  - connect-flash
  - connect-mongo
  - cors
  - crypto
  - express
  - express-session
  - jsonwebtoken
  - mongoose
  - mongoose-type-email
  - multer
  - passport
  - passport-jwt
  - passport-local
  - uuid