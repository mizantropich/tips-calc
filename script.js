const billInput = document.getElementById("billAmount");
const tipInput = document.getElementById("tipPercent");
const personInput = document.getElementById("personCount");

document.addEventListener("DOMContentLoaded", function() {
	if (localStorage.getItem("bill")) {
		billInput.value = localStorage.getItem("bill");
	}
	if (localStorage.getItem("tip")) {
		tipInput.value = localStorage.getItem("tip");
	}
	if (localStorage.getItem("person")) {
		personInput.value = localStorage.getItem("person");
	}

	if (billInput.value || tipInput.value) {
		getTip();
	}
});

billInput.addEventListener("input", function() {
	localStorage.setItem("bill", billInput.value);
});

tipInput.addEventListener("input", function() {
	localStorage.setItem("tip", tipInput.value);
});

personInput.addEventListener("input", function() {
	localStorage.setItem("person", personInput.value);
});

const getTip = function getTip() {
	let bill = billInput.value;
	let tipPercent = tipInput.value;
	let personCount = personInput.value;

	bill = parseInt(bill);
	tipPercent = parseInt(tipPercent);
	personCount = parseInt(personCount);

	errorSpan.style.display = "none";
	if (isNaN(bill) || isNaN(tipPercent) || isNaN(personCount)) {
		errorSpan.textContent = "Введите данные";
		errorSpan.style.display = "";
		return;
	}
	if ((bill < 0) || (tipPercent) < 0 || (personCount) < 0) {
		errorSpan.textContent = "Введите неотрицательные числа";
		errorSpan.style.display = "";
		return;
	}

	tipPercent /= 100;
	
	totalAmount.textContent = (bill + bill * tipPercent).toFixed(2);
	perPerson.textContent = ((bill + bill * tipPercent) / personCount).toFixed(2);
}

checkButton.addEventListener("click", getTip);

fivePercent.addEventListener("click", function() {
	tipInput.value = 5;
	localStorage.setItem("tip", 5);
	getTip();
});

tenPercent.addEventListener("click", function() {
	tipInput.value = 10;
	localStorage.setItem("tip", 10);
	getTip();
});

fifteenPercent.addEventListener("click", function() {
	tipInput.value = 15;
	localStorage.setItem("tip", 15);
	getTip();
});
