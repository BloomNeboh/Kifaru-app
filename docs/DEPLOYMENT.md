# Run Locally (Backend + Frontend)
1. Install backend deps:
   - cd backend && npm install
2. Create a .env based on backend/.env.example and set MONGO_URI and SMTP credentials.
3. Start MongoDB (local) and start backend:
   - npm run dev
4. Install frontend deps and run:
   - cd frontend && npm install
   - npm start

# Docker
- docker-compose up --build (from the docker folder parent)
