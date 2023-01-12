// This is the settings file to configure the parameters of the websdr

// The values from this file is imported throughout the program and is used.

// Settings for the database
const DATABASE = {
    host: process.env.DATABASE_HOST, // The ip address to the database server
    port: process.env.DATABASE_PORT, // The port number to access the database - Saved in the environment variables .env file
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD // DO NOT place password. Use the environment variables (saved in the computer's memory.)
}

const WEBPAGE = {
    "page1": {
        "displayPage": true // An option to turn on or off the page.
    }
}

// Export to allow imports into other js files.
module.exports = {
    DATABASE,

}

