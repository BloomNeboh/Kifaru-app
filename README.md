    # Kifaru Tours - Single Server Package (v3)

This package seeds a hidden admin user on first run. Edit backend/.env to customize.

## Default seeded admin (change in backend/.env):
- ADMIN_EMAIL=admin@kifaru.tz
- ADMIN_PASSWORD=Kifaru@123
- ADMIN_NAME=NeboH Eliud

## Run
1. cd backend
2. npm install
3. cd ../frontend
4. npm install
5. npm run build
6. cd ../backend
7. npm start

After server starts, open http://localhost:5000 and log in with the admin credentials.

To change the admin email to your real email, edit backend/.env before starting the server and set ADMIN_EMAIL to your address.
