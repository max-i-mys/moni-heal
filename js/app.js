burgerBtn.onclick = function () {
	if (!burgerMenu.classList.contains("active")) {
		burgerMenu.classList.add("active");
	} else {
		burgerMenu.classList.remove("active");
	}
};

window.onscroll = function showHeader() {
	let header = document.querySelector("#burgerMenu");
	if (window.pageYOffset > 100) {
		burgerMenu.classList.remove("active");
	}
	if (window.pageYOffset > 300) {
		burgerMenu.classList.add("active-fixed");
	} else {
		burgerMenu.classList.remove("active-fixed");
	}
};

contSubBtn.onclick = () => contSubMenu.classList.add("active");
consSubClose.onclick = () => contSubMenu.classList.remove("active");
