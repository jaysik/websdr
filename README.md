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


## Install websdr application
    -use the npm to install the requirements of this package by cmd: "npm install" in the main directory.
    - This will download and install the dependencies required.


## Running websdr application
    - The entry point of the websdr application is ./app.js
    - Need nodejs to run this application, so ensure nodejs is installed.
    - On the cmd line: "node ./app.js" will start the application.
    - The console will tell you the url to open in the browser to see it running.




    