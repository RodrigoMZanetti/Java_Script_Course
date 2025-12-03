function check() {
  const textone = document.getElementById("txtnumberone");
  const texttwo = document.getElementById("txtnumbertwo");
  const textthree = document.getElementById("txtnumberthree");
  const textfour = document.getElementById("txtnumberfour");
  const textfive = document.getElementById("txtnumberfive");

  let numbersvalue = [
    textone.value,
    texttwo.value,
    textthree.value,
    textfour.value,
    textfive.value,
  ];
  for (let i = 0; i < numbersvalue.length; i++) {
    if (numbersvalue[i] === "") {
      alert(`Error: empty number! Enter a valid number!`);
      return;
    }
  }

  const finaloption = document.getElementById("txtfinaloption");

  const result = document.getElementById("txtresult");

  let numberone = Number(textone.value);
  let numbertwo = Number(texttwo.value);
  let numberthree = Number(textthree.value);
  let numberfour = Number(textfour.value);
  let numberfive = Number(textfive.value);
  let option = Number(finaloption.value);

  let arr = [numberone, numbertwo, numberthree, numberfour, numberfive];

  if (option === 1) {
    let sum = 0;
    for (let n of arr) {
      sum += n;
    }
    result.innerHTML = `The total is: ${sum}`;
  } else if (option === 2) {
    let sub = arr[0];
    for (let i = 1; i < arr.length; i++) {
      sub = sub - arr[i];
    }
    result.innerHTML = `The total is: ${sub}`;
  } else if (option === 3) {
    let evennumb = 0;
    let cont = 0;
    for (let n of arr) {
      if (n % 2 === 0) {
        evennumb += n;
        cont += 1;
      }
    }
    result.innerHTML = `There are ${cont} even numbers and the total sum is: ${evennumb}`;
  } else if (option === 4) {
    let oddnumb = 0;
    let cont = 0;
    for (let n of arr) {
      if (n % 2 !== 0) {
        oddnumb += n;
        cont += 1;
      }
    }
    result.innerHTML = `There are ${cont} odd numbers and the total sum is: ${oddnumb}`;
  } else if (option === 5) {
    let avernumber = 0;
    let sum = 0;
    for (let n of arr) {
      sum += n;
    }
    avernumber = sum / arr.length;
    result.innerHTML = `The average of the numbers is: ${avernumber}`;
  } else if (option === 6) {
    highestnumber = arr[0];
    for (let n of arr) {
      if (n > highestnumber) {
        highestnumber = n;
      }
    }
    result.innerHTML = `The highest number on the list is: ${highestnumber}`;
  } else if (option === 7) {
    lowestnumber = arr[0];
    for (let n of arr) {
      if (n < lowestnumber) {
        lowestnumber = n;
      }
    }
    result.innerHTML = `The lowest number on the list is: ${lowestnumber}`;
  }
}
