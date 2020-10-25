const express = require('express');
const cors = require('cors');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.urlencoded({extended: true}));
app.use(session({
    secret: 'Explsovi',
    resave: true,
    saveUninitialized: true
}));

app.use(cookieParser('Explsovi'));
app.use(passport.initialize());
app.use(passport.session());

// const uri = process.env.ATLAS_URI
const uri = process.env.MONGODB_URI || 'mongodb://localhost/mytubemern';

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDb database connection established successfuly");
})

const videoRouter = require('./routes/video');
const usersRouter = require('./routes/users');

app.use('/video', videoRouter);
app.use('/users', usersRouter);

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, "videoplayer", "build")))


    
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "videoplayer", "build", "index.html"));
    });
} else {
    app.use(express.static(path.join(__dirname, 'videoplayer/build')));
}

// if(process.env.NODE_ENV === 'production') {
//     app.use(express.static('videoplayer/build'));


    
//     app.get('*', (req, res) => {
//       res.sendFile(path.resolve(__dirname, 'videoplayer', 'build', 'index.html'));
//     });
// } else {
//     app.use(express.static(path.join(__dirname, 'videoplayer/build')));
// }

app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
})