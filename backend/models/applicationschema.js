const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
    jobId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "JobList",
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    reason: {
        type: String,
        required: true
    },
    additionalInfo: {
        type: String
    },
    status: {
        type: String,
        default: "Pending"
    }, 
    appliedAt: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model("Application", applicationSchema);
