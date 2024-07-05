import express, { Application, NextFunction, Request, Response } from "express";
const app: Application = express();

app.use(express.json());

app.use("/api/v1/users", (req: Request, res: Response) => {
  res.status(200).send({
    status: "success",
    message: "Welcome to users",
  });
});

app.use("*", (req: Request, res: Response, next: NextFunction) => {
  res.status(500).send({
    status: "Error",
    message: "resource not available 😒",
  });
});

app.listen(80, () => {
  console.log("App listening on http://localhost:80");
});
