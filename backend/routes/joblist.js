const express = require('express');

const { HandlePostJob,HandleGetJob } = require('../container/joblist');

const router = express.Router();

router.post('/postjob', HandlePostJob);
router.get('/findjob', HandleGetJob);

module.exports = router;