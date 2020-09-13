const express = require('express');
const app = express();
const changeRoute = express.Router();

// Change model
let Change = require('../models/Change');

// Add Change
changeRoute.route('/create').post((req, res, next) => {
  Change.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Changes
changeRoute.route('/').get((req, res) => {
  Change.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single change
changeRoute.route('/read/:id').get((req, res) => {
  Change.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update change
changeRoute.route('/update/:id').put((req, res, next) => {
  Change.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})

// Delete change
changeRoute.route('/delete/:id').delete((req, res, next) => {
  Change.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = changeRoute;
