<h1>ByteBlitz</h1>

## Introduction
This Application helps user to learn various programming languages using well organised quiz questions. You can upskill your knowledge about basic concept of different languages.

## Project Type
Fullstack

## Deplolyed App
Frontend: https://deployed-site.whatever

Backend: https://deployed-site.whatever



## Directory Structure
script-alchemist-3456/

├─ backend/

├─ frontend/




## Features
List out the key features of your application.

- Login/Signup functionality
  
 ![LoginPage_Pic](https://github.com/sur-123-bhi/script-alchemist-3456/assets/129533897/2eddfef7-d8d4-4bc8-92e8-9ae094c4f578)

  <br>

- User dashboard
  
 ![DashboardPage_Pic](https://github.com/sur-123-bhi/script-alchemist-3456/assets/129533897/feb9ce80-e38e-4cea-8fdd-627a6041df18)
 
<br>
  

- quizzes related various language
  
![Quiz_Pic](https://github.com/sur-123-bhi/script-alchemist-3456/assets/129533897/c7575857-f6b1-47e3-93c9-d91353014781)

<br>

- User Profile
  
![ProfilePage_Pic](https://github.com/sur-123-bhi/script-alchemist-3456/assets/129533897/5563763c-b07b-45d9-9394-dcac059631f6)

<br>

  

- About Us
  
![AboutPage_Pic](https://github.com/sur-123-bhi/script-alchemist-3456/assets/129533897/3731539b-de67-4230-83b1-8df3a479aabb)

<br>


- Contact Us
  
![ContactPage_Pic](https://github.com/sur-123-bhi/script-alchemist-3456/assets/129533897/565d3a60-3eb2-4b76-8abb-52a853bbfd47)

<br>
  

## Installation & Getting started
Detailed instructions on how to install, configure, and get the project running. For our project, guide the reviewer how to check mongodb schema etc.

```bash
npm create vite@latest
cd script-alchemist-3456
npm run dev
```

## Usage

```bash
It will start with Login Page. You need to login with correct credentials, then it will redirect you to dashboard. Where you can select and start any quiz.
```
## Credentials
You can sign up with to make an account and use the same email and password for login


## API Endpoints

to register a new user---
POST /Users/register/

to login existing user---
POST /Users/login/

to update the details of logged in user---
PATCH /Users/:id

to fetch all the quizzes---
GET /quiz/

to fetch all the questions----
GET /question/

to fetch all the user details -----
GET /Users/:id

## Technology Stack
List of the technologies used in the project.

- React
- JavaScript
- Node.js
- Express.js
- MongoDB
- Mongoose
- Chakra UI
- TailwindCss
- Bcrypt
- Jsonwebtoken
