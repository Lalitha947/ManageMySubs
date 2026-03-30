const Subscription = require("../models/subscriptionModel");

// @desc    Get all subscriptions
// @route   GET /api/subscriptions
// @access  Public (will be Private later with auth)
const getSubscriptions = async (req, res) => {
  try {
    const subscriptions = await Subscription.find({ user: req.userId });
    res.status(200).json(subscriptions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get reminders for upcoming payments
// @route   GET /api/subscriptions/reminders
// @access  Public
const getReminders = async (req, res) => {
  try {
    const subscriptions = await Subscription.find({ user: req.userId, reminderEnabled: true });
    const now = new Date();

    const reminders = subscriptions
      .map(sub => {
        const diffDays = Math.ceil((new Date(sub.nextPaymentDate).getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
        return {
          ...sub.toObject(),
          daysUntilPayment: diffDays,
          isReminderDue: diffDays >= 0 && diffDays <= sub.reminderDaysBefore,
        };
      })
      .filter(sub => sub.isReminderDue)
      .sort((a, b) => a.daysUntilPayment - b.daysUntilPayment);

    res.status(200).json(reminders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get single subscription
// @route   GET /api/subscriptions/:id
// @access  Public
const getSubscription = async (req, res) => {
  try {
    const subscription = await Subscription.findById(req.params.id);
    if (!subscription || subscription.user.toString() !== req.userId) {
      return res.status(404).json({ message: "Subscription not found" });
    }
    res.status(200).json(subscription);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a subscription
// @route   POST /api/subscriptions
// @access  Public
const createSubscription = async (req, res) => {
  try {
    const {
      name,
      frequency,
      price,
      nextPaymentDate,
      category,
      reminderEnabled = true,
      reminderDaysBefore = 7,
    } = req.body;

    if (!name || price == null || !nextPaymentDate) {
      return res.status(400).json({ message: "Please provide name, price, and nextPaymentDate" });
    }

    const subscription = await Subscription.create({
      name,
      frequency,
      price,
      nextPaymentDate,
      category,
      user: req.userId,
      reminderEnabled,
      reminderDaysBefore,
    });

    res.status(201).json(subscription);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update a subscription
// @route   PUT /api/subscriptions/:id
// @access  Public
const updateSubscription = async (req, res) => {
  try {
    const subscription = await Subscription.findById(req.params.id);

    if (!subscription || subscription.user.toString() !== req.userId) {
      return res.status(404).json({ message: "Subscription not found" });
    }

    const {
      reminderEnabled = subscription.reminderEnabled,
      reminderDaysBefore = subscription.reminderDaysBefore,
      ...rest
    } = req.body;

    const updatedSubscription = await Subscription.findByIdAndUpdate(
      req.params.id,
      {
        ...rest,
        reminderEnabled,
        reminderDaysBefore,
      },
      { new: true }
    );

    res.status(200).json(updatedSubscription);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete a subscription
// @route   DELETE /api/subscriptions/:id
// @access  Public
const deleteSubscription = async (req, res) => {
  try {
    const subscription = await Subscription.findById(req.params.id);

    if (!subscription || subscription.user.toString() !== req.userId) {
      return res.status(404).json({ message: "Subscription not found" });
    }

    await Subscription.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Subscription deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getSubscriptions,
  getSubscription,
  getReminders,
  createSubscription,
  updateSubscription,
  deleteSubscription,
};