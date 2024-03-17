npm create vite@latest (to create vite project)
npm run dev (to open in browser)


# Intro to express (expressdocs)
* (to write a server)

# initialize a new node projcet
- run npm init -y to install a package.json

-run npm install <dependencies> (express) ect.
    * npm install express

# Vocab
* Route: an event listener for http requests
* Endpoint: "/user", "/item" end of a url
* Port: localhost: 9000/


# Install nodemon globally
* npm install -g nodemon. Or npm install nodemon -L *I installed it globally onto settums so I shouldn't need to again*

# Intro to Rest API architecture
    * Rest - representational state transfer
        use intuitive endpoint names to match state

    * Resource - single item (object) in a database
        /user/234356 <- (user id requets a single item)

    * Collection - a collection of similar items in a database
        http://amazon.com/movies <- (movies requests a colletion)

    * Base (root) URL - http://amazon.com/

    * API endpoint -    http://amazon.com/movies (movies is the endpoint) http://amazon.com/movies/765645 (user id is the endpoint)

    * Parameter - /movies/:movieId - requests a single item

    * Query (query string) - /movies?genre=action&year=1999 (requests a sub collection (action movies) and(&)(year 1999))

    * Client - frontend

    * Server - Intermediary (recieves a request and performs an action)

    * Request Method - CRUD (GET, POST, DELETE, PUT)

    ** When doing  post request, go to body, then raw

# How to craft endpoints
    *camping goods store*
        tents
        sleepling bags
        cooking
        lights

        all equipment - equipment
        all tents - equipment/tents
        single tent - equipment/tents/45rr632g753 (id#)



# Middleware - a function that fires on the inbetween

# Request Body (req.body)

app.use("/", express.json()) (tells our server to use something) (if a reuqest comes to "/", call this function and look for a request body) (Any time a request comes to "/", it will fire the express.json() function. Looks for a request body and parses the JSON into javascript and puts it in req.body) (if you get rid of the "/", it will fire the function on every request that comes in)

# UUID - creates unique id (used for fake data only. Gives each fake data element an id)
    * npm install uuid (install for each server created) *I only need this if I'm using "fake data"


# Express Router - enables us to modularize our routes in express
# Modular file organization - different files are used for different tasks

# URL Parameters
    # Parts of a URL
        * Base - http:/amazon.com
        * Endpoint - http:/amazon.com/images
        * Parameter - http:/amazon.com/images/567s765ert8 (id#)
        * Queries - http:/amazon.com/images?type=cats
# URL queries (allows us to request and send data(movies) matching certain criteria ie: genre)
    #Query string
        * Begins with the "?"
        * Built of key=value pairs
        * Multiple queries separated by the "&"

# Middleware
    # What is it? - app.use()
    # takes 2 arguments 1. Mount path (endpoints) 2. CB function (recieves the request, response objects and the "next" function)

# Next()
    * Moves on to the next middleware in line. (If the middleware were writing isn't the end of the line we can call next() so function will look for the next middleware in line)

# Console errors in express
    # Use a logger (morgan)
        * npm install morgan (will be installed in node modules (same as express))

# Connecting the front end with the back end

    # Folder strucure - add client folder and install react app in client folder
    # Proxy - add "proxy": "localhost:/8000" to the end in package.json in client folder
        * then add another terminal for client and I can npm start from there
        * In the server.jsx I can still start up my server in it's terminal

# Status codes

    # 200 - Successful request (get request)
    # 201 - Successful insert (post request) / Successful update (put request)
    # 401 - Unauthorized
    # 404 - Not found
    # 500 - Server error

    # http://http.cat (website to show all the status codes)

# Intro to Mongoose
    * npm install mongoose / npm install mongodb

    # Purpose
        * Create models
        * Query data

        # Connect

# Mongoose schemas
    * Blueprints for our data

# Mongoose models
    * Models have a name, and a blueprint (schema)
    * Models are used to perform the CRUD operations on data created with the model

# Server side programming in Node with Express


# Node

# Node Module (files in Node)
    - require - a function, (import)
    - module.exports - (export)

    *These will be used on the backend in the router files*

        * One file contains - const {sum, add} = reqiure('./math.js') ( this one is importing)
        * Another file contains - functions sum and add, then module.exports = sum. If your exporting two functions (that are not wrapped in a single function) you can export an object.

        module.exports = {
            sum: sum,
            add: add

        }
        es6 syntax - module.exports = {sum, add}
        (this one is exporting)

# install for a full stack app with npm
    - run npm init -y
    * express
    * morgan (logger)
    * mongoose
    * mongodb (database)
    * jsonwebtoken (to create a token for user authentication)
    * dotenv (so I can make a secret file to store SECRET = "4 random words" (a .env file))

# set up proxy in vite.config file (vite)

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/auth': {
        target: 'http://localhost:7004',
        changeOrigin: true
      },
      '/api': {
        target: 'http://localhost:7004',
        changeOrigin: true
      }
    }
  }
})
