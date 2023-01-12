<!-- Welcome to the README for websdr application -->
# WEB SDR SERVER
    
A nodejs based server to publishing and interacting with an sdr device remotely.

## Requirements:
    - git
    - Nodejs version 18.13.xx (server)
    - npm version 9.2.0

## Installation:

### Install git
    - Require git to pull and download updates
    - Download and install git from the [git website](https://git-scm.com/)
    - for ubuntu or related -  # add-apt-repository ppa:git-core/ppa # apt update; apt install git 
    - use the command: apt-get install git
    - use the command: "git" to see if it is installed properly.
    - To use github repository for pushing updates, consult [using github with git](https://docs.github.com/en/get-started/quickstart/set-up-git).
    - start a new git by cmd: "git init" in the desired directory.
    - Make sure you have your accounts set using the "git config" commands.
    - To create 

### Install NVM (Node Version Manager)
    - This prevents clashes of different nodejs versions on one system
    - Allows changes of versions through command line
    - Link: [nvm github page](https://github.com/nvm-sh/nvm)

#### Linux install

    1. curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
    OR USE
    wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

    - The script is currently in the ./install/nvm-script folder and execute by "./install.sh".

    2. Restart the terminal to take effect
    3. Test to ensure it installed appropriately in the cmd: "nvm"
    4. Check if there are any node packages - cmd: "nvm list"
    5. As this is an initial setup for this project, we will use the latest LTS version of nodejs, using the cmd: nvm install 'lts/*', Otherwise, we will install the version for this project - cmd: "nvm install 18.13.0". Or even better run the install script that has been provided !TODO.
    6. Install the npm either by cmd: "nvm install-latest-npm"
1   
## Install websdr application
    -use the npm to install the requirements of this package by cmd: "npm install" in the main directory.
    - This will download and install the dependencies required.


## Running websdr application

### Set the environment variables settings in the .env.production file
    - The .env file is to store important sensitive credentials for the app to run.
        - TODO: explain how to setup the file. Or write a script
    - A file needs to be created filled with sensitive credentials -> .env.production
    - To run in development mode, also add .env.development

### Start the server
    - The entry point of the websdr application is ./app.js
    - Need nodejs to run this application, so ensure nodejs is installed.
    - You need to be in the main working directory of the app.
    - On the cmd line: "npm run sdr-web-production".
    - If wishing to run locally or developing locally, then run the command as "npm run sdr-web-development".
    - The console will tell you the url to open in the browser to see it running.
    




## TODO:
    - Create a database 
        - Use postgres open source database
        - install postgres package for node.js
        - Set up connections 
        - Configure node.js to download ISED license database
        - The data from the ISED is "dirty", so some data clean up is required before placing into database.
        - Create a scheduler to call and collect updates from ISED.
        - add postgres gis data
    - Create a map feature
        - Use an open source mapping
            - research the best one, openstreetmaps?
        - Apply theo map to the website.


## Packages installed:
    - pg: This is the postgres database required for handling large datasets
    - dotenv: This is to handle sensitive credentials that is required for the app, and to keep from publishing through source control such as git/github.
