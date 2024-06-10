import express, { json } from "express";
import cors from "cors";
import { connect, connection as _connection } from "mongoose";
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(json());

const uri = process.env.MONGO_URI || "mongodb://localhost:27017/";
connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = _connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

connection.on("error", (err) => {
  console.error(`MongoDB connection error: ${err}`);
  process.exit(1);
});

import usersRouter from "./routes/users";
app.use("/users", usersRouter);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
