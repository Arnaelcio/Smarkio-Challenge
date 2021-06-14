const express = require("express");
const commentController = require("../controllers/commentController");

const router = express.Router();

router.use(express.json());

router.get("/comments", commentController.getAllComments);
router.post("/comments", commentController.addComment);

module.exports = router;
