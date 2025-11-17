import Film from "../models/Film.js";

  class FilmService {
    async GetAll() {
      try {
        const films = await Film.find();
        return films;
      } catch (error) {
        console.log(error);
      }
    }

    async CreateFilm(
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
    ) {
      try {
        const newFilm = new Film({
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
        });
        await newFilm.save();
      } catch (error) {
        console.log(error);
      }
    }

    async DeleteFilm(id) {
      try {
        const deletedFilm = await Film.findByIdAndDelete(id);
        return deletedFilm;
      } catch (error) {
        console.log(error);
      }
    }

    async UpdateFilm(
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
    ) {
      try {
        const updatedFilm = await Film.findByIdAndUpdate(
          id,
          {
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
          },
          { new: true }
        );
        return updatedFilm;
      } catch (error) {
        console.log(error);
      }
    }

    async GetOne(id) {
      try {
        const film = await Film.findById(id);
        return film;
      } catch (error) {
        console.log(error);
      }
    }
  }
  export default new FilmService();
