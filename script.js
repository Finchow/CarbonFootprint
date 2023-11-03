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
    statWriter(clientUsage, output);
  }
}

function monthlySwitch() {
  function changeText(period1, period2) {
    documentWriter(
      "top-text",
      `Enter your estimated ${period1} consumption for electricity (Kwh)`
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

function peopleCalculator() {
  if (clientUsage < 1800) {
    return "1 to 2";
  } else if (clientUsage < 3200) {
    return "2 to 3";
  } else if (clientUsage < 4100 || clientUsage > 4100) {
    return "4 to 5";
  }
}

function houseCalculator() {
  if (clientUsage < 2600) {
    return "Mid terrace";
  } else if (clientUsage < 3200) {
    return "Flat";
  } else if (clientUsage < 3500) {
    return "End terrace";
  } else if (clientUsage < 3800) {
    return "Semi detached or Bungalow";
  } else if (clientUsage < 4000 || clientUsage > 4000) {
    return "Detached house";
  }
}

function statWriter(clientUsage, totalCo2) {
  documentWriter("usage", `Your EAC is ${clientUsage} kWh`);
  documentWriter(
    "totalOutput",
    `CO2 output from electricity is: ${totalCo2} Kg per year.`
  );
  documentWriter(
    "people",
    `You are estimated to have ${peopleCalculator()} people in your home.`
  );
  documentWriter("house", `You are estimated to live in ${houseCalculator()}.`);
  documentWriter(
    "flights",
    `Your electricity emissions are equivalent to ${Math.round(
      totalCo2 / 90
    )} hours of flight.`
  );
  documentWriter(
    "miles",
    `Your CO2 output equivalent to driving a petrol car for ${Math.round(
      totalCo2 / 0.4
    )} miles.`
  );
}

function averageWriter() {}
