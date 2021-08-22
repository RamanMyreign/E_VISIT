const router = require('express').Router();
let Doctor = require('../models/doctorList.model');
let Appoint = require('../models/appointmentSchema.model');

router.route('/').get((req, res) => {
  Doctor.find()
    .then(doctors => res.json(doctors))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const speciality = req.body.speciality;
  const from = req.body.from;
  const to = req.body.to;
  const slot = req.body.slot;
  const date = Date.parse(req.body.date);
  const newDoctor = new Doctor({
    name,
    speciality,
    from,
    to,
    slot
  });

  newDoctor.save()
    .then(() => res.json('Doctor added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id/appointments').post((req, res) => {
  const timing = req.body.timing;
  const patientName = req.body.patientName;
  const pEmail = req.body.pEmail;

  const newAppoint = new Appoint({
    timing,
    patientName,
    pEmail
  });
  Doctor.findByIdAndUpdate(req.params.id, { $push: { "appointment": newAppoint } })
    .then((doctor) => {
      console.log(newAppoint);


    })
})

router.route('/:id').get((req, res) => {
  Doctor.findById(req.params.id)
    .then(doctor => res.json(doctor))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {

  Doctor.findByIdAndRemove(req.params.id)
    .then(() => res.json('Doctor deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;