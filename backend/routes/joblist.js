const express = require('express');

const { HandlePostJob,HandleGetJob } = require('../container/joblist');
const { applyhandler } = require('../container/applyhandler');
const router = express.Router();

router.post('/postjob', HandlePostJob);
router.get('/findjob', HandleGetJob);
router.post('/Apply',applyhandler);
module.exports = router;