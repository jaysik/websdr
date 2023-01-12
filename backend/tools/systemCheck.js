// This runs through checks to ensure the system is configured correctly.

function checkEnvVariables() {
    // Check for environment variables and ensure they are all in place.

    const envVariables = [
        "DATABASE_HOST",
        "DATABASE_PORT",
        "DATABASE_USERNAME",
        "DATABASE_PASSWORD",
    ]

    let errorFound = false;

    console.log("Checking for Environment Variables...")

    for (let i=0; i < envVariables.length; i++) {
        // Look through list and if any shows as "undefined", then report to user in console and close program.
        if (envVariables[i] in process.env) {
            console.log(`${envVariables[i]} - Found.`)
        } else {
            console.log(`${envVariables[i]} - Missing.`)
            errorFound = true;
        }
    }

    if (errorFound) {
        console.error('Missing environment variables - Did you create a file .env.production or .env.development with variables in the main working directory? \n')
        process.exit(); // To close the program.
    } else {
        console.log("Environment Variables Check Passed! \n")
    }


}


module.exports = {
    checkEnvVariables
}