const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect("mongodb://mongo-db:27017/employees")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));


app.use("/api/employees", require("./routes/employeeRoutes"));

app.listen(5000, () => console.log("Backend running on port 5000"));