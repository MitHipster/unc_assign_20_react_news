# React News

UNC Boot Camp Assignment 20 NYTimes React

## Description

Created a React-based New York Times Article Search application. This site uses React components, helper functions, and React's mounting lifecycle to query and display articles based on user searches. Also Node, Express and MongoDB is leveraged so that users can save articles to retrieve and read later.

### Prerequisites

Install Yarn using [Homebrew package manager](https://brew.sh/). This will also install Node.js if it is not already installed.

```
brew install yarn
```

### Installing

After downloading or cloning the repo perform the following steps:

Open project folder at the root in the terminal and run `yarn install` to download the dependencies needed for the back-end.

Next, move to client folder `cd client` and run `yarn install` a second time to get the dependencies needed for the front-end.

Next, in separate terminal windows, run `mongod` and `mongo` to load and connect to mongoDB. Finally, move back to the root folder of the project `cd ..` and run `yarn start`. This will create a server instance on port 3001 and load the site in your default browser.


## Deployed

Deployed on [Heroku](https://aqueous-tundra-24831.herokuapp.com/)

*Note: Placeholder images used as most of NYTimes API results have an empty multimedia dataset.*

## Built With

* [React.js](https://reactjs.org/) - User interface
* [Materialize](http://materializecss.com/) - Front-end framework
* [Mongoose](http://mongoosejs.com/) - Application data modeling

## Authors

* **Tim Acker** - [MitHipster](https://github.com/MitHipster)

## License

This project is licensed under the MIT License

## Acknowledgments

* NYTimes for news articles
