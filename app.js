//npm init -y
//npm install express mongoose body-parser multer bcrypt jsonwebtoken ejs nodemon dotenv express-session cookie-parser
//node app.js
//npm start
const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const routes = require('./routes/routes');
const connectDB = require('./db');
require('dotenv').config();

const { PORT, SESSION_SECRET } = process.env;

// Connect to MongoDB
connectDB();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(session({ secret: SESSION_SECRET, resave: false, saveUninitialized: true }));


// Use the routes defined in routes.js
app.use('/dd', routes);

//not mandatory
// Use this to get informed about what request/response your server gets and posts.
app.use((req, res, next) => {
  console.log(`${req.method}: ${req.url}`);
  next()
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}\nhttp://localhost:5000/dd/gifts`);
});
