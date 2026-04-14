const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const todoRoutes = require("./routes/todoRoutes");
const userRoutes = require("./routes/userRoutes");
const { errors } = require("celebrate");

require("dotenv").config();
const app = express();

app.use(cors());
app.use(errors());
app.use(express.json());
app.use("/api/todos", todoRoutes); //endpoint prefix
app.use("/api/users", userRoutes);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("connected to DB"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  console.log("api connected");
});

app.listen(3000, () => {
  console.log("connected to 3000 port");
});
