import { useParams } from "react-router-dom";
import ListaCategoria from "../../Components/ListaCategorias/ListaCategorias.jsx";
import ListaPosts from "../../Components/ListaPosts/ListaPosts.jsx";
import estilos from "./Categoria.module.css";
/* Objetivo deste componente é exibir o ListaPosts filtrado pela categoria escolhida no menu ListaCategorias. */
const Categoria = () => {
  const { nome } = useParams();
  /* console.log(nome); Testando */
  return (
    <section>
      <h2 className={estilos.titulo_secao}>Categorias</h2>

      <ListaCategoria />
      <ListaPosts url={`posts?categoria=${nome}`} />
    </section>
  );
};
export default Categoria;
