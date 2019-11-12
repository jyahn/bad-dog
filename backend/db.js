/** Database connection for bad-dog. */

const { Client } = require("pg");

const client = new Client(process.env.DATABASE_URL || "postgresql:///bad-dog");

client.connect();


module.exports = client;
