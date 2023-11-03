const Emissions = 0.207074288590604;
var monthly = false;
var business = false;

function documentWriter(id, text) {
  document.getElementById(id).textContent = text;
}

function clickHandler() {
  clientUsage = document.getElementById("input").value;
  if (monthly === true) {
    clientUsage *= 12;
  }
  output = Math.round(calcCO2(clientUsage, Emissions) * 100) / 100;
  if (clientUsage > 0) {
    statWriter(output);
  }
}

function monthlySwitch() {
  function changeText(period1, period2) {
    documentWriter(
      "top-text",
      `Enter your estimated ${period1} consumption (Kwh)`
    );
    documentWriter("monthly-text", `Switch to ${period2} consumption`);
  }
  monthly = !monthly;
  if (monthly) {
    changeText("monthly", "annual");
  } else {
    changeText("annual", "monthly");
  }
  clickHandler();
}

function businessSwitch() {
  function changeText(period1, period2) {
    documentWriter("personal", `Your ${period1} Statistics:`);
    documentWriter("average", `Average UK ${period2} Consumption:`);
  }
  business = !business;
  if (business) {
    changeText("Business", "Business");
  } else {
    changeText("", "Citizens");
  }
  clickHandler();
}

function eraseInput() {
  document.getElementById("input").value = "";
}

function calcCO2(usage, emissions) {
  return usage * (0.85 * emissions);
}

function statWriter(totalCo2) {
  documentWriter(
    "TotalOutput",
    `Your carbon output from electricity is: ${totalCo2} Kg per year.`
  );
  documentWriter(
    "Flights",
    `Your electricity emissions are equivalent to ${Math.round(
      totalCo2 / 90
    )} hours of flight.`
  );
}
