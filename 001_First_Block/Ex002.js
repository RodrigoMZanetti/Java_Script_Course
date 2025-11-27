function media() {
  var texto1 = document.getElementById("textonumero1");
  var texto2 = document.getElementById("textonumero2");

  var n1 = Number(texto1.value);
  var n2 = Number(texto2.value);

  var mediasimples = (n1 + n2) / 2;

  var resultadofinal = document.getElementById("resultado");

  resultadofinal.innerHTML = `A média entre ${n1} e ${n2} é igual a ${mediasimples}`;
}
