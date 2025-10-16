# Simple multi-stage build for frontend and backend in separate containers is recommended.
# This Dockerfile is a minimal example for the backend only.
FROM node:18-alpine
WORKDIR /app
COPY backend/package.json ./
RUN npm install --production
COPY backend ./
ENV NODE_ENV=production
CMD ["node","server.js"]
