const express = require('express');
 
const { HandlePostJob,HandleGetJob } = require('../container/joblist');
const { applyhandler } = require('../container/applyhandler');
const { getprofileHandler, setstatusHandler } = require('../container/profilehandler');
const { HandleApliedjob } = require('../container/appliedjob');
const { jobstatushandler } = require('../container/jobstatus');
const router = express.Router();

router.post('/postjob', HandlePostJob);
router.get('/findjob', HandleGetJob);
router.post('/Apply', applyhandler);
router.get('/profile', getprofileHandler);
router.patch('/profile/:applicationId', setstatusHandler);
router.get('/Applied', HandleApliedjob);
router.post('/jobstatus/:jobId',jobstatushandler)
module.exports = router;