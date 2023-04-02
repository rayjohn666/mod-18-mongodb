# MongoDb Social Network API

![MIT License](https://img.shields.io/badge/License-MIT-green)

## Description
This is a social network API that utilizes MongoDb and Mongoose for database storage and management. The API provides GET, POST, PUT and DELETE routes to allow users to create, update, and delete their profiles, thoughts, and reactions. 

## Installation
To use this application, you must have [Node.js](https://nodejs.org/en/) and [MongoDB](https://www.mongodb.com/try/download/community) installed on your machine. 

1. Clone the repository 
2. Install dependencies by running `npm install`
3. Start the server by running `npm start` or `node server.js` in the root directory

## Usage
After starting the server, you can access the API routes using a tool such as [Insomnia](https://insomnia.rest/) to test GET, POST, PUT, and DELETE requests. 

### API Routes

#### Users
- GET all users: `GET /api/users`
- GET a single user: `GET /api/users/:id`
- POST a new user: `POST /api/users`
- PUT update a user: `PUT /api/users/:id`
- DELETE a user: `DELETE /api/users/:id`

#### Thoughts
- GET all thoughts: `GET /api/thoughts`
- GET a single thought: `GET /api/thoughts/:id`
- POST a new thought: `POST /api/thoughts`
- PUT update a thought: `PUT /api/thoughts/:id`
- DELETE a thought: `DELETE /api/thoughts/:id`

#### Reactions
- POST a reaction to a thought: `POST /api/thoughts/:thoughtId/reactions`
- DELETE a reaction from a thought: `DELETE /api/thoughts/:thoughtId/reactions/:reactionId`

#### Friends
- POST add a friend: `POST /api/users/:userId/friends/:friendId`
- DELETE remove a friend: `DELETE /api/users/:userId/friends/:friendId`

## Credits
This project was created by me Hayden Dillon-Lloyd, dillonlloyd123@gmail.com 
with the help of a few tutors: Sangeetha Kailiaperumal, Armando Osorio, My Instructor Ryan, and TA's Andy and Eric.
## License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Demo
[Video Demonstration] https://drive.google.com/file/d/11B06NpwrcWxRfUd2sHilJVN7nlP0GFaH/view

## Questions
If you have any questions about the project, please contact me at [your-email@example.com](mailto:your-email@example.com). You can also view more of my work on [GitHub](https://github.com/your-username).
