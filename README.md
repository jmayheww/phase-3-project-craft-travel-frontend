<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

<h1 align="center">Welcome to the Craft Travels App</h1>

### A sleek and intuitive bespoke travel planner

> Use Craft Travels_to craft your next grand adventure

<p>

**Table of Contents** _generated with [DocToc](https://github.com/thlorenz/doctoc)_

- [GitHub repositories](#github-repositories)
  - [Project Philosophy](#project-philosophy)
  - [General User Experience](#general-user-experience)
  - [Specific Features](#specific-features)
  - [Installation and Set-up Guide](#installation-and-set-up-guide)
  - [How to Use](#how-to-use)
  - [Resources and Documentation](#resources-and-documentation)
  - [Technologies Used](#technologies-used)
    - [Languages and Frameworks](#languages-and-frameworks)
    - [Package Installations](#package-installations)
  - [Author](#author)

## GitHub repositories

1. Frontend repo: https://github.com/jmayheww/phase-3-project-craft-travel-frontend

2. Backend repo: https://github.com/jmayheww/phase-3-sinatra-react-project

## Project Philosophy

_Craft Travels_ is motivated by an underlying belief and conviction that travel is a powerful and profoundly worthwhile activity and pursuit. It is a means by which we challenge, broaden, and illuminate our deepest understandings of the world in which we live and of those who live here alongside ourselves. In venturing beyond our immediate surroundings and the contexts in which we experience our everyday realities, travel forces us to reckon with alternate systems of thought and being in ways that indisputably change some facet of who we are as human beings.

Recognizing the significant importance of travel in so many people's lives, _Craft Travels_ was created with the most modest of ambitions as a way to centrally plan, organize, and eventually connect future travel experiences with other friends, family, and fellow travelers.

## General User Experience

_Craft Travels_ provides users with an intuitive means of browsing and interacting with upcoming trips and curating personal travel experiences.

In its current iteration, _Craft Travels_ does not offer login services, so users are immediately presented with a collection of the ten most recently added or created trips. Users may either search for a specific trip by title or view the full listing.

Trip cards are presented with an initial title and image, but users are free to navigate to an additional details section by clicking on the 'show details' button below each trip image. The additional details area displays scheduled dates, the total estimated cost, and a sign up area. Aside from merely viewing the five most recent traveler sign ups, users may also click the 'sign up' button to add themselves to the list. Furthermore, users may either edit trip cards to update information or may even delete trips altogether. Effectively, _Craft Travels_ is a resource for planning and sharing travel plans with everyone and anyone who is currently using the app.

## Specific Features

- Can view and search other user-created trip titles

- Can select individual trips and view additional information regarding the cost, dates, and recent traveler sign ups

- Can create, edit, and delete trip plans that are accessible to everyone for personal reference and to encourage other traveler sign ups

## Installation and Set-up Guide

> This app is comprised of two repos corresponding to the frontend and backend respectively

1.  Get started by creating a new overarching project directory that contains two distinct directories - client and server.

2.  Navigate into the client directory and **Fork and clone** the git repository via terminal

    > git clone https://github.com/jmayheww/phase-3-project-craft-travel-frontend

3.  Confirm that you are in correct project directory and install all packages

    > npm install

4.  Launch the app locally at default port 3000 with the following terminal command

    > npm start

5.  Next, open a separate terminal and navigate into the server project directory and **Fork and clone** the second git repository containing the backend code

    > git clone https://github.com/jmayheww/phase-3-sinatra-react-project

6.  Install all the gem packages listed in the repo's gemfile via typing the following command into the terminal

    > bundle install

7.  Spin up a backend server by typing the following rake command into the terminal

    > bundle exec rake server

8.  Test that data is being correctly requested from the frontend and returned from the backend via Sinatra API routes.

    > If your React app is running before the backend server is established, there **will not** be any viewable data on the frontend. Refresh the React app after the backend server is successfully established to see trip, user, and userstrip data displayed on the front end.

## How to Use

**Embedded below is a short video overview of how to easily navigate and use the Craft Travels App for curating your next travel experience**

[![Watch the video](https://youtu.be/dbH9zFfT6nc)](https://youtu.be/dbH9zFfT6nc)

[label](./images/Markdown/phase%203%20craft%20travels%20project%20walkthrough.mp4)

## Resources and Documentation

- [Thinking in React](https://reactjs.org/docs/thinking-in-react.html)
- [Create-React-App documentation](https://create-react-app.dev/)
- [Ruby documentation](https://www.ruby-lang.org/en/documentation/)
- [Active Record Basics](https://guides.rubyonrails.org/active_record_basics.html)
- [Active Record Querying](https://guides.rubyonrails.org/active_record_querying.html)
- [Sinatra documentation](https://sinatrarb.com/)

## Technologies Used

> This app utilized create-react-app to create a React.js based frontend
> The backend is based on the Ruby language, utilizing the Active Record ORM framework to manage data and Sinatra Ruby API to facilitate data fetching from the backend

### Languages and Frameworks

- HTML
- CSS
- React/JSX
- Ruby

### Main Package Installations

- Create-React-App
- React-Router
- Active Record
- Sinatra
- Rake
- Faker (seed data for testing)

## Author

👤 **Joshua Mayhew**

- Github: [@jmayheww](https://github.com/jmayheww)
- LinkedIn: [@https:\/\/www.linkedin.com\/in\/joshua-mayhew-28883a89\/](https://linkedin.com/in/https://www.linkedin.com/in/joshua-mayhew-28883a89/)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
<!--
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) -->
