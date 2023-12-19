const express = require('express');
const router = express.Router();
 const {fetchAllPosts,createPostCtrl,updateParticulerPost,
    fetchParticularPost,
    deleteParticularPost,postLikeController,
    postDislikeController,
    }=require("../../controller/post/postController")
 const {
    postPhotoResize,
    postPhotoUpload,
  } = require("../../middleware/upload/postPhotoUpload");
  
router.route("/post").get(fetchAllPosts);
router
  .route("/post")
  .post(
    // postPhotoUpload.single("postImage"),
    // postPhotoResize,
    createPostCtrl
  );
  router.route("/post/:id").get( fetchParticularPost);
router.route("/post/:id").put( updateParticulerPost);
router.route("/post/like/:id").put( postLikeController);
router.route("/post/dislike/:id").put( postDislikeController);
router.route("/post/:id").delete( deleteParticularPost);


module.exports = router;