import "./PokemonCard.css";
import { useState } from "react";
import './PokemonCard.css';

export function PokemonCard({ pokemon }) {
  const { id, name, type, image } = pokemon;
  const [isShiny, setIsShiny] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const destaque = isShiny|| isFavorite;

  return (
    // Tag semântica article encapsulando o cartão
    <article className = {`pokemon-card ${destaque ? 'card-dourado': ''}`}>
      <header className="card-header">
        <span className="pokemon-id">{`#${String(id).padStart(3, "0")}`}</span>
        <h2 className="pokemon-name">{name}</h2>
      </header>

      <figure className="pokemon-image-container">
        <img
          src={
            isShiny && pokemon.shinyImage ? pokemon.shinyImage : pokemon.image
          }
          alt={pokemon.name}
        />
      </figure>

      <ul className="pokemon-types">
        <li className={`type-badge type-${type.toLowerCase()}`}>{type}</li>
        <li className={`type-badge type-${type.toLowerCase()}`}>{type}</li>
      </ul>
      <footer className="card-acoes">
        <button className="btn-shiny" onClick={() => setIsShiny(!isShiny)}>
          {isShiny ? "✨ Ver Normal" : "⭐ Ver Shiny"}
        </button>

        <button
          className={`btn-favorito ${isFavorite ? "favoritado" : ""}`}
          onClick={() => setIsFavorite(!isFavorite)}
        >
          {isFavorite ? "❤️" : "🤍"}
        </button>
      </footer>
    </article>
  );
}
