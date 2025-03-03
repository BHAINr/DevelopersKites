const mongoose = require("mongoose");


const Ratingfomemodel = new mongoose.Schema({
    clientName: {
        type: String,
        required: [true, "Client name is required"],
        trim: true
    },
    // Rating value (mandatory)
    rating: {
        type: Number,
        required: [true, "Rating is required"],
        min: [1, "Rating must be at least 1"],
        max: [5, "Rating can be a maximum of 5"]
    },
    // Review Text (optional)
    review: {
        type: String,
        trim: true,
        required: false
    },
    // Service Name the client used (mandatory)
    serviceName: {
        type: String,
        required: [true, "Service name is required"],
        trim: true
    },
    // Date when the rating was created (default to current date)
    createdAt: {
        type: Date,
        default: Date.now
    }
});


// Export the model
module.exports = mongoose.model("ratingFome", Ratingfomemodel);
