require('dotenv').config({ silent: true });

module.exports = {
    port: process.env.PORT || 4221,
    env: process.env.NODE_ENV || "development",
};