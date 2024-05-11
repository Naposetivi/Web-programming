function calculate(operatia) {
	var op1 = parseFloat(document.getElementById("op1").value);
	var op2 = parseFloat(document.getElementById("op2").value);
	var result;
	if (!op1 && (operatia == "log-button" || operatia == "sin-button" || operatia == "tan-button")) {
		result = "You must enter first operand(";
		op2 = 0;
	} else if (operatia == "log-button" || operatia == "sin-button" || operatia == "tan-button") {
		op2 = 0;
	}
	else if (!op1 || !op2) {
		result = "Type something!";
	} else {
		switch (operatia) {
			case "add-button":
				result = op1 + op2;
				break;
			case "sub-button":
				result = op1 - op2;
				break;
			case "mul-button":
				result = op1 * op2;
				break;
			case "div-button":
				if (op2 !== 0) {
					result = op1 / op2;
				} else {
					result = "operand 2 is equal to 0";
				}
				break;
			case "log-button":
				if (op1 > 0) {
					Dovidka("log");
					result = Math.log(op1);
				} else {
					result = "operand 1 is less or equal to 0";
				}
				break;
			case "sin-button":
				Dovidka("sin");
				result = Math.sin(op1);
				break;
			case "tan-button":
				Dovidka("tan");
				result = Math.tan(op1);
				break;
			default:
				result = "Something went wrong... Let`s drink tea!";
		}
	}

	document.getElementById("res").innerText = "Result: " + result;
}

function Dovidka(operatia) {
	fetch("Data/json/" + operatia + ".json")
		.then(response => response.json())
		.then(data => {
			document.getElementById("content").innerHTML = `
					<h3>${data.name}</h3>
					<img src="Data/images/${data.image_name}">
					<p>${data.description}</p>
			  `;
		})
		.catch(error => console.error('Error:', error));
}