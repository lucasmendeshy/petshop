import { useParams } from "react-router-dom";
import ListaCategoria from "../../Components/ListaCategorias/ListaCategorias.jsx";
import ListaPosts from "../../Components/ListaPosts/ListaPosts.jsx";
import estilos from "./Categoria.module.css";

const Categoria = () => {
  const { nome } = useParams();

  return (
    <section>
      <h2 className={estilos.titulo_secao}>Categorias</h2>

      <ListaCategoria />
      <ListaPosts categoria={nome} />
    </section>
  );
};
export default Categoria;
