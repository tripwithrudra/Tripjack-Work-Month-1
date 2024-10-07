# React Project from Scratch

### Steps:

1. npm init
    - Creates a package.json file

2. Make an `src` directory

3. Create an `index.js` file under `src` folder

4. Install necessary packages

<hr>

### Required Commands

The following command will create a package.json file with the minimum information required to run a JavaScript/React project. The -y flag allows you to bypass the prompts for setting project details such as the name, version, and description.
```
npm init -y
```
<br>


Install the necessary packages from npm using the following command:
```
npm install --save-dev webpack webpack-cli
```
<br>

To install react and react dom:
```
npm install react react-dom
```
The former is the core package for React and the other provides access to the browser's DOM and allows for rendering of React.
<br>
<br>

To install babel and preset packages:
```
npm install --save-dev @babel/core babel-loader @babel/preset-env @babel/preset-react
```

<br>

To install, `html-webpack-plugin` package as a devDependency:
```
npm install --save-dev html-webpack-plugin
```

<hr>

### *Note*:  In order to run the React application, we need to install Webpack and the Webpack CLI as devDependencies. 
### Webpack is a tool that allows us to create a bundle of JavaScript/React code that can be used in a browser.

<hr>

#### `babel-loader` is a helper that allows Babel to run with Webpack

#### Plugins will be used to compile our JavaScript code into a readable format for the browser (`@babel/preset-env`) and to compile React-specific code (`@babel/preset-react`).

<hr>

#### The `webpack.config.js` file is a JavaScript file that exports an object with the configuration for Webpack. 
#### The `babel.config.json` file is a JSON file that contains the configuration for Babel.

<hr>

#### The final step in rendering our React component is extending Webpack so that it adds the minified bundle code to the body tags as scripts when running. 
#### To do this, we should install the `html-webpack-plugin` package as a devDependency.

<hr>

#### While working in development mode, every time we make changes to the files in our application, we need to rerun the `npm start` command. This can be tedious, so we will install another package called `webpack-dev-server`. 

#### This package allows us to force Webpack to restart every time we make changes to our project files and manages our application files in memory instead of building the dist directory.

<hr>