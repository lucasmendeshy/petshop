import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Cabecalho from "./Components/Cabecalho/Cabecalho";
import Home from "./pages/Home/Home";
import Produtos from "./pages/Produtos/Produtos";
import Sobre from "./pages/Sobre/Sobre";
import Contato from "./pages/Contato/Contato";
import Pagina404 from "./pages/404/Pagina404";
import Post from "./pages/Post/Post";
import Categoria from "./pages/Categoria/Categoria";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Cabecalho />

        <main className="limitador">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            {/* Rota de redirecionamento (se o usuário cair em /posts), ele será redirecionado à rota raiz (onde está o Home) */}
            <Route exact path="/posts">
              <Redirect to="/" />
            </Route>

            <Route path="/posts/:id">
              <Post />
            </Route>

            {/* Estamos usando o :nome em vez de :id com o propósito de ter uma URL amigável (slug). */}
            <Route exact path="/categoria/:nome">
              <Categoria />
            </Route>

            <Route path="/produtos">
              <Produtos />
            </Route>

            <Route path="/sobre">
              <Sobre />
            </Route>

            <Route path="/contato">
              <Contato />
            </Route>

            <Route path="*">
              <Pagina404 />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </>
  );
};

export default App;
