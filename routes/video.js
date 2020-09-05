const router = require('express').Router();
let Video = require('../models/video.model');

router.route('/').get((req, res) => {
    Video.find()
    .then(videos => res.json(videos))
    .catch(err => res.status(400).json('Error:' +  err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newVideo = new Video({
        username,
        description,
        duration,
        date,
    });

    newVideo.save()
    .then(() => res.json('Video added!'))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/:id').get((req, res) => {
    Video.findById(req.params.id)
    .then((video) => res.json(video))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/:id').delete((req, res) => {
    Video.findByIdAndDelete(req.params.id)
    .then(() => res.json('Video deleted.'))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/update/:id').post((req, res) => {
    Video.findById(req.params.id)
    .then((Video) => {
        Video.username = req.body.username;
        Video.description = req.body.description;
        Video.duration = Number(req.body.duration);
        Video.date = Date.parse(req.body.date);

        Video.save()
        .then(() => {res.json('Video updated!')})
        .catch(err => res.status(400).json('Error' + err));
    })
    .catch(err => res.status(400).json('Error:' + err));
});

module.exports = router;