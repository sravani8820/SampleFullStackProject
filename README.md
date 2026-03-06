**Task Manager App**

A full-stack Task Manager application that allows users to create, view, and manage tasks. The project demonstrates CRUD operations, REST API development, frontend–backend integration, and cloud deployment.

This project was built to practice modern full-stack development using Angular, .NET Web API, SQL Server, and Azure cloud services.

**Features**

Create tasks

View all tasks

Store task title and description

Search tasks

Simple responsive UI

REST API integration

Cloud deployment using Azure

**Tech Stack**
**Frontend**

Angular

TypeScript

HTML

Bootstrap

**Backend**

.NET Web API (C#)

**Database**

SQL Server

**Cloud & DevOps**

Azure App Service

GitHub

GitHub Integration for Continuous Deployment

Cloud Deployment

This project is deployed using Azure App Service with GitHub integration.

**Deployment process:**

Code is pushed to GitHub repository

GitHub is connected to Azure App Service

Azure automatically triggers build and deployment

Application is published to Azure cloud environment

This setup demonstrates basic CI/CD pipeline integration using GitHub and Azure.

**Application Architecture**
User Browser
     |
     v
Angular Frontend (UI)
     |
     v
.NET Web API (Backend)
     |
     v
SQL Server Database
     |
     v
Hosted on Azure App Service
**How to Run Locally**
Clone Repository
git clone https://github.com/yourusername/task-manager-app.git
Run Backend
cd backend
dotnet run
Run Frontend
cd frontend
npm install
ng serve

**Open in browser:**

http://localhost:4200

**What I Learned**

Through this project I learned:

Full-stack application development

REST API development using .NET

Frontend development with Angular

Database integration with SQL Server

Cloud deployment using Azure App Service

GitHub integration with Azure for automated deployments

**Future Improvements**

Authentication and authorization (JWT)

Task status management (Pending / Completed)

Task editing and deletion

Role-based access

Docker container deployment

CI/CD using GitHub Actions
