const router = require('express').Router();
let User = require('../models/newUser.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const gender = req.body.gender;
  const age = req.body.age;
  const email = req.body.email;
  const password = req.body.password;

  const newUser = new User({
    firstName,
    lastName,
    gender,
    age,
    email,
    password
  });

  newUser.save()
    .then(() => res.json('User added!' + req.body.firstName))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;