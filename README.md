# Social Network API
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

A RESTful API for a social network application where users can share thoughts, react to others' thoughts, and add friends.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Credits](#credits)
- [Tests](#tests)
- [Questions](#questions)

## Installation

```
npm install
```

## Usage

```node index.js```

## License

This project is licensed under the MIT License - see [MIT](https://opensource.org/licenses/MIT) for details.

## Credits

Julius Chi, CoPilot, Claude AI

## Tests

###Base URL

GET: http://localhost:3001/

###User Routes

GET all users: http://localhost:3001/api/users

POST create user: http://localhost:3001/api/users

GET user by ID: http://localhost:3001/api/users/[user-id]

PUT update user: http://localhost:3001/api/users/[user-id]

DELETE user: http://localhost:3001/api/users/[user-id]

###Friend Routes

POST add friend: http://localhost:3001/api/users/[user-id]/friends/[friend-id]

DELETE remove friend: http://localhost:3001/api/users/[user-id]/friends/[friend-id]

###Thought Routes

GET all thoughts: http://localhost:3001/api/thoughts

POST create thought: http://localhost:3001/api/thoughts

GET thought by ID: http://localhost:3001/api/thoughts/[thought-id]

PUT update thought: http://localhost:3001/api/thoughts/[thought-id]

DELETE thought: http://localhost:3001/api/thoughts/[thought-id]

###Reaction Routes

POST add reaction: http://localhost:3001/api/thoughts/[thought-id]/reactions

DELETE remove reaction: http://localhost:3001/api/thoughts/[thought-id]/reactions/[reaction-id]

## Questions

For questions or concerns, please contact me:

GitHub: [JuliusC72](https://github.com/JuliusC72)

Email: [72jules@gmail.com](mailto:72jules@gmail.com)
