require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI).then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));


// Donor routes
const donorRoutes = require("./routes/donorRoutes");
app.use("/donors", donorRoutes);

const requestRoutes = require("./routes/requestRoutes");
app.use("/requests", requestRoutes);


app.get("/", (req, res) => {
  res.send("LifeLink Backend Running");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});