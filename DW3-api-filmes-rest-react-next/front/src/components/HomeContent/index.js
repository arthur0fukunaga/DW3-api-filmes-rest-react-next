import styles from "@/components/HomeContent/HomeContent.module.css";
import axios from "axios";
import {useState, useEffect} from "react";

const HomeContent = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const response = await axios.get("http://localhost:3200/films");
        setFilms(response.data.films);
      } catch (err) {
        console.log(err);
      }
    };
    fetchFilms();
  }, []);

  return (
    <>
      <div className={styles.homeContent}>
        <div className={styles.listGamesCard}>
          <div className={styles.title}>
            <h2>Lista de filmes</h2>
          </div>

          <div className={styles.filmsGrid}>
            {films.map((film) => (
              <article key={film._id} className={styles.filmCard}>
                <div className={styles.posterWrap}>
                  <img
                    className={styles.poster}
                    src={film.poster || `/imgs/${film.imagem}`}
                    alt={`Poster de ${film.title}`}
                  />
                </div>
                <div className={styles.info}>
                  <h3 className={styles.filmTitle}>{film.title}</h3>
                  <p className={styles.meta}>
                    <span>{film.year || "—"}</span>
                    <span>•</span>
                    <span>{film.director || "—"}</span>
                    <span>•</span>
                    <span>{Array.isArray(film.genre) ? film.genre.join(", ") : film.genre || "—"}</span>
                  </p>
                  <p className={styles.synopsis}>{film.synopsis || "Não há sinopse disponível."}</p>
                  <div className={styles.cardFooter}>
                    <div className={styles.leftFooter}>
                      <span className={styles.rating}>{film.rating ?? "—"}</span>
                      <span className={styles.duration}>{film.duration ? `${film.duration} min` : "—"}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeContent;