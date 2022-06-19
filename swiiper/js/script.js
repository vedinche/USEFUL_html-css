const swiper = new Swiper(".swiper-container", {
	slidesPerView: 1,
	loop: true,
	speed: 600,
	spaceBetween: 50,

	// пагинация
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},

	// навигация
	// navigation: {
	//   nextEl: '.swiper-button-next',
	//   prevEl: '.swiper-button-prev',
	// },

	autoplay: {
		delay: 3000,
	},
});
