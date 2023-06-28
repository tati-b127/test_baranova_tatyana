document.addEventListener("DOMContentLoaded", () => {
	const callbackForm = document.getElementById("form");
	console.log(callbackForm);
	if (callbackForm) {
		const validation = new JustValidate(callbackForm, {
			errorFieldCssClass: "is-invalid",
		});
		console.log(validation);
		validation
			.addField("#first-name", [
				{
					rule: "required",
					errorMessage: false,
				},
			])
			.addField("#last-name", [
				{
					rule: "required",
				},
			])
			.addField("input[type=email]", [
				{
					rule: "required",
				},
				{
					rule: "email",
				},
			])
			.addField("#password", [
				{
					rule: "required",
				},
				{
					rule: "password",
				},
			])
			.addField("#confirmpassword", [
				{
					rule: "required",
				},
				{
					rule: "password",
				},
				{
					validator: (value, fields) => {
						if (fields["#password"] && fields["#password"].elem) {
							const repeatPasswordValue = fields["#password"].elem.value;

							return value === repeatPasswordValue;
						}

						return true;
					},
					errorMessage: "Passwords should be the same",
				},
			]);
	}
	// window.validation = validation;
});
