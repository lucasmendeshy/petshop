import estilos from "./Sobre.module.css";
const Sobre = () => {
  return (
    <section>
      <h2 className={estilos.titulo_secao}>Sobre nosso PetShop</h2>

      <div id="sobre">
        <h3>Missão</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          rerum libero minus eveniet pariatur incidunt voluptatibus laudantium
          laboriosam nihil, iure, ad quaerat sint et velit magnam cupiditate
          fugit? Praesentium, sint.
        </p>

        <h3>Visão</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          rerum libero minus eveniet pariatur incidunt voluptatibus laudantium
          laboriosam nihil, iure, ad quaerat sint et velit magnam cupiditate
          fugit? Praesentium, sint.
        </p>

        <h3>Valores</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          rerum libero minus eveniet pariatur incidunt voluptatibus laudantium
          laboriosam nihil, iure, ad quaerat sint et velit magnam cupiditate
          fugit? Praesentium, sint.
        </p>
      </div>
    </section>
  );
};
export default Sobre;
