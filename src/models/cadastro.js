function validarCPF(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, texto: "CPF deve conter 11 digitos." };
  } else {
    return { valido: true, texto: "" };
  }
}

function validarSenha(senha) {
  if (senha.length < 4) {
    return { valido: false, texto: "Senha nao e valida" };
  } else {
    return { valido: true, texto: "" };
  }
}

export { validarCPF, validarSenha };
