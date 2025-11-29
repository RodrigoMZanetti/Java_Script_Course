function validarSenha() {
  const senha = document.getElementById("senhaTexto").value;
  const resultado = document.getElementById("textofinal");

  if (!senha) {
    resultado.textContent = "Digite uma senha antes!";
    return;
  } else if (senha.length < 8) {
    resultado.textContent = "A senha deve ter pelo menos 8 caracteres.";
    return;
  }

  const temNumero = /\d/.test(senha);
  const temMaiuscula = /[A-Z]/.test(senha);
  const temSimbolo = /[!@#$%^&*]/.test(senha);

  if (temNumero && temMaiuscula && temSimbolo) {
    resultado.textContent = "Senha forte! Ótimo trabalho.";
  } else {
    resultado.textContent =
      "A senha precisa ter número, letra maiúscula e símbolo.";
  }
}
