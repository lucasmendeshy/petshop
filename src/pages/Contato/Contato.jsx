import serverApi from "../../api/servidor-api";
import { TextField, Button } from "@mui/material";
import { useState } from "react";
import Caixa from "../../Components/Caixa/Caixa";
import estilos from "./Contato.module.css";
const Contato = () => {
  /* Eventos/Funções para captura da digitação nos campos */
  const inputNome = (event) => {
    setNome(event.target.value); // Captura da digitação
  };

  const inputEmail = (event) => {
    setEmail(event.target.value); // Captura da digitação
  };

  const inputMensagem = (event) => {
    setMensagem(event.target.value); // Captura da digitação
  };

  /* Hooks useState para manipular os estados dos dados do componente */
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const enviarContato = async (event) => {
    event.preventDefault();

    const opcoes = {
      method: "POST",
      body: JSON.stringify({ nome, email, mensagem }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    /* Script para envio dos dados a API */
    try {
      await fetch(`${serverApi}/contatos`, opcoes);
      alert("Dados enviados!");
    } catch (error) {
      console.log("Deu ruim:" + error.message);
    }
    console.log(nome, email, mensagem);
  };

  // let desabilitado = nome ==="" || email ==="" || mensagem ==="";

  // "Toggle" do botão: caso qualquer uma das variáveis seja undefined, desabilitado se manterá true e com isso o botão ficará desabilitado. Quando toda deixarem de ser undefined, desabilitado se tornará false e com isso o botão será habilitado.

  let desabilitado = !nome || !email || !mensagem;
  return (
    <section>
      <h2 className={estilos.titulo_secao}>Fale Conosco</h2>

      <Caixa>
        <form
          onSubmit={enviarContato}
          className={estilos.formulario}
          method="post"
        >
          <div>
            <TextField
              onChange={inputNome} // Captura da digitação
              label="Nome:"
              variant="outlined"
              fullWidth
              required
              helperText="Você deve digitar um nome"
            />
          </div>

          <div>
            <TextField
              onChange={inputEmail}
              type="email"
              label="email"
              variant="outlined"
              fullWidth
              required
              helperText="Informe um e-mail para contato"
            />
          </div>

          <div>
            <TextField
              onChange={inputMensagem}
              type="email"
              label="Mensagem"
              variant="outlined"
              fullWidth
              required
              helperText="Fale o que você quiser"
              multiline
              rows={6}
            />
          </div>

          <div>
            <Button type="submit" variant="contained" disabled={desabilitado}>
              Enviar mensagem
            </Button>
          </div>
        </form>
      </Caixa>
    </section>
  );
};
export default Contato;
