#MIK Prototype
MIK Prototype is a development prototype for Michaels customer facing web application.

## Installation and Setup

Prerequisites: npm & node js. If they are not already installed yet, please visit https://docs.npmjs.com/getting-started/installing-node

From the command line:

If you do not already have Webpack and React installed:  

`npm install --save-dev webpack webpack-dev-server react-hot-loader`  
`npm install --save-dev babel-core babel-loader`  
`npm install --save-dev babel-preset-es2015 babel-preset-react`  
`npm install --save react react-dom history react-router`  

To download remaining component dependencies, run: 

`npm install`

To start webpack: 

`webpack-dev-server` 

or

`./run.sh`


If you see error like "command not found" try installing webpack with this command:

`npm install -g webpack webpack-dev-server`

Once webpack is running properly, open a browser and navigate to http://localhost:8080

