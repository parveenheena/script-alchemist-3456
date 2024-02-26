<h1>ByteBlitz</h1>

## Introduction
ByteBlitz is a browser-based, open-source quiz application designed to aid in learning various programming languages. With organized quizzes readily accessible, users can enhance their programming skills conveniently. The platform welcomes contributions, allowing users to customize and improve it according to their needs. You can upskill your knowledge about basic concept of different languages.

## Project Type
Fullstack

## Deplolyed App
Frontend: https://byte-blitz-five.vercel.app/

Backend: https://embarrassed-outfit-eel.cyclic.app/

<br>

## Directory Structure
script-alchemist-3456/

├─ backend/

├─ frontend/


<br>

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
git clone https://github.com/sur-123-bhi/script-alchemist-3456.git
cd script-alchemist-3456

Backend --> npm install
        --> npm run server

Frontend --> npm install
         --> npm run dev
```
<br>
## Usage

```bash
It will start with Login Page. You need to login with correct credentials, then it will redirect you to dashboard. Where you can select and start any quiz.
```
<br>

## Credentials
You can sign up to make an account and use the same email and password for login

<br>

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


<br>

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
