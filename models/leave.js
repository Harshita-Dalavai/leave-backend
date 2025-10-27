const mongoose = require("mongoose");

const leaveSchema = new mongoose.Schema({
  employeeName: {
    type: String,
    required: true,
  },
  leaveType: {
    type: String,
    required: true,
  },
  startDate: {
    type: String,  // 👈 change from Date to String (frontend sends date as "26-10-2025")
    required: true,
  },
  endDate: {
    type: String,  // 👈 same here
    required: true,
  },
  reason: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "Pending",
  },
});

module.exports = mongoose.model("Leave", leaveSchema);