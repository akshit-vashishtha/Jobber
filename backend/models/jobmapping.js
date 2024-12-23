const mongoose = require('mongoose');


const JobMappingSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true,
    },
    applied: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Application', 
        },
    ],
    posted: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'JobList', 
        },
    ],
});

const JobMapping = mongoose.model('JobMapping', JobMappingSchema);

module.exports = JobMapping;
