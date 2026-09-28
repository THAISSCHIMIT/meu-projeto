import './PokemonCard.css';

export function PokemonCard({pokemon}) {
    const { id, name, type, image } = pokemon;

  return (
    // Tag semântica article encapsulando o cartão
    <article className="pokemon-card">
      <header className="card-header">
        <span className="pokemon-id">{`#${String(id).padStart(3, '0')}`}</span>
        <h2 className="pokemon-name">{name}</h2>
      </header>

      <figure className="pokemon-image-container">
        <img 
          src={image} 
          alt={`Ilustração do ${name}`} 
        />
      </figure>

      <ul className="pokemon-types">
        <li className={`type-badge type-${type.toLowerCase()}`}>{type}</li>
        <li className={`type-badge type-${type.toLowerCase()}`}>{type}</li>
      </ul>
    </article>
  );
}