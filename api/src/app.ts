import express, { Express, Request, Response } from "express";
import { db } from "./db";
import { usersTable } from "./db/schema";
const app: Express = express();
const port: number = 3000;

app.get("/", async (req: Request, res: Response) => {
  const users = await db.select().from(usersTable);

  res.json(users);
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
