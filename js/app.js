burgerBtn.onclick = () =>
	!burgerMenu.classList.contains("active")
		? burgerMenu.classList.add("active")
		: burgerMenu.classList.remove("active");

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

const galleryThumbs = new Swiper(".gallery-bottom", {
	spaceBetween: 10,
	slidesPerView: 5,
	freeMode: true,
	loop: true,
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
});
const galleryTop = new Swiper(".gallery-top", {
	slidesPerView: 1,
	centeredSlides: true,
	loop: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	thumbs: {
		swiper: galleryThumbs,
	},
});
