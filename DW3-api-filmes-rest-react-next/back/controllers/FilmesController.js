import { ObjectId } from "mongodb";
import FilmService from "../services/FilmesService.js";

const getAllFilms = async (req, res) => {
  try {
    const films = await FilmService.GetAll();
    res.status(200).json({ films: films });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Erro interno no servidor." });
  }
};

const createFilm = async (req, res) => {
  try {
    if (!req.body || Object.keys(req.body).length === 0) {
      console.log("createFilm: corpo vazio ou o Content-Type não está definido", req.headers["content-type"]);
        return res.status(400).send({ error: "O corpo da requisição está vazio. Mande o JSON com header Content-Type: application/json" });
    }

    const {
      title,
      year,
      director,
      genre,
      duration,
      rating,
      synopsis,
      cast,
      language,
      country,
      imagem,
    } = req.body;
    await FilmService.CreateFilm(
      title,
      year,
      director,
      genre,
      duration,
      rating,
      synopsis,
      cast,
      language,
      country,
      imagem
    );
    res.status(201).send({ message: "Film criado com sucesso!" });
  } catch (error) {
      console.log(error);
    res.status(500).send({ error: "Erro interno no servidor." });
  }
};

const deleteFilm = async (req, res) => {
  try {
    const id = req.params.id;
    if (ObjectId.isValid(id)) {
      const deletedFilm = await FilmService.DeleteFilm(id);
    if (deletedFilm) {
      res.status(200).send({ message: "Film deletado com sucesso!" });
    } else {
      res.status(404).send({ error: "Film não encontrado." });
    }
    }
  } catch (error) {
      console.log(error);
    res.status(500).send({ error: "Erro interno no servidor." });
  }
};

const UpdateFilm = async (req, res) => {
  try {
    const id = req.params.id;
    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ error: "ID inválido." });
    }

    if (!req.body || Object.keys(req.body).length === 0) {
      console.log("UpdateFilm: corpo vazio ou Content-Type não definido", req.headers["content-type"]);
    return res.status(400).send({ error: "Corpo da requisição vazio. Envie JSON com header Content-Type: application/json" });
    }

    const {
      title,
      year,
      director,
      genre,
      duration,
      rating,
      synopsis,
      cast,
      language,
      country,
      imagem,
    } = req.body;

    const updatedFilm = await FilmService.UpdateFilm(
      id,
      title,
      year,
      director,
      genre,
      duration,
      rating,
      synopsis,
      cast,
      language,
      country,
      imagem
    );

    if (updatedFilm) {
      res.status(200).send({ message: "Film atualizado com sucesso!" });
    } else {
      res.status(404).send({ error: "Film não encontrado." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Erro interno no servidor." });
  }
};

const getOneFilm = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      const film = await FilmService.GetOne(id);
      if (film) {
        res.status(200).json({ film: film });
      } else {
        res.status(404).json({ error: "Film não encontrado." });
      }
    } else {
      res.status(400).json({ error: "ID inválido." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno no servidor." });
  }
};

export default { getAllFilms, createFilm, deleteFilm, UpdateFilm, getOneFilm };
