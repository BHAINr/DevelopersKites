const ratingFome = require("../models/Ratingfomemodel");

//post rating data to DB
exports.postRatingData = async (req, res, next) => {
    try {
        // Attempt to create the rating from the request body
        const ratingfome = await ratingFome.create(req.body);

        // If creation is successful, return a success response
        res.status(200).json({
            success: true,
            ratingfome
        });

    } catch (error) {
        // Error handling for different scenarios
        if (error.name === "ValidationError") {
            // If validation errors occur (e.g., missing fields, incorrect format)
            return res.status(400).json({
                success: false,
                message: "Validation Error",
                errors: error.errors
            });
        } else if (error.code === 11000) {
            // Handle duplicate key errors (e.g., email being duplicate)
            return res.status(400).json({
                success: false,
                message: "Duplicate key error",
                error: error.message
            });
        } else {
            // For any other type of error, send a general error message
            console.error("Error:", error); // Log the error for debugging
            res.status(500).json({
                success: false,
                message: "An unexpected error occurred. Please try again later.",
                error: error.message
            });
        }
    }
};








// Get all ratiing given by users
exports.getAllRating = async (req, res) => {

    try {
        const getRatingData = await ratingFome.find();
        return res.status(200).json({
            success: true,
            getRatingData
        })
    } catch (error) {
        console.error('Error retrieving services:', error);
        res.status(500).json({
            success: false,
            message: 'An error occurred while fetching services.',
            error: error.message
        });

    }

}

