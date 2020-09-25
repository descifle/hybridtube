const router = require('express').Router();
let User = require('../models/user.model');

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
            const username = req.body.username;
            const password = req.body.password;
            const newUser = new User({username,password});

            newUser.save()
            .then(() => res.json('User added!'))
            .catch(err => res.status(400).json('Error:' + err));
                }
    })
});

module.exports = router;