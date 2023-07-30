const exp = require('constants');
const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const router = express.Router();

const contactController = require('../controllers/contactus');


router.get('/contactus', contactController.contactUsController);

router.post('/contactus', (req, res)=>{
     res.redirect('/success');
})

router.get('/success', (req, res)=>{
    res.send('<h1> Your form is sucessfully filled!</h1>')
})

module.exports = router;