const express = require('express');
const Post = require('../models/Post');
const router = express.Router();

//get all post
router.get('/', (req, res) => {
  Post.find((err, doc) => {
    if (err) {
      res.json({ message: err });
    } else {
      res.json(doc);
    }
  });
});

//add post
router.post('/', (req, res) => {
  Post.create(req.body, (err, doc) => {
    if (err) {
      res.json({ message: err });
    } else {
      res.json(doc);
    }
  });
});

//get specific post
router.get('/:postId', (req, res) => {
  Post.findById(req.params.postId, (err, doc) => {
    if (err) {
      res.json({ message: err });
    } else {
      res.json(doc);
    }
  });
});

//delete post
router.delete('/:postId', (req, res) => {
  Post.remove({ _id: req.params.postId }, (err, doc) => {
    if (err) {
      res.json({ message: err });
    } else {
      res.json(doc);
    }
  });
});

//update post
router.put('/:postId', (req, res) => {
  Post.updateOne({ _id: req.params.postId }, { $set: { title: req.body.title } }, (err, doc) => {
    if (err) {
      res.json({ message: err });
    } else {
      res.json(doc);
    }
  });
});

module.exports = router;
