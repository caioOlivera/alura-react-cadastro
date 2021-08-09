import "./App.css";
import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import "fontsource-roboto";
import { validarCPF, validarSenha } from "./models/cadastro";
import { Container, Typography } from "@material-ui/core";
import validacoesCadastro from "./contexts/ValidacoesCadastro";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" align="center" componen="h1">
          Formulario de Cadastro
        </Typography>
        <validacoesCadastro.Provider
          value={{ cpf: validarCPF, senha: validarSenha }}
        >
          <FormularioCadastro aoEnviar={aoEnviarForm} />
        </validacoesCadastro.Provider>
      </Container>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}

export default App;
