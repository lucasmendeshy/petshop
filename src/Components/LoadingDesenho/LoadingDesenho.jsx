import { Link } from "react-router-dom";
import ListaPosts from "../ListaPosts/ListaPosts.jsx";
import ListaCategoria from "../ListaCategorias/ListaCategorias.jsx";
import estilos from "./LoadingDesenho.module.css";
import pacman from "../../assets/images/pacman.svg";
const LoadingDesenho = (props) => {
  return (
    <div className={estilos.loading}>
      <h2>Carregando {props.texto}</h2>
      <img src={pacman} alt="" />
    </div>
  );
};
export default LoadingDesenho;
