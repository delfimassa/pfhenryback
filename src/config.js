const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    MONGO_DB: process.env.MONGO_DB || 'PF_Henry',
	MONGO_PASSWORD: process.env.MONGO_PASSWORD,
	MONGO_HOST: process.env.MONGO_HOST || "localhost",
	PORT: process.env.PORT || 3001,
	APP_HOST: process.env.APP_HOST || 'apphost'
};