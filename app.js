import express from "express";
import dotenv from "dotenv";

dotenv.config({
  path: "./data/config.env",
});

export const app = express();