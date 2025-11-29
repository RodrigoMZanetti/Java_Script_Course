function multiplicar() {
  var texto1 = document.getElementById("textonumero1");
  var texto2 = document.getElementById("textonumero2");
  var texto3 = document.getElementById("textonumero3");
  var texto4 = document.getElementById("textonumero4");

  var n1 = Number(texto1.value);
  var n2 = Number(texto2.value);
  var n3 = Number(texto3.value);
  var n4 = Number(texto4.value);

  var mult = n1 * n2 * n3 * n4;
  var resul = document.getElementById("resultado");
  resul.innerHTML = `A multiplicação entre ${n1}, ${n2}, ${n3} e ${n4} tem como resultado ${mult}.`;
}
