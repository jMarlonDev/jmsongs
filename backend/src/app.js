import express from "express";
import cors from "cors";
import songRoutes from "./routes/songRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", songRoutes);

export default app;