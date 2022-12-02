import { useState, useEffect } from "react";
import serverApi from "../../api/servidor-api";
import LoadingDesenho from "../LoadingDesenho/LoadingDesenho.jsx";
import estilos from "./ListaPosts.module.css";
import ArtigoPost from "../ArtigoPost/ArtigoPost";
const ListaPosts = ({ categoria }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    async function getPosts() {
      try {
        const resposta = await fetch(`${serverApi}/posts.json`);
        const dados = await resposta.json(); // OBJETÃO

        let listaDePosts = [];

        for (const post in dados) {
          const objetoPost = {
            id: post, // a chave/string gerado pelo Firebase será como um id
            titulo: dados[post].titulo,
            subtitulo: dados[post].subtitulo,
            descricao: dados[post].descricao,
            categoria: dados[post].categoria,
          };
          listaDePosts.push(objetoPost);

          /* se categoria for escolhida/clicada */
          if (categoria) {
            /* Então vamos fazer uma lista de posts com filtro de categoria */

            /* A cada vez que o loop for é executado, pegamos a categoria de cada post e comparamos com a categoria escolhida pelo usuário; */
            listaDePosts = listaDePosts.filter(
              /* Se esta comparação for verdadeira, guardamos o post na listaDePosts. Caso contrário, é descartado pelo filtro */
              (cadaPost) => cadaPost.categoria === categoria
            );
          }
        }
        setPosts(listaDePosts);
        setLoading(false);
      } catch (error) {
        console.log("Deu ruim! " + error.message);
      }
    }
    getPosts();
  }, [categoria]);

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
