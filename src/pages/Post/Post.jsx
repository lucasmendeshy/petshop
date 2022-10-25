import Caixa from "../../Components/Caixa/Caixa.jsx";
import estilos from "./Post.module.css";
const Post = () => {
  return (
    <section>
      <h2 className={estilos.titulo_secao}>Título do post...</h2>
      <Caixa>
        <h3>Categoria do post...</h3>
        <p>Descrição do post...</p>
      </Caixa>
    </section>
  );
};
export default Post;
