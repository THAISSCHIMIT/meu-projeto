import { Header } from "./Header";
import { PokemonCard } from "./src/PokemonCard";
import{Footer} from "./Footer";
function App() {

  const charmander = {
  id: "#004",
  name: "Charmander",
  type: "Fogo",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
};

const squirtle = {
  id: "#007",
  name: "Squirtle",
  type: "Agua",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"
};

const bulbasaur = {
  id: "#001",
  name: "Bulbasaur",
  type: "Planta",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
};
  return (
    <>
      <Header />
      <PokemonCard pokemon={charmander} />
      <PokemonCard pokemon={squirtle} />
      <PokemonCard pokemon={bulbasaur} />
      <Footer />
    </>
  );
}

export default App;
