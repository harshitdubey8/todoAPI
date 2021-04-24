import express from "express";
import cors from "cors";

import todosRouter from "./routes/todos.js";
import connectDB from "./config/db.js";

const app = express();

app.use(express.json());
app.use(cors());

connectDB();

app.get("/", (req, res) => res.status(200).send("hello world"));
app.get("/about", (req, res) =>
  res.status(200).json("welcome to about page MF")
);

app.use("/api", todosRouter);

app.listen(80, () => console.log(`Listening on localhost:${80}`));

// mongodb+srv://root:<password>@cluster0.zjbpi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
