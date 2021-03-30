import "reflect-metadata";
import "colors";

import express, { json, Application } from "express";

import { config } from "dotenv";
import { connectDB } from "./config/db";
import { errorHandler, notFound } from "./middleware/error";

config();

const app: Application = express();

connectDB();
app.use(json());

app.use(notFound);
app.use(errorHandler);

const PORT: string | number = process.env.PORT || 5000;
const ENV: string | number = process.env.NODE_ENV || "development";

app.listen(PORT, () =>
  console.log(
    ` 📡 Backend server: `.inverse.yellow.bold +
      ` Running in ${ENV} mode on port ${PORT}`,
  ),
);
