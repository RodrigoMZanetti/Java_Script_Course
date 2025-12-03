function calculate() {
  const textone = document.getElementById("textnumberone");
  const texttwo = document.getElementById("textnumbertwo");
  const textthree = document.getElementById("textstep");
  const finalresult = document.getElementById("result");
  const mesage = document.getElementById("mensagetxt");

  let numberone = Number(textone.value);
  let numbertwo = Number(texttwo.value);
  let stepnumber = Number(textthree.value);

  if (stepnumber <= 0) {
    mesage.innerHTML = "Invalid step, considering step 1.";
    stepnumber = 1;
  }

  if (numberone > numbertwo) {
    while (numberone >= numbertwo) {
      finalresult.innerHTML += `${numberone} `;
      numberone -= stepnumber;
    }
  } else if (numberone < numbertwo) {
    for (let i = numberone; i <= numbertwo; i += stepnumber) {
      finalresult.innerHTML += `${i} `;
    }
  } else {
    finalresult.innerHTML = `The numbers are equal`;
  }
}
