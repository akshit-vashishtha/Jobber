const express = require('express');
const joblist = require('../models/joblist');

const router = express.Router();

router.post('/postjob')