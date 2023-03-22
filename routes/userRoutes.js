const router = require("express").Router();
const {
  getUser,
  getSingleUser,
  createUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../controllers/users.js");

router.route("/").get(getUser).post(createUser);

router.route("/:userId").get(getSingleUser).delete(deleteUser);

router.route("/:userId/friends").post(addFriend);

router.route("/:userId/friends/:friendId").delete(removefriend);

module.exports = router;
