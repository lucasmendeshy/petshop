import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import serverApi from "../../api/servidor-api.js";
import Caixa from "../../Components/Caixa/Caixa.jsx";
import LoadingDesenho from "../../Components/LoadingDesenho/LoadingDesenho.jsx";
import estilos from "./Post.module.css";
const Post = () => {
  const { id } = useParams();
  console.log(id);
  const [loading, setLoading] = useState(true);
  const [post1, setPost1] = useState([]);

  let history = useHistory();

  useEffect(() => {
    setLoading(true);
    async function getPost() {
      try {
        /* É necessário adicionar ".json" para que o recurso/documento de dados do Realtime Database seja lido como um objeto. */
        const resposta = await fetch(`${serverApi}/posts/${id}.json`);
        const dados = await resposta.json();
        setPost1(dados);
        setLoading(false);

        /*  Se não existir dados (ou seja, post inexistente) vá para a rota 404 */
        if (!dados) {
          history.push("/404");
        }
        console.log(dados);
      } catch (error) {
        console.log("Deu ruim na busca do post: " + error.message);
      }
    }
    getPost();
  }, [id, history]);

  if (loading) return <LoadingDesenho />;

  return (
    <section>
      <h2 className={estilos.titulo_secao}>{post1.titulo}</h2>
      <Caixa>
        <h3>{post1.categoria}</h3>
        <p>{post1.descricao}</p>
      </Caixa>
    </section>
  );
};
export default Post;
