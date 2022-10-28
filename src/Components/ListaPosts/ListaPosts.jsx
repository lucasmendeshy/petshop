import { useState, useEffect } from "react"; // Hooks do React
import serverApi from "../../api/servidor-api";
import LoadingDesenho from "../LoadingDesenho/LoadingDesenho.jsx";
import estilos from "./ListaPosts.module.css";
import ArtigoPost from "../ArtigoPost/ArtigoPost";
const ListaPosts = ({ url }) => {
  /* Iniciamos o state componente com um array vazio,
  para posteriormente "preechê-lo com os dados vindos da API.
  Esta atribuição será feita com auxílio do setPosts." */
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getPosts() {
      try {
        // Solução 1
        /*  const resposta = await fetch(`${serverApi}/${props.url || "posts"}`); */

        // Solução 2
        /*  const resposta = await fetch(
          `${serverApi}/${props.url != undefined ? props.url : "posts"}`
        ); */
        const resposta = await fetch(`${serverApi}/${url || "posts"} `);
        const dados = await resposta.json();
        setPosts(dados);
        setLoading(false);
      } catch (error) {
        console.log("Deu ruim! " + error.message);
      }
    }
    getPosts();
    /* É necessário indicar a URL como dependência pois ela muda toda vez em que uma categoria é clicada;
    
    Desta forma, o useEffect "entende" que ele deve executar novamente as suas ações (neste caso, executar novamente o fetch na API)*/
  }, [url]);
  /* Sobre o useEffect
  Este hook visa permitir um maior controle sobre "efeitos colaterais" na execução do componente.
  
  Recebe dois parâmetros:
  1. Função callback com o que será executado.
  2. Lista de dependências que indicaram ao useEffect quando ele deverá funcionar.
  
  - Se não passar a lista (ou seja, se deixar sem os [], useEffect executará toda vez que o componente for redenrizado. Portanto, o callback se torna um loop infinito.)
  
  - Se passar a lista vazia (ou seja, deixar o [] vazio), useEffect executará somente no momento que o componente é renderizado a primeira vez evitando o loop infinito no callback.*/

  if (loading) {
    return <LoadingDesenho texto="posts..." />;
  }

  if (posts.length !== 0) {
    return (
      <div className={estilos.lista_posts}>
        {posts.map(({ id, titulo, subtitulo }) => (
          <ArtigoPost
            key={id}
            id={id}
            titulo={titulo}
            subtitulo={subtitulo}
            classe={estilos.post}
          />
        ))}
      </div>
    );
  } else {
    return <h2 style={{ textAlign: "center" }}>Não há posts...</h2>;
  }
};
export default ListaPosts;
