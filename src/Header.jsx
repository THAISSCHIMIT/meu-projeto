// Importação de módulos e estilos (JS ES6)
import './Header.css';

// Componente Funcional com Exportação Nomeada
export function Header() {
  return (
    // HTML5 Semântico com atributos JSX (className)
    <header className="pokedex-header" > 
      <figure className="pokedex-header">
        <img 
          src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" 
          alt="Logotipo Oficial PokéAPI" 
        />
      </figure>
      <p className="pokedex-subtitulo">"Sua Enciclopédia Pokémon Interativa"</p>
    </header>
  );
}