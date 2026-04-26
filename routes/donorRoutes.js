const express = require("express");
const router = express.Router();
const Donor = require("../models/Donor");

router.post("/register", async (req, res) => {
  try {
    const donor = new Donor(req.body);
    await donor.save();

    res.json({ message: "Donor registered successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  const donors = await Donor.find();
  res.json(donors);
});

module.exports = router;