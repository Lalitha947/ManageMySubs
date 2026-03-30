const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const {
  getSubscriptions,
  getSubscription,
  getReminders,
  createSubscription,
  updateSubscription,
  deleteSubscription,
} = require("../controllers/subscriptionController");

router.use(authMiddleware);

// Routes
router.route("/").get(getSubscriptions).post(createSubscription);
router.route("/reminders").get(getReminders);
router.route("/:id").get(getSubscription).put(updateSubscription).delete(deleteSubscription);

module.exports = router;