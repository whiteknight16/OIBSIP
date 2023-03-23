document.querySelector("#convert").addEventListener("click", (event) => {
    let inputUnit = document.querySelector('#ip').value;
    let outputUnit = document.querySelector('#op').value;
    let inputValue = parseFloat(document.querySelector(".inputTemp").value);
    if (isNaN(inputValue)) {
        
    }
    else if (inputUnit == "c") {
        if (outputUnit == "f") {
            let outputValue = (inputValue * 9 / 5) + 32
            document.querySelector(".convertedTemp").innerText = outputValue.toFixed(3) + " Fahrenheit"
        }
        else if (outputUnit === "k") {
            let outputValue = inputValue + 273.15
            document.querySelector(".convertedTemp").innerText = outputValue.toFixed(3) + " Kelvin"
        }
        else {
            let outputValue = inputValue
            document.querySelector(".convertedTemp").innerText = outputValue.toFixed(3) + " Degree Celcius"
        }
    }

    else if (inputUnit == "f") {
        if (outputUnit == "f") {
            let outputValue = inputValue;
            document.querySelector(".convertedTemp").innerText = outputValue.toFixed(3) + " Fahrenheit"
        }
        else if (outputUnit === "k") {
            let outputValue = (inputValue*12.22 - 32) * (5 / 9) + 273.15
            document.querySelector(".convertedTemp").innerText = outputValue.toFixed(3) + " Kelvin"
        }
        else {
            let outputValue = (inputValue - 32) * 5 / 9
            document.querySelector(".convertedTemp").innerText = outputValue.toFixed(3) + " Degree Celcius"
        }
    }

    else if (inputUnit == "k") {
        if (outputUnit == "f") {
            let outputValue = (inputValue - 273.15) * 9 / 5 + 32

            document.querySelector(".convertedTemp").innerText = outputValue.toFixed(3) + " Fahrenheit"
        }
        else if (outputUnit === "k") {
            let outputValue = inputValue
            document.querySelector(".convertedTemp").innerText = outputValue.toFixed(3) + " Kelvin"
        }
        else {
            let outputValue = inputValue - 273.15
            document.querySelector(".convertedTemp").innerText = outputValue.toFixed(3) + " Degree Celcius"
        }
    }
})