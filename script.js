const emissions = 0.207074288590604;
var monthly = false;

function clickHandler(monthly) {
  clientUsage = document.getElementById("input").value;
  output = calcCO2(clientUsage, emissions);
  alert(`Your carbon output is: ${Math.round(output * 100) / 100} Kg per year`);
}

function monthlySwitch() {
  function changeText(period) {
    document.getElementById(
      "top-text"
    ).textContent = `Enter your estimated ${period} consumption (Kwh)`;
    document.getElementById(
      "monthly-text"
    ).textContent = `Switch to ${period} consumption`;
  }
  monthly = !monthly;
  switch (monthly) {
    case true:
      changeText("monthly");
      break;
    case false:
      changeText("annual");
      break;
  }
}

function eraseInput() {
  document.getElementById("input").value = "";
}

function calcCO2(usage, emissions) {
  return usage * (0.85 * emissions);
}
