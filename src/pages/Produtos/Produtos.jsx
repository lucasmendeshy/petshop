import estilos from "./Produtos.module.css";
const Produtos = () => {
  return (
    <section>
      <h2 className={estilos.titulo_secao}>Conheças nossos produtos</h2>

      <div id="produtos" className={estilos.produtos}>
        <article>
          <h3>Produto 1</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            rerum libero minus eveniet pariatur incidunt voluptatibus laudantium
            laboriosam nihil, iure, ad quaerat sint et velit magnam cupiditate
            fugit? Praesentium, sint.
          </p>
        </article>

        <article>
          <h3>Produto 2</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            rerum libero minus eveniet pariatur incidunt voluptatibus laudantium
            laboriosam nihil, iure, ad quaerat sint et velit magnam cupiditate
            fugit? Praesentium, sint.
          </p>
        </article>

        <article>
          <h3>Produto 3</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            rerum libero minus eveniet pariatur incidunt voluptatibus laudantium
            laboriosam nihil, iure, ad quaerat sint et velit magnam cupiditate
            fugit? Praesentium, sint.
          </p>
        </article>
      </div>
    </section>
  );
};
export default Produtos;
