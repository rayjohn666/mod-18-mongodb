const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  deleteReaction,
  addReaction,
} = require("../controllers/thoughts.js");

router.route("/").get(getThought).post(createThoughts);

router.route("/:thoughtId").get(getSingleThought).delete(deleteThought);

router.route("/:thoughtId/reactions").post(addReaction);

router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;
