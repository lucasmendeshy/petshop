import Caixa from "../../Components/Caixa/Caixa";
import estilos from "./Contato.module.css";
const Contato = () => {
  return (
    <section>
      <h2 className={estilos.titulo_secao}>Fale Conosco</h2>

      <Caixa>
        <p>
          <i>Em breve teremos um contato com biblioteca com componentes.</i>
        </p>
      </Caixa>
    </section>
  );
};
export default Contato;
