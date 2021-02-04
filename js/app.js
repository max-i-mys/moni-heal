burgerBtn.onclick = function () {
	if (!burgerMenu.classList.contains("active")) {
		burgerMenu.classList.add("active");
	} else {
		burgerMenu.classList.remove("active");
	}
};
