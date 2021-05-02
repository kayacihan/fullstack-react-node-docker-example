# React Node Docker - Coffee Example
A Coffee types application Using React, Node, Mongo and Docker  
- These attiributes will be stored on MongoDB.
    - title
    - description
    - ingredients
    - category

## Table of Contents

- [Requirements](#requirements)
- [Commands](#commands)
    - [ Environment variables](#environment-variables)
    - [ Installation ](#installation)
    - [ Running ](#running)
- [ Documentation](#documentation)
    - [Mongo Atlas](#MongoDB-Atlas-setting)



## Requirements
* [Docker](https://docs.docker.com/get-docker/) 
* [Docker-compose](https://docs.docker.com/compose/install/)
* [NodeJs](https://nodejs.org/en/download/)

## Commands


* ### Installation
```bash
git clone https://github.com/kayacihan/fullstack-react-node-docker-example.git

cd fullstack-react-node-docker-example
```

* ### Edit Env File
Set the  [ environment variables](#environment-variables) 

```bash
# open .env and modify the environment variables 
cp .env.example .env
```

* ### Demo data
Use `http://localhost:3004/coffee` address via Postman `post` method, copy all in  `coffees.json` file.

* ### Running
    - #### run using docker-compose
        This command will start MongoDB, Node and React App On Docker Containers.  
        ```bash
        sudo docker-compose up 
        ```
        below command can be tried, if any cache issues on docker-compose and  `sudo docker-compose up` can be re-run.
        ```bash
        docker-compose down -v --rmi "all" 
        ```
    * #### run manually
    
        While using Local MongoDB  or [Mongo Atlas](#MongoDB-Atlas-setting), `MONGO_DB_URL` should be modified in the `.env` file.  

        - run api 

            ```bash
            cd server

            npm install

            node index.js
            ```

        - run client

            ```bash
            cd client
            
            npm install
            
            npm run start 
            ```

        * ### Website will be running on 3333 port

            * [localhost:3333](https://localhost:3333/)

    * #### run tests

        ```bash
        # goto nodejs folder
        cd server

        # run all tests
        npm run test

        ```

## Environment Variables

The environment variables can be found on Node Server ( /server ) and modified in the `.env` file. 

```bash
# Port number
PORT=3004

# URL of the Mongo DB for Docker
MONGO_DB_URL = mongodb://mongo/db
# URL of the Mongo DB for local
 MONGO_DB_URL = mongodb://localhost:27017/db

# URL of the Mongo DB for testing
MONGO_DB_URL_TEST = mongodb://localhost:27017/testdb

# Mongo DB Collection
LINKS_COLLECTION = db



```

## Documentation


The backend can be used MongoDB Atlas cloud service, so you will need to open the following free accounts.

### MongoDB Atlas setting:
    * Open a account in https://www.mongodb.com/cloud
    * Create a cluster
    * Create a user going to Security > Database Access and choosing Read and write to any database for Database user privileges 
    * Under Security > Network Access click on Add IP address and fill Whitelist entry with 0.0.0.0/0 to allow access from everywhere
    * Under Atlas > Clusters click on Connect button, choose Connect your app, then driver Node.js and copy the Connection string, it would be similar to mongodb+srv://`yourUsername`:`yourPassword`@<clusterName>.mongodb.net/test?retryWrites=true&w=majority
    * Copy that string into .env variable `MONGO_DB_URL` and for `LINKS_COLLECTION` put the collection name you like, for example Links
    

