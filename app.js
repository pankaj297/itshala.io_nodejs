import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import("./src/connection/connection.js");
dotenv.config();

import userRoutes from "./src/routes/UserRoutes.js";
const app = express();
const port = 8000;
app.use(cors());
app.use(express.json());
app.use("/api/v1/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the itshala");
});

app.listen(port, () => {
  console.log(`server running at port ${port}`);
});
