const express = require("express");
const router = express.Router();

const {
  createCommentsCtrl,

  fetchCommentsCtrl,
 
} = require("../../controller/comments/commentsController");



router.route("/comments").get( fetchCommentsCtrl);
router.route("/comments").post( createCommentsCtrl);

module.exports = router;