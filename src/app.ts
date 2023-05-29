// express server setup

import cors from "cors";
import express, { Application, Request, Response } from "express";
const app: Application = express();
const port = 3000;

app.use(cors());

// Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// testing
app.get("/", (req: Request, res: Response) => {
  res.send("Working Successfully!");
});

export default app;
