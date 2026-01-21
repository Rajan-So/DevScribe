const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const {
  createPost,
  getAllPosts,
  getSinglePost,
  deletePost,
  updatePost,
} = require("../controllers/postController");


router.get("/", getAllPosts);
router.get("/:id", getSinglePost);
router.post("/", protect, createPost);
router.delete("/:id", protect, deletePost);
router.put("/:id", protect, updatePost);

module.exports = router;
