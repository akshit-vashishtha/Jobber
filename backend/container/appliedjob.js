const Application = require('../models/applicationschema'); // Application Schema
const JobMapping = require('../models/jobmapping'); // Job Mapping Schema

async function HandleApliedjob(req, res) {
    try {
        const userId = req.user; 

        const jobMapping = await JobMapping.findOne({ userId });

        if (!jobMapping) {
            return res.status(404).json({ message: 'No job mapping found for the user' });
        }

        const applicationIds = jobMapping.applied;

        const applications = await Application.find({ _id: { $in: applicationIds } });

        res.status(200).json(applications);
    } catch (error) {
        console.error('Error fetching applied jobs:', error);
        res.status(500).json({ error: 'Failed to fetch applied jobs' });
    }
}

module.exports = { HandleApliedjob };
