import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import serverApi from "../../api/servidor-api";
import LoadingDesenho from "../LoadingDesenho/LoadingDesenho.jsx";
import estilos from "./ListaCategorias.module.css";
const ListaCategorias = () => {
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getCategorias() {
      try {
        const resposta = await fetch(`${serverApi}/categorias.json`);
        const dados = await resposta.json();

        const listaDecategorias = [];

        for (const categoria in dados) {
          const objetoCategoria = {
            id: categoria,
            nome: dados[categoria].nome,
          };
          listaDecategorias.push(objetoCategoria);
        }
        setCategorias(listaDecategorias);
        setLoading(false);
      } catch (error) {
        console.log("Deu ruim! " + error.message);
      }
    }
    getCategorias();
  }, []);

  if (loading) {
    return <LoadingDesenho texto="categorias..." />;
  }

  return (
    <div className={estilos.lista_categorias}>
      <ul>
        {categorias.map(({ id, nome }) => (
          <li key={id} id={nome}>
            <NavLink activeClassName={estilos.ativo} to={`/categoria/${nome}`}>
              {nome}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ListaCategorias;
