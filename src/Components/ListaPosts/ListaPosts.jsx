import serverApi from "../../api/servidor-api";
import estilos from "./ListaPosts.module.css";
const ListaPosts = ({ titulo, subtitulo }) => {
  console.log(serverApi);
  const postsTemp = [];

  const getPosts = async () => {
    try {
      const resposta = await fetch(`${serverApi}/posts`);
      const dados = await resposta.json();
      console.log(dados);
    } catch (error) {
      console.log("Deu ruim! " + error.message);
    }
  };
  console.log(getPosts);

  return (
    <div className={estilos.lista_posts}>
      {postsTemp.map(({ id, titulo, subtitulo }) => (
        <article key={id} className={estilos.post}>
          <h3>{titulo}</h3>

          <p>{subtitulo}</p>
        </article>
      ))}
    </div>
  );
};
export default ListaPosts;
