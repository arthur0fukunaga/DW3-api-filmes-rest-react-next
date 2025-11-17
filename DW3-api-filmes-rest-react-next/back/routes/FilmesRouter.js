import express from "express";
const FilmRouter = express.Router();
import FilmesController from "../controllers/FilmesController.js";

FilmRouter.get("/films", FilmesController.getAllFilms);
FilmRouter.post("/films", FilmesController.createFilm);
FilmRouter.delete("/films/:id", FilmesController.deleteFilm);
FilmRouter.put("/films/:id", FilmesController.UpdateFilm);
FilmRouter.get("/films/:id", FilmesController.getOneFilm);

export default FilmRouter;
