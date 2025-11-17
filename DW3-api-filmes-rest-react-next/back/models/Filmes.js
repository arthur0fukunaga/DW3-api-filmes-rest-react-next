import mongoose from "mongoose";

const castSchema = new mongoose.Schema({
  name: String,
  role: String,
});

const filmeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  year: Number,
  director: String,
  genre: [String],
  duration: Number,
  rating: Number,
  synopsis: String,
  cast: [castSchema],
  language: String,
  country: String,
  createdAt: Date,
  imagem: String,
});

const Filmes = mongoose.model("Filmes", filmeSchema);

export default Filmes;
