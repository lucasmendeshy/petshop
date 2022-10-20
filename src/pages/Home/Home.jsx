import ListaPosts from "../../Components/ListaPosts/ListaPosts";
import estilos from "./Home.module.css";
const Home = () => {
  return (
    <section>
      <h2 className={estilos.titulo_secao}>Pet Notícias</h2>

      <ListaPosts />
    </section>
  );
};
export default Home;
