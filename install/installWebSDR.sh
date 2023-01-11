#!/bin/bash

# To install this application
# Have the terminal in the same directory
# Run the cmd "bash installWebSDR.sh" to execute the install script

echo "Installing webSDR application";


echo "Checking for installation of nvm...";
if [ -d "${HOME}/.nvm/.git" ];
    # nvm is installed
    then 
    
    echo "nvm installed!";
    echo "Checking if node 18.13.0 is installed..."

    else echo "nvm not installed"; 
    
    fi