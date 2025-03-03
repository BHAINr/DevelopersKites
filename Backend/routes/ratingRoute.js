const express = require("express");
const { getAllRating, postRatingData } = require("../controllers/getratingall");

const router = express.Router();

//get all rating 

router.route("/all/ratings").get(getAllRating);
router.route("/post/rating/data").post(postRatingData);


module.exports= router