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
// console.log(months);
for (let i = 0; i < months.length; i++) {
	const optionMonth = document.createElement("option");
	// console.log(months[i]);
	optionMonth.value = months[i];
	optionMonth.innerHTML = months[i];
	selectMonth.appendChild(optionMonth);
}
// Create DayList
const selectDay = document.getElementById("day");
const daysOfMonth = 31;
for (let day = 1; day <= daysOfMonth; day++) {
	const optionDay = document.createElement("option");
	// console.log(day);
	optionDay.value = day;
	optionDay.innerHTML = day;
	selectDay.appendChild(optionDay);
}
