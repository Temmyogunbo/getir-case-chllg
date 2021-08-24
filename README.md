# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the production build mode.\

### `yarn start-dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build-react`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Architecture

The app is structure following the MVP(model, view, presenter) architecture. This type of architecture cuts aross all frontend app development therereby making the codebase maintainable, testable, flexible and scalable. You can learn more [here](https://khalilstemmler.com/articles/client-side-architecture/architecture)

The app is broken down into pieces otherwise called components. Recall that components are self contained: can handle their own logic, make network and host of other things. Components are later composed where and when needed.

A notable technology used in the development of the app is redux saga. Redux sagas are used to perform asynchronous operations like fetching data from the backend. It is a middleware that is used within the layer of redux to dispatch impure actions

## App Functionslities

- List all prodcuts
- Filter products by brands, tags, and product types
- Sort products by price or date added
- Add product to basket
- Remove product from basket
