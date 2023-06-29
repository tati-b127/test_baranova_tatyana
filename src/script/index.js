document.addEventListener("DOMContentLoaded", () => {
	//Create YearList

	const maxYear = new Date().getFullYear(),
		minYear = maxYear - 99,
		selectYear = document.getElementById("year");

	for (let i = minYear; i <= maxYear; i++) {
		const optionYear = document.createElement("option");
		optionYear.value = i;
		optionYear.innerHTML = i;
		selectYear.appendChild(optionYear);
	}
	// Create MonthList
	const selectMonth = document.getElementById("month");
	const months = [...Array(12).keys()].map((key) =>
		new Date(0, key).toLocaleString("en", { month: "long" })
	);
	for (let i = 0; i < months.length; i++) {
		const optionMonth = document.createElement("option");
		optionMonth.value = months[i];
		optionMonth.innerHTML = months[i];
		selectMonth.appendChild(optionMonth);
	}
	// Create DayList
	const selectDay = document.getElementById("day");
	const daysOfMonth = 31;
	for (let day = 1; day <= daysOfMonth; day++) {
		const optionDay = document.createElement("option");
		optionDay.value = day;
		optionDay.innerHTML = day;
		selectDay.appendChild(optionDay);
	}
	// Send form
	const formBtn = document.querySelector(".form__btn");
	const form = document.querySelector(".main__form");
	function animationHandler() {
		formBtn.classList.remove("form__btn_animation");
	}
	function submitForm() {
		const callback = document.querySelector(".main__callback");
		const errorList = [];
		const formInput = document.querySelectorAll(".valid");
		let total = 0;
		const successList = [];
		formInput.forEach((e) => {
			if (e.classList.contains("is-invalid")) {
				total = errorList.push(e);
				if (total > 0) {
					formBtn.classList.add("form__btn_animation");
					setTimeout(animationHandler, 300);
				}
			} else if (e.classList.contains("just-validate-success-field")) {
				let total2 = successList.push(e);
				if (total2 === formInput.length) {
					callback.classList.add("visible");
				}
			}
		});
	}
	form.addEventListener("submit", function () {
		setTimeout(submitForm, 100);
	});
});
