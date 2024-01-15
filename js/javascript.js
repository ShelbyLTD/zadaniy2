var openMenu = document.querySelector('.service');
var popupModal = document.querySelector('.modal');

openMenu.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log("Открыт!");
  popupModal.classList.toggle("modal-show");
})







let sliders = document.querySelectorAll('.slider-container');
// sliders - список всех элементов с классом class="slider"
// sliders[0] — первый элемент, sliders[1] — второй, sliders[i] — i-тый.

for (let i = 0; i < sliders.length; i++) {
  // Перебирает все, вызывает функцию для каждого.
  init_slider(sliders[i]);
}

function init_slider(slider) {
  // Значение slider: Очередной sliders[i], переданный при вызове функции.
  
  let slide = slider.querySelectorAll('.slide');
  // Вместо document.query... Получается список всех class="slide"
  // которые находятся где-то внутри текущего элемента slider.
  
  let prev = slider.querySelector('.prev-button');
  // Кнопка next внутри этого slider.
  
  let next = slider.querySelector('.next-button');
  // Кнопка next внутри этого slider.

  let i = 0;
  // Номер текущего "открытого" слайда.
  
  prev.addEventListener('click', function() {
    slide[i].classList.remove('block');
    // slide[i] - открытый слайд. Скрываем.
    
    i = (i - 1 + slide.length) % slide.length; // (*1)
    
    slide[i].classList.add('block');
    // slide[i] - следующий слайд. Показываем.
  });

  next.addEventListener('click', function() {
    slide[i].classList.remove('block');
    // slide[i] - открытый слайд. Скрываем.
    
    i = (i + 1) % slide.length; // (*1)
    
    slide[i].classList.add('block');
    // slide[i] - следующий слайд. Показываем.
  });  
}







// const prevButton = document.querySelector(".prev-button")
// const nextButton = document.querySelector(".next-button")
// const slides = document.querySelectorAll(".slide")

// let currentSlideIndex = 0;

// function showSlide() {
//   slides[currentSlideIndex].classList.add("block");
// }

// function hideSlide() {
//   slides[currentSlideIndex].classList.remove("block");
// }

// function nextSlide() {
//   hideSlide();
//   currentSlideIndex ++;
//   if(currentSlideIndex > slides.length - 1) {
//     currentSlideIndex = 0;
//   }
//   showSlide();
// }

// function prevSlide() {
//   hideSlide();
//   currentSlideIndex --;
//   if(currentSlideIndex < 0) {
//     currentSlideIndex = slides.length - 1;
//   }
//   showSlide();
// }

// prevButton.addEventListener("click", prevSlide);
// nextButton.addEventListener("click", nextSlide);














let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}




