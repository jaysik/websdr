// This is the main entry point for the database 
// This uses postgres with the node.js as a wrapper and the documentation is on https://node-postgres.com/
// The dependency is downloaded with "npm install pg", where pg is the postgres library

// The initial setup with node and postgres is a little different, but the main core of postgres features
// are still the same with SQL queries.

// For more information of postgres - https://www.postgresql.org/
// This webpage has a indepth manual on how to operate and use postgres -> https://www.postgresql.org/docs/

// The reason for using postgres are that it is opensource (free) and very robust and powerful.

// Need to import the pg library
const { Client } = require('pg')


// Check to ensure the server environment variables has been configured correctly by the user using the .env.production 
if (process.env.DATABASE_HOST !== undefined) {
    console.log('Environment variables are found!')
} else {
    console.error('Missing environment variables - Did you create a file .env.production or .env.development with variables?')
}

// Import the settings for the database
const settings = require("../../settings.js")

// create a new postgres client with settings loaded.
const client = new Client(settings.DATABASE)

console.log(settings.DATABASE)

// This is to wait for the connection to be made.
await client.connect()

