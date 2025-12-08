const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
connectDB();
app.use(cors());
app.use(express.json());

app.use("/api/employees", require("./routes/employeeRoutes"));

app.listen(5000, () => console.log("Backend running on port 5000"));
