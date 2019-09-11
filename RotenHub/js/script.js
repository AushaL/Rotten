var slides = document.querySelectorAll('.main-slider .slider-item');
var currentSlide = 0;
var sliderInterval = setInterval(nextSlide,3000);
var playing = true;

function nextSlide() {
	goToSlide(currentSlide+1);
}

function previousSlide() {
	goToSlide(currentSlide-1);
}

function goToSlide(n) {
	slides[currentSlide].className = 'slider-item';
	currentSlide = (n+slides.length)%slides.length;
	slides[currentSlide].className = 'slider-item showing-slider'; 
}

// function pauseSlideshow(){
//     playing = false;
//     clearInterval(slideInterval);
// }

// function playSlideshow(){
//     playing = true;
//     slideInterval = setInterval(nextSlide,3000);
// }

// var next = document.getElementById('button-next');
// var previous =  document.getElementById('button-prev');

var regLink = document.querySelector('.live-registration');
var burgerLink = document.querySelector('.burger-button');
var menuLink = document.querySelector('.site-navigation');

burgerLink.addEventListener('click', function(evt) {
	evt.preventDefault();
	console.log('Скушал');
	menuLink.classList.toggle('site-navigation-close');
});

var modal = document.querySelector('.commercial-modal');

regLink.addEventListener('click', function(evt) {
	evt.preventDefault();
	console.log('Нажал');
	modal.classList.toggle('modal-show');
});

var modalClose = document.querySelector('.close-button');

modalClose.addEventListener('click', function(evt) {
	evt.preventDefault();
	console.log('Закрыть окно');
	modal.classList.remove('modal-show');
})

var sliderNext = document.querySelector('.button-next');

sliderNext.addEventListener('click', function(evt) {
	evt.preventDefault();
	console.log('Вперед');
	goToSlide(currentSlide+1);
})

var sliderPrev = document.querySelector('.button-prev');

sliderPrev.addEventListener('click', function(evt) {
	evt.preventDefault();
	console.log('Назад');
	goToSlide(currentSlide-1);
})

