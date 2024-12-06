const Application = require('../models/applicationschema'); // Application Schema
const JobMapping = require('../models/jobmapping'); // Job Mapping Schema
const Joblists = require('../models/joblist'); // Job list Schema

async function getprofileHandler(req, res) {
    try {
        const userId = req.user;

        const jobMap = await JobMapping.findOne({ userId });
        if (!jobMap || jobMap.posted.length === 0) {
            return res.json({ message: "No job posted" });
        }

        const Jobposted = await Promise.all(
            jobMap.posted.map(async (jobId) => {
                const job = await Joblists.findById(jobId);

                if (job.applications && job.applications.length > 0) {
                    const applications = await Promise.all(
                        job.applications.map(async (applicationId) => {
                            const app = await Application.findById(applicationId);
                            return app; 
                        })
                    );
                    
                    job.applications = applications;
                }
                return job;
            })
        );

        return res.json({ jobs: Jobposted });
    } catch (error) {
        console.error('Error fetching profile:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
async function setstatusHandler(req, res) {
    const { applicationId } = req.params; 
    const { status } = req.body;
    console.log(req.body);
    try {
        const application = await Application.findById(applicationId);

        if (!application) {
            return res.status(404).json({ message: 'Application not found' });
        }

        if (status) {
            application.status = "selected";
        } else {
            application.status = "rejected";
        }
        await application.save();

        res.status(200).json({
            message: 'Application status updated successfully',
            application,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

module.exports = { getprofileHandler , setstatusHandler };
