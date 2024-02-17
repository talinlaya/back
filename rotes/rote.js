const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const post = require("../modals/app");

router.get("/posts", async (req, res) => {
  try {
    const posts = await post.find();
    res.status(200).send(posts);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post("/post", async (req, res) => {
  try {
    const newPost = new post(req.body);
    await newPost.save();
    res.status(200).json({ message: "create succes", posts: newPost });
  } catch (error) {
    res.status(400).json(error);
  }
});
router.put("/post/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const newPost = await post.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({
      message: "update success",
      posts: newPost,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.delete("/post/:id", async (req, res) => {
  try {
    await post.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "delet success",
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
module.exports = router;
