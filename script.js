const billInput = document.getElementById("billAmount");
const tipInput = document.getElementById("tipPercent");

checkButton.addEventListener("click", function() {
	let bill = billInput.value;
	let tipPercent = tipInput.value;
	errorSpan.style.display = "none";

	if ((bill === "") || (tipPercent) === "") {
		errorSpan.textContent = "Введите данные";
		errorSpan.style.display = "";
		return;
	}
	if ((bill < 0) || (tipPercent) < 0) {
		errorSpan.textContent = "Введите неотрицательные числа";
		errorSpan.style.display = "";
		return;
	}

	tipPercent /= 100;

	totalAmount.textContent = (bill * tipPercent).toFixed(2);
});