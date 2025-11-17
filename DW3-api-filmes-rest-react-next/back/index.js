import Express from "express";
import cors from "cors";
import mongoose from "mongoose";
  const app = Express();

import "./models/Film.js";
import FilmRouter from "./routes/filmRouter.js";

  app.use(Express.json());
  app.use(Express.urlencoded({ extended: true }));
  app.use(cors());

  mongoose.connect("mongodb://localhost:27017/films");

  app.use("/", FilmRouter);
  const PORT = 3200;

  app.listen(PORT, (error) => {
    if (error) {
      console.log(error);
    }
    console.log(`API rodando localmente na porta http://localhost:${PORT}`);
  });
