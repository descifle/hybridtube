const router = require('express').Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
let User = require('../models/user.model');
require('../passportConfig')(passport);

router.route('/login').post((req, res, next) => {
    console.log(req.body)
    passport.authenticate('local', (err,user,info) => {
        console.log(info)
        if(err) throw err;
        if(!user) res.send("That user does not exist");
        else {
            req.logIn(user, err => {
                if (err) throw err;
                res.json(req.user);
                console.log(req.user);
            })
        }
    })(req,res, next);
})

router.route('/user').get((req, res) => {
    res.send(req.user)
})

router.route('/').get((req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error:' +  err));
});

router.route('/get-videos').get((req, res) => {

    User.findById(req.query.id)
    .then(user => {
        res.json(user)
    })
    .catch(err => res.status(400).json('Error:' +  err));
});

router.route('/save-video').post((req, res) => {
    const video = req.body.params.videos

    User.findById(req.body.params.id)
    .then(user => {
        user.videos.push(video) 
        user.save()
    })
    .catch(err => res.status(400).json('Error:' +  err));
});

router.route('/delete-video').post((req, res) => {

    userID = req.body.user
    id = req.body.videoId

    User.updateOne({ _id: userID}, { "$pull": { "videos" : {"etag": id}} }, { safe: true, multi:true })
    .then(() => res.json('Video deleted.'))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/verify').get((req, res) => {
    const username = req.query.username;
    const password = req.query.password;

    User.findOne({"username": username, "password" : password})
    .then(user => res.json(user))
    .catch(err => {
        res.status(400).json('pony:' +  err)
    });
});

router.route('/add').post((req, res) => {
    User.findOne({ username: req.body.username }, async (err, doc) => {
        if(err) throw err;
        if(doc) res.json("User Already Exists")
        if(!doc) {

            const hashedPassword = await bcrypt.hash(req.body.password, 10);

            const username = req.body.username;
            const password = hashedPassword;
            const newUser = new User({username,password});

            newUser.save()
            .then(() => res.json('User added!'))
            .catch(err => res.status(400).json('Error:' + err));
                }
    })
});

module.exports = router;