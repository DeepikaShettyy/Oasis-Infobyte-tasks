function convertTemperature() {
    const input = document.getElementById("temperatureInput").value;
    const unit = document.getElementById("unitSelect").value;
    const resultDiv = document.getElementById("result");
  
    // Validate input is a number
    const temperature = parseFloat(input);
    if (isNaN(temperature)) {
      resultDiv.textContent = "Please enter a valid number for the temperature.";
      return;
    }
  
    let celsius, fahrenheit, kelvin;
  
    // Convert based on the selected unit
    if (unit === "Celsius") {
      celsius = temperature;
      fahrenheit = (temperature * 9/5) + 32;
      kelvin = temperature + 273.15;
    } else if (unit === "Fahrenheit") {
      celsius = (temperature - 32) * 5/9;
      fahrenheit = temperature;
      kelvin = celsius + 273.15;
    } else if (unit === "Kelvin") {
      celsius = temperature - 273.15;
      fahrenheit = (celsius * 9/5) + 32;
      kelvin = temperature;
    }
  
    // Display the result
    resultDiv.innerHTML = `
      <p>${temperature}° ${unit} is equivalent to:</p>
      <p>${celsius.toFixed(2)}° Celsius</p>
      <p>${fahrenheit.toFixed(2)}° Fahrenheit</p>
      <p>${kelvin.toFixed(2)}° Kelvin</p>
    `;
  }
  