// This script seeds a founder/admin user if no users exist.
const bcrypt = require('bcryptjs');
const User = require('./models/User');
module.exports = async function seedAdmin() {
  try {
    const count = await User.countDocuments();
    if (count === 0) {
      const adminEmail = process.env.ADMIN_EMAIL || 'admin@kifaru.tz';
      const adminPass = process.env.ADMIN_PASSWORD || 'Kifaru@123';
      const adminName = process.env.ADMIN_NAME || 'NeboH Eliud';
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(adminPass, salt);
      await User.create({ name: adminName, email: adminEmail, password: hashed, role: 'admin' });
      console.log('Seeded admin user:', adminEmail);
    }
  } catch (e) { console.error('Seed admin error', e); }
};
