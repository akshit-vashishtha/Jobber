const Application = require('../models/applicationschema'); // Application Schema
const JobMapping = require('../models/jobmapping'); // Job Mapping Schema
const Joblists = require('../models/joblist');// Job list Schema
   

async function applyhandler(req, res) {
    try {
        const { jobId, fullName, email, phone, reason, additionalInfo } = req.body;
        if (!jobId || !fullName || !email || !phone || !reason ) {
            return res.status(400).json({ error: 'All required fields must be filled.' });
        }
       
        const userId = req.user;
        const existingApplication = await Application.findOne({ jobId, userId });
        if (existingApplication) {
            return res.status(400).json({ error: 'You have already applied for this job.' });
        }
        const newApplication = new Application({
            jobId,
            userId,
            fullName,
            email,
            phone,
            reason,
            additionalInfo,
        });

        await newApplication.save();

        const jobMapping = await JobMapping.findOne({ userId });
        if (jobMapping) {
            jobMapping.applied.push(newApplication._id);
            await jobMapping.save();
        } else {
            const newJobMapping = new JobMapping({
                userId,
                applied: [newApplication._id],
                posted: [],
            });
            await newJobMapping.save();
        }
        const Joblist = await Joblists.findById(jobId);
        if (!Joblist) {
            return res.status(404).json({ error: 'Job not found.' });
        } else {
            Joblist.applications.push(newApplication._id);
        }
        await Joblist.save();
        return res.status(200).json({ message: 'Application submitted successfully!' });
    } catch (error) {
        console.error('Error handling job application:', error);
        return res.status(500).json({ error: 'Internal server error.' });
    }
}

module.exports = { applyhandler };
