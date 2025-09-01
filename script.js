const billInput = document.getElementById("billAmount");
const tipInput = document.getElementById("tipPercent");
const personInput = document.getElementById("personCount");

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
	tipPercent.value = 5;
	getTip();
});

tenPercent.addEventListener("click", function() {
	tipPercent.value = 10;
	getTip();
});

fifteenPercent.addEventListener("click", function() {
	tipPercent.value = 15;
	getTip();
});