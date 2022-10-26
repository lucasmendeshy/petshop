import estilos from "./LoadingDesenho.module.css";
import pacman from "../../assets/images/pacman.svg";
const LoadingDesenho = () => {
  return (
    <div className={estilos.loading}>
      <h2>Carregando...</h2>
      <img src={pacman} alt="" />
    </div>
  );
};
export default LoadingDesenho;
