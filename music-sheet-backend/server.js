import express, { json } from "express";
import { connect } from "mongoose";
import cors from "cors";
import userRoutes from "./routes/users.js";
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Enable CORS
app.use(json());
app.use("/api/users", userRoutes);

connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch((error) => console.error(error));
