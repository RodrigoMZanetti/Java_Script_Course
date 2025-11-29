function calcular_media() {
  var txtn1 = document.getElementById("textonota1");
  var txtn2 = document.querySelector("#textonota2");

  var nota1 = Number(txtn1.value);
  var nota2 = Number(txtn2.value);

  var media = (nota1 + nota2) / 2;

  var mediafinal = document.getElementById("resultado");
  if (media >= 7) {
    mediafinal.innerHTML = `A sua média final, com a primeira nota ${nota1} e a segunda nota ${nota2} é ${media}. Portanto, APROVADO`;
  } else if (media >= 5 && media < 7) {
    mediafinal.innerHTML = `A sua média final, com a primeira nota ${nota1} e a segunda nota ${nota2} é ${media}. Portanto, RECUPERAÇÃO`;
  } else {
    mediafinal.innerHTML = `A sua média final, com a primeira nota ${nota1} e a segunda nota ${nota2} é ${media}. Portanto, REPROVADO`;
  }
}
