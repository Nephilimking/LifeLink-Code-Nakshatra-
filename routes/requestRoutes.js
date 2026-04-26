const express = require("express");
const router = express.Router();
const Request = require("../models/Request");
const Donor = require("../models/Donor");

// Create request
router.post("/create", async (req, res) => {
  const request = new Request(req.body);
  await request.save();

  // simple matching
  const donors = await Donor.find({
    bloodGroup: request.bloodGroup,
    available: true
  });

  res.json({
    message: "Request created",
    matchedDonors: donors
  });
});

// Accept request
router.post("/accept/:id", async (req, res) => {
  await Request.findByIdAndUpdate(req.params.id, {
    status: "accepted"
  });

  res.json({ message: "Request accepted" });
});

module.exports = router;