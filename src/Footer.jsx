import './Footer.css';



export function Footer() {
  // Captura dinâmica do ano atual
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="pokedex-footer">
      <div className="rodape-conteudo">
        <p className="rodape-texto">
          © {anoAtual} PokéAgenda. Dados consumidos da PokéAPI.
        </p>

        <div className="rodape-navegacao" aria-label="Links de documentação e código fonte">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Ver código fonte no GitHub"
            className="rodape-link"
          >
            GitHub
          </a>
        
          <a 
            href="https://pokeapi.co" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Acessar site oficial da PokéAPI"
            className="rodape-link"
          >
            PokéAPI
          </a>
        </div>

      </div>
    </footer>
  );
}