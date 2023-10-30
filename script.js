const emissions = 0.207074288590604;

function clickHandler() {
  clientUsage = document.getElementById(input).value;
  output = calcCO2(clientUsage, emissions);
  alert(`Your carbon output is: ${Math.round(output * 100) / 100} Kg per year`);
}

function eraseInput() {
  document.getElementById("input").value = "";
}

function calcCO2(usage, emissions) {
  return usage * (0.85 * emissions);
}
