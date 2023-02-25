# Crayond React Boilerplate

This project was bootstrapped with Create React App and later it was developed into a Material UI powerd boiler plate with Apollo Client by the Crayond'd developers.

## Software Requirement
1. NodeJS
2. NPM

## What other things added to this Create React App?

- We added a AuthContext which is provided at the top of the all the element. There you can hit refersh API or else you save the data to AuthContext when the user logged in for the first time.

- We added a ThemeContext which use [Material UI Theme Provider](https://material-ui.com/customization/theming/) to change the from light to dark theme.

- We added a AlertContext which use [Material UI Snackar Component](https://material-ui.com/components/snackbars/) to show the alert thorough out the app. No need to use alert component in every component when we need to show any alerts.  We just use this context and call the setSnack function that enough. (You can change the way of alerting with any third party library if you want)

**Note: All the contexts are available in /src/contexts/index.js, we advised to add all the context here**

- We have setuped the [Apollo Client](https://www.apollographql.com/docs/react/get-started/) along with web socket, so you can directly use the apollo client hook or query component any where in the app. 

- We used [React Router](https://reacttraining.com/react-router/web/guides/quick-start) for routing.  Also a private router is defined in the /src/routers folder. Do use it whenever a protected route is required.

## Folder Structure (/src)

- `/components` : Collection of all components and all the components need to be exposed via    index.js only.

- `/contexts`   : Collection of all Contexts used all over the app.

- `/graphql`    : Graphql Setups, ``index.js`` contain the client setup, ``queries.js,mutation.js and subscription.js`` contains the graphql quries used in the application.

- `/networkcall`: It contains the function which is used for all the network call. i.e To hit API it check : Internet Connection, Proper URL, Proper Payload before the network call. We use [Axios](https://www.npmjs.com/package/axios) for all the network call.

- `/routers`    : It contains the ``index.js`` file where all the routing are defined. The ``route.js`` file contain all the routes used all over the application.  The ``private_router.js`` contains the private router for protected routes.

- `/screens`    : It contain all the screens (typically all the components are built togethere here) in the app is defined here.

- `/themes`     : Contains all the [Theme JSON's](https://material-ui.com/customization/default-theme/) (default.json,darktheme.json) we want to use the thoroughout the app.  Use this [Material UI Theme Generator](https://in-your-saas.github.io/material-ui-theme-editor/) for creating new themes.

- `/utils`      : All the common functions,constants are defined in the ``index.js`` of the folder.

## Before you start

Don't forgot to change the environment file `.env.*` and all the environment variables are described in the env file.

## Main Packages Used

### [Creat React App v4.0.3](https://create-react-app.dev/docs/getting-started) 
This boilerplate is a extension of Create React App boilerplate which uses [NPM](https://create-react-app.dev/docs/getting-started#selecting-a-package-manager) as package manager and used [CRA PWA TEMPLATE](https://create-react-app.dev/docs/making-a-progressive-web-app).

### [React Router DOM v5.2.0](https://reactrouter.com/web/guides/quick-start) 
This boilerplate uses React Router Dom for routing within the react app.

### [Material UI v4.11.4](https://material-ui.com/getting-started/installation/) 
This boilerplate uses Material UI as UI Library for the rich components and better theme setting. The above boilerplate has both Light and Dark theme setup of Material UI.

### [Apollo GraphQL Client v3.3.20](https://www.apollographql.com/docs/react/)
This boilerplate uses the Apollo GraphQL React Client for creating Graphql Client.  It supports all the features of Graphql such as Query,Mutation and Subscription.

### [Axios v0.21.1](https://www.npmjs.com/package/axios)
This boilerplate uses Axios for make any networkcall from the react app. To do so, there is a [Common Function](https://gitlab.com/crayond_knowledge_repo/react_boilerplate/-/blob/jul-2021/src/networkcall/index.js) written in boilerplate also that handle URL check and Auth Token append in header.

### [Express v4.17.1](https://expressjs.com/en/4x/api.html)
This boilerplate also supports serving the Create React App with a express server which is very usefull to set the Dynamic Title, Description and other Meta's for a route in CSR (Client Side Rendering) itself.  To do so it uses of packages such as Morgon, Nodemon, Server Favicon and Babel for bundling please have a look at the devDependencies of the `package.json`

## Pros of the Boilerplate

1. It is bootstrapped with `Create React App (Recommended by ReactJS team)`.

2. It has all the setup for using the `Material UI` such as `Theme Setup` etc.

3. It has all the setup for creating a `GraphQL Client` along with `WebSocket` setup for subscriptions.

4. It has all the setup to create `Dynamic Title,Description and Meta Tags` for your routes. (To do so you need the server app using `serve:*` commands in `package.json`)

5. It has all the setup for `PWA`, all you need to do is replace the icons in the [public folder](https://gitlab.com/crayond_knowledge_repo/react_boilerplate/-/tree/jul-2021/public/images/icons) with your project icon (dimensions and name should be same) and update the [manifest.json](https://gitlab.com/crayond_knowledge_repo/react_boilerplate/-/blob/jul-2021/public/manifest.json) with your project details along with favicon change.

6. It has all the mechanism to `update the cache` when a new version is deployed.

7. It has all the setup for running and deploying the app in different environments using diffrent environment files `.env.development, .env.sit, .env.uat and .env.production`. 

8. It has all the setup for running and deploying the app in different environments using single environment file `.env`.  P

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run serve`

Build the app using `npm run build` and serve the app in `/build` using express.<br />
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

You will also see any lint errors in the console.

### `npm run start:dev`

Runs the app in the development mode using the environment file `.env.development` .<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run start:sit`

Runs the app in the development mode using the environment file `.env.sit` .<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run start:uat`

Runs the app in the development mode using the environment file `.env.uat` .<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run start:app`

Runs the app in the development mode using the environment file `.env` .<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run serve:dev`

Build the app using `npm run build` and serve the app in `/build` using express with the `.env.development` environment file.<br />
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

You will also see any lint errors in the console.

### `npm run serve:sit`

Build the app using `npm run build` and serve the app in `/build` using express with the `.env.sit` environment file.<br />
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

You will also see any lint errors in the console.

### `npm run serve:uat`

Build the app using `npm run build` and serve the app in `/build` using express with the `.env.uat` environment file.<br />
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

You will also see any lint errors in the console.

### `npm run serve:production`

Build the app using `npm run build` and serve the app in `/build` using express with the `.env.production` environment file.<br />
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

You will also see any lint errors in the console.

### `npm run serve:app`

Build the app using `npm run build` and serve the app in `/build` using express with the `.env` environment file.<br />
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run build:dev`

Builds the app for production to the `build` folder using the environment file `.env.development`.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run build:sit`

Builds the app for production to the `build` folder using the environment file `.env.sit`.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run build:uat`

Builds the app for production to the `build` folder using the environment file `.env.uat`.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run build:production`

Builds the app for production to the `build` folder using the environment file `.env.production`.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run build:app`

Builds the app for production to the `build` folder using the environment file `.env`.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


## Steps to deploy in different environment using different `.env.*` file

1. Make sure your environment file in root `.env.development` - Development Environmnet, `.env.sit` - SIT Environment, `.env.uat` - UAT Environment and `.env.production` - Production Environment and their values are correct.

2. Run command `npm i` from the root of the app.

3. Run command `npm run build:*` will run the app in a port mentioned in the `.env.*` file.

4. Then serve the `./build` folder.

<i>Note: * refers to the build scripts in the avilable script based on your environment.</i>

## Steps to deploy in different environment using single `.env` file

1. Make sure your environment file in root `.env`and their values are correct.

2. Run command `npm i` from the root of the app.

3. Run command `npm run build:app` will run the app in a port mentioned in the `.env` file.

4. Then serve the `./build` folder.


*Happy Coding!!!*
# customerlabs
