import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import serverApi from "../../api/servidor-api.js";
import Caixa from "../../Components/Caixa/Caixa.jsx";
import LoadingDesenho from "../../Components/LoadingDesenho/LoadingDesenho.jsx";
import estilos from "./Post.module.css";
const Post = () => {
  /* useParams() -> hook do react-router que permite acesso/manipulação de parâmetro vindos da URL. */
  const { id } = useParams();
  console.log(id);
  const [loading, setLoading] = useState(true);
  const [post1, setPost1] = useState([]);

  /* Hook do react-router que permite utilizar recuros de navegação no histórico do navegador */
  let history = useHistory();

  useEffect(() => {
    setLoading(true);
    async function getPost() {
      try {
        const resposta = await fetch(`${serverApi}/posts/${id}`);
        const dados = await resposta.json();
        setPost1(dados);
        setLoading(false);
        /* Verificando se o resultando do objeto de dados possui o tamanho de zero (ou seja, se ele está vazio, sem dados nenhum) */
        if (Object.keys(dados).length === 0) {
          /* Estamos, forçando o redirecionamento numa de primeiro nível que não existe. Com isso, na prática, o router traz a página404. */
          history.push("/404");
        }
        console.log(dados);
      } catch (error) {
        console.log("Deu ruim na busca do post: " + error.message);
      }
    }
    getPost();
  }, [id]); /* id é uma dependência para useEffect */

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
