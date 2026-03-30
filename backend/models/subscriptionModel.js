const mongoose = require("mongoose");

const subscriptionSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    frequency: { type: String, enum: ["monthly","yearly"], default: "monthly"},
    price: { type: Number, required: true },
    nextPaymentDate: { type: Date, required: true },
    category: { type: String, default: "general" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    reminderEnabled: { type: Boolean, default: true },
    reminderDaysBefore: { type: Number, default: 7, min: 0 }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Subscription", subscriptionSchema);