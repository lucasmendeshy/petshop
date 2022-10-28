import { TextField, Button } from "@mui/material";
import Caixa from "../../Components/Caixa/Caixa";
import estilos from "./Contato.module.css";
const Contato = () => {
  return (
    <section>
      <h2 className={estilos.titulo_secao}>Fale Conosco</h2>

      <Caixa>
        <form className={estilos.formulario} method="post">
          <div>
            <TextField
              label="Nome:"
              variant="outlined"
              fullWidth
              required
              helperText="Você deve digitar um nome"
            />
          </div>

          <div>
            <TextField
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
            <Button type="submit" variant="contained">
              Enviar mensagem
            </Button>
          </div>
        </form>
      </Caixa>
    </section>
  );
};
export default Contato;
