const express = require("express");
const Leave = require("../models/leave");

const router = express.Router();

// Create a new leave request
// Create a new leave request
router.post("/", async (req, res) => {
  console.log("POST /api/leaves called. Data received:", req.body);
  try {
    const newLeave = new Leave(req.body);
    await newLeave.save();
    console.log("✅ Leave saved successfully:", newLeave);
    res.status(201).json(newLeave);
  } catch (error) {
    console.error("❌ Error saving leave:", error.message);
    res.status(500).json({ message: error.message });
  }
});

// Get all leave requests
router.get("/", async (req, res) => {
  try {
    const leaves = await Leave.find();
    res.json(leaves);
  } catch (error) {
    res.status(500).json({ message: error.message });
  } 
});
// Update leave status (Approve / Reject)
router.put("/:id", async (req, res) => {
  try {
    const leave = await Leave.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    res.json(leave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


module.exports = router;