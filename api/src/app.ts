import express, { Express, Request, Response } from "express";
import { toNodeHandler } from "better-auth/node";
import cors from "cors";
import { config } from "dotenv";
import { auth } from "./lib/auth";

config({ path: ".env" });

const app: Express = express();
const port: number = 3000;

app.all("/api/auth/*", toNodeHandler(auth));

app.use(express.json());

app.use(
  cors({
    origin: process.env.ALLOWED_ORIGINS!.split(","),
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    credentials: true,
  })
);

app.get("/", async (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
