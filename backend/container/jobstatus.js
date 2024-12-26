const joblist = require('../models/joblist');
const jobmapping = require('../models/jobmapping');
const applications = require('../models/applicationschema');

async function jobstatushandler(req, res) {
    const { jobId } = req.params; 
    const userId = req.user;
    try {
       
        const job = await joblist.findByIdAndUpdate(jobId, { active: false }, { new: true });

        if (!job) {
            return res.status(404).json({ message: 'Job not found' });
        }

        // 2. Remove the job from the user mapping schema (posted jobs)
        const userMapping = await jobmapping.findOneAndUpdate(
            { userId: userId },  
            {
                $pull: { posted: jobId }  
            },
            { new: true }  
        );


        if (!userMapping) {
            return res.status(404).json({ message: 'User mapping not found' });
        }

        // 3. Set all applications related to this job to 'rejected'
        await Promise.all(
            job.applications.map((id) =>
                applications.findByIdAndUpdate(id, { status: 'rejected' })
            )
        );
        // Respond with success
        res.status(200).json({ message: 'Job status updated successfully, applications rejected' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while updating job status' });
    }
}

module.exports = { jobstatushandler };
