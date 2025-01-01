const mongoose = require('mongoose');

const JobListSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    category: {
        type: String,
        required: true,
    },
    skills: {
        type: [String],
        required: true,
    },
    budget: {
        type: Number,
        required: true,
        min: 0,
    },
    deadline: {
        type: Date,
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    applications: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Application',
        }
    ],
    active: {
        type: Boolean,
        default : true,
    }
}, { timestamps: true });

module.exports = mongoose.model('JobList', JobListSchema);
