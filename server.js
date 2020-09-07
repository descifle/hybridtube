const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

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
    app.use(express.static('videoplayer/build'));


    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'videoplayer', 'build', 'index.html'));
    });
}

// app.use(express.static('videoplayer/build'));

app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
})