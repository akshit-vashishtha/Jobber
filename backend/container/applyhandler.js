const JobList = require('../models/applicationschema'); // Application Schema
const JobMapping = require('../models/jobmapping'); // Job Mapping Schema


async function applyhandler(req, res) {
    try {
        const { jobId, fullName, email, phone, reason, additionalInfo } = req.body;
        if (!jobId || !fullName || !email || !phone || !reason ) {
            return res.status(400).json({ error: 'All required fields must be filled.' });
        }
        console.log(req.body);
        const userId = req.user;
        const newApplication = new JobList({
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
            jobMapping.applied.push(jobId);
            await jobMapping.save();
        } else {
            const newJobMapping = new JobMapping({
                userId,
                applied: [jobId],
                posted: [],
            });
            await newJobMapping.save();
        }

        return res.status(200).json({ message: 'Application submitted successfully!' });
    } catch (error) {
        console.error('Error handling job application:', error);
        return res.status(500).json({ error: 'Internal server error.' });
    }
}

module.exports = { applyhandler };
