const express = require('express');
const cors = require('cors');
const passport = require('passport');
const passportLocal = require('passport-local').Strategy;
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// change this to use production server as well
app.use(cors({
    origin: 'http://localhost:5000',
    credentials: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.urlencoded({extended: true}));
app.use(session({
    secret: 'secretcode',
    resave: true,
    saveUninitialized: true
}));

app.use(cookieParser('secretcode'));

const uri = process.env.ATLAS_URI
// const uri = process.env.MONGODB_URI || 'mongodb://localhost/mytubemern';
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDb database connection established successfuly");
})

const videoRouter = require('./routes/video');
const usersRouter = require('./routes/users');

app.use('/video', videoRouter);
app.use('/users', usersRouter);

// if(process.env.NODE_ENV === 'production') {
//     app.use(express.static('videoplayer/build'));


//     const path = require('path');
//     app.get('*', (req, res) => {
//       res.sendFile(path.resolve(__dirname, 'videoplayer', 'build', 'index.html'));
//     });
// }

app.use(express.static('videoplayer/build'));

app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
})