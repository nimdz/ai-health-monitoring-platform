# AI Health Monitoring Platform

## Project Overview
The **AI Health Monitoring Platform** is a comprehensive health monitoring system that leverages AI to provide health insights and monitoring. This project is divided into multiple microservices including user authentication, data management, and integration with AI models for health predictions.

The **User Service** manages user authentication, registration, and profile management. It interacts with other microservices through a RESTful API and uses PostgreSQL for persistent storage.

## Tech Stack
- **Backend:** 
  - **Node.js** with **Express** for the server
  - **PostgreSQL** for database management
  - **Sequelize** ORM for interacting with PostgreSQL
  - **JWT** for user authentication
  - **Nodemon** for development environment auto-reloading
- **Frontend:** 
  - **React.js** (to be developed in a separate frontend repository)
  - **Redux** for state management (optional for now)
  - **Material-UI** or **Tailwind CSS** for styling
- **AI/ML:** 
  - Python (Flask/Django) for AI/ML models (to be integrated in the future)
- **Cloud:** 
  - **AWS** for deployment and scaling
  - **Docker** for containerization
- **Version Control:** 
  - **Git** with **GitHub** for repository management

## Microservices Architecture
The platform is structured as a set of microservices, each responsible for a specific set of functionalities:
1. **User Service** – Manages user registration, login, and profile data.
2. **Health Data Service** – Handles health data collection, analysis, and AI model predictions.
3. **Notification Service** – Sends notifications based on user activities and health data thresholds.



