import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import serverApi from "../../api/servidor-api";
import LoadingDesenho from "../LoadingDesenho/LoadingDesenho.jsx";
import estilos from "./ListaCategorias.module.css";
const ListaCategorias = () => {
  /* Atribuição do useState para manipular os dados do componente
    1. parâmetro: variável que terá os dados
    2. parâmetro: função responsável por atualizar (setter)
    obs.: o que colocamos no useState representa o valor incial.*/
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getCategorias() {
      try {
        const resposta = await fetch(`${serverApi}/categorias`);
        const dados = await resposta.json();
        /* Precisamos passar os dados capturador da API para o state do componente via setter (obrigatório!) */
        setCategorias(dados);
        setLoading(false);
      } catch (error) {
        console.log("Deu ruim! " + error.message);
      }
    }
    getCategorias();
  }, []);

  /* console.log(categorias); -> Testando */

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
