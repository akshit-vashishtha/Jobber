const joblist = require('../models/joblist');
const JobMapping = require('../models/jobmapping');

async function HandlePostJob(req, res) {
    console.log(req.body);
    const { name, description, category, skills, budget, deadline, } = req.body;
    
    if (!name || !description || !category || !skills || !deadline || !budget ) {
        return res.status(400).json({ message: "All Fields Are Required" });
    }
    console.log(req.user);
    try {
        const existingJob = await joblist.findOne({ name, active: true });
        if (existingJob) {
            return res.status(409).json({ message: "Job with this name already exists" });
        }

        const job = new joblist({
            name,
            description,
            category,
            skills,
            budget,
            deadline,
            userId : req.user,
        });
        const userId = req.user;
        await job.save();
        const jobId = job._id;
        const jobMapping = await JobMapping.findOne({ userId });
        if (jobMapping) {
            jobMapping.posted.push(jobId);
            await jobMapping.save();
        } else {
            const newJobMapping = new JobMapping({
                userId,
                applied: [],
                posted: [jobId],
            });
            await newJobMapping.save();
        }

        res.status(201).json({ message: "job posted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred while posting the job" });
    }
}
async function HandleGetJob(req, res) {
    try {
        const job = await joblist.find({active:true});
        if (job.length === 0) {
            return res.status(204).json({ message: 'no job active' });
        }

        res.status(200).json({ job });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "an error occured while retrieving jobs" });
    }
}

module.exports = { HandlePostJob ,HandleGetJob};