// This is the settings file to configure the parameters of the websdr

// The values from this file is imported throughout the program and is used.

// Settings for the database
const DATABASE = {
    host: '127.0.0.1', // The ip address to the database server
    port: process.env.DATABASE_PORT, // The port number to access the database - Saved in the environment variables .env file
    user: 'postgres',
    password: process.env.DATABASE_PASSWORD // DO NOT place password. Use the environment variables (saved in the computer's memory.)

}


const WEBPAGE = {
    "page1": {
        "displayPage": true // An option to turn on or off the page.
    }
}



// Export to allow imports into other js files.
export {
    DATABASE,

}

