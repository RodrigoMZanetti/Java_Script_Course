function concatenar() {
  var pala1 = document.getElementById("palavra1");
  var pala2 = document.querySelector("#palavra2");
  var pala3 = document.getElementById("palavra3");

  var p1 = pala1.value;
  var p2 = pala2.value;
  var p3 = pala3.value;

  var frase = document.getElementById("resultado");

  frase.innerHTML = `${p1} ${p2} ${p3}`;
}
