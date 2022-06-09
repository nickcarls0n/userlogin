# User Login Using AWS

This is a straightforward user login that uses an AWS database to store a user's `name`, `email`, `username` and `password`.

## How I created this project

- I used [Create React App](https://github.com/facebook/create-react-app)
- [React Router DOM](https://github.com/remix-run/react-router#readme) is used for dynamic rendering
- For component styling I used [Styled-components](https://github.com/styled-components/styled-components)
- [Node.js](https://nodejs.org/en/) serverless API for the backend
- AWS [DynamoDB](https://aws.amazon.com/dynamodb/) is used for information storage

## Why I built this project this way

- Using Create React App is a quick way to get up and running, I have used React Router DOM on a number of other projects making it an easy choice for rendering pages.
- I have been wanting to explore setting up cloud storage database. Creating a simple register / login system seemed like the best "real world" solution to build to get better understanding of cloud storage.
- I went with AWS for the first cloud exploration project as it shows up as a requested skill.

## Navigating this project

To use the login, the user must first create a user by creating a `name`, `email`, `username` and `password` on the create new user view. There is a error state if all the fields are not filled out. After creating a new user the user can enter their information in the login fields to access the logged in user view.

## When I have time

- I would like to add content to the logged in section possibly a user todo list
- I would also like to use this same login for to test Google Cloud and Microsoft Azure cloud services.

## Available Scripts

`npm start` - This will run the app in development mode, navigate to [http://localhost:3000](http://localhost:3000) to view the project in the browser.

`npm run build` - Builds the app for production. Production ready files can be found in the `build` folder.
