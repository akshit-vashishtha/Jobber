const joblist = require('../models/joblist');

async function HandlePostJob(req, res) {
    console.log(req.body);
    const { name, description, category, skills,budget,  deadline } = req.body;
    if (!name || !description || !category || !skills || !deadline || !budget) {
        return res.status(400).json({ message: "All Fields Are Required" });
    }

    try {
        const job = new joblist({
            name,
            description,
            category,
            skills,
            budget,
            deadline,
        });

        await job.save();

        res.status(201).json({ message: "job posted succefully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occured while posting the job" });
    }

}
async function HandleGetJob(req, res) {
    try {
        const job = await joblist.find();
        if (job.length === 0) {
            return res.status(404).json({ message: 'no job found' });
        }

        res.status(200).json({ job });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "an error occured while retrieving jobs" });
    }
}

module.exports = { HandlePostJob ,HandleGetJob};