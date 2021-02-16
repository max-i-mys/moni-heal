burgerBtn.onclick = () =>
	!burgerMenu.classList.contains("active")
		? burgerMenu.classList.add("active")
		: burgerMenu.classList.remove("active");

// window.onscroll = function showHeader() {
// 	let header = document.querySelector("#burgerMenu");
// 	if (window.pageYOffset > 100) {
// 		burgerMenu.classList.remove("active");
// 	}
// 	if (window.pageYOffset > 300) {
// 		burgerMenu.classList.add("active-fixed");
// 	} else {
// 		burgerMenu.classList.remove("active-fixed");
// 	}
// };

contSubBtn.onclick = () => contSubMenu.classList.add("active");
consSubClose.onclick = () => contSubMenu.classList.remove("active");

/*================= photo__slider start =================*/
const galleryThumbs = new Swiper(".gallery-bottom", {
	spaceBetween: 31,
	slidesPerView: 5,
	freeMode: true,
	loop: true,
	navigation: {
		nextEl: ".photoBtn-next-min",
		prevEl: ".photoBtn-prev-min",
	},
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
});
const galleryTop = new Swiper(".gallery-top", {
	slidesPerView: 1,
	centeredSlides: true,
	loop: true,
	navigation: {
		nextEl: ".photoBtn-next-max",
		prevEl: ".photoBtn-prev-max",
	},
	thumbs: {
		swiper: galleryThumbs,
	},
});
/*================= photo__slider end =================*/
/*================= services slider start =================*/
const servises = new Swiper(".services__slider-container", {
	slidesPerView: 4,
	spaceBetween: 30,
	loop: true,
	navigation: {
		nextEl: ".servicesBtn-next",
		prevEl: ".servicesBtn-prev",
	},
	autoplay: {
		delay: 5000,
	},
});
/*================= services slider end =================*/
/*================= doctors slider start =================*/
const doctors = new Swiper(".doctors__slider-container", {
	slidesPerView: 4,
	spaceBetween: 30,
	loop: true,
	navigation: {
		nextEl: ".doctorsBtn-next",
		prevEl: ".doctorsBtn-prev",
	},
	// autoplay: {
	// 	delay: 5000,
	// },
});
/*================= doctors slider end =================*/
