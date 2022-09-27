function checkForm() {
	const name = document.getElementById("name")
	const email = document.getElementById("email")
	const msg = document.getElementById("msg")

	if (
		name.value.length != 0 &&
		email.value.length != 0 &&
		msg.value.length != 0
	) {
		alert("Form Send")
	} else {
		name.value.length == 0
			? (name.style.borderColor = "red")
			: (name.style.borderColor = "black")

		email.value.length == 0
			? (email.style.borderColor = "red")
			: (email.style.borderColor = "black")

		msg.value.length == 0
			? (msg.style.borderColor = "red")
			: (msg.style.borderColor = "black")
	}
}
