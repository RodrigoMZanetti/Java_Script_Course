function somar() {
  var txt1 = document.getElementById("txtn1");
  var txt2 = document.getElementById("txtn2");
  var txt3 = document.getElementById("txtn3");

  var n1 = Number(txt1.value);
  var n2 = Number(txt2.value);
  var n3 = Number(txt3.value);

  var s = n1 + n2 + n3;
  var res = document.getElementById("res");
  res.innerHTML = s;
}
