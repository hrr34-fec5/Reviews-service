# Reviews-service

> side-by-side comparison with actual Airbnb page
![reviews-service](https://github.com/hrr34-fec5/reviews-service/blob/master/reviews.jpg)

## Related Projects

  - https://github.com/hrr34-fec5/

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

1. Ensure that Mongo is running actively (e.g., on a Mac, open a terminal and run `$ mongod`).
2. Start the server with script: `npm run web`

### Useful Scripts

1. "web": "nodemon server/index.js",
1. "dev": "webpack --watch --config webpack.dev.js",
1. "build": "webpack --config webpack.prod.js",
1. "db-init": "node database/seed.js",
1. "test": "jest"

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

### Seeding Database
For testing and development purposes, you may find it helpful to seed a database.

After starting MongoDB and installing dependencies, run the seed script, `npm run db-init`.

# reviews-service
