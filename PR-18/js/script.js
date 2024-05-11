// Бургер

function toggleMenu() {
	const menu = document.getElementById("menu");
	menu.classList.toggle("show");
}

// Карусель

let slideIndex = 0;
let timer;

showSlides();

function showSlides() {
	let i;
	const slides = document.querySelectorAll('.carousel-item');
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	if (slideIndex >= slides.length) { slideIndex = 0 }
	if (slideIndex < 0) { slideIndex = slides.length - 1 }
	slides[slideIndex].style.display = 'block';

	timer = setTimeout(function () {
		slideIndex++;
		showSlides();
	}, 2000);
}

document.querySelector('.carousel-control-next').addEventListener('click', function () {
	clearTimeout(timer);
	slideIndex++;
	showSlides();
});

document.querySelector('.carousel-control-prev').addEventListener('click', function () {
	clearTimeout(timer);
	slideIndex--;
	showSlides();
});
