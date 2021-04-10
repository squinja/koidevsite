// Navbar shrink effect

function headerShrink() {

  let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

  window.addEventListener(
    "scroll",
    function () {

      let st = window.pageYOffset || document.documentElement.scrollTop;

      let scrollTopDiff = st - lastScrollTop;
      scrollTopDiff = Math.abs(scrollTopDiff);

      console.log(scrollTopDiff);

      let w = window.innerWidth;

      if (st > lastScrollTop && w > 450) {
        document.querySelector('nav').style.top = "-150px";

        
      } else {
        document.querySelector('nav').style.top = "0";
        
        
      }
      
      lastScrollTop = st <= 0 ? 0 : st;
    },
    false
  );
}

headerShrink();


// Header image zoom in effect

function lunaZoom() {

  let lastScrollTop = 0;

  const headerTop = document.getElementById('place').clientHeight;

  window.addEventListener(
    "scroll", function () {
      let st = window.pageYOffset || document.documentElement.scrollTop;
      let x = 0;

      if (st > headerTop) {
        scrollPastHeader = true;
      } else if (st < headerTop) {
        scrollPastHeader = false;
      }

      if (st > lastScrollTop && !scrollPastHeader) {
        // Luna zoom in effect 
        $('.box').addClass('on');
      } else if (st > lastScrollTop && scrollPastHeader) {
        x = 0;
      } else if (st < lastScrollTop && !scrollPastHeader) {
        x = 0; 
      } else if (st < lastScrollTop && scrollPastHeader) {
        // Luna zoom out effect 
        $('.box').removeClass('on'); 
      };

      lastScrollTop = st <= 0 ? 0 : st;
    },
    false
  );
}

lunaZoom();



// Activate Suitor Show Up
let check = false;

function suitorScroll() {

  const nemo = document.getElementById('nemo');
  const zane = document.getElementById('zane');
  const petra = document.getElementById('petra');
  const stercus = document.getElementById('stercus');
  const ilis = document.getElementById('ilis');
  const heis = document.getElementById('heis');
  const elina = document.getElementById('elina');
  const tom = document.getElementById('tom');

  window.addEventListener(

    "scroll", function () {

      const scrollToSuitor = document.getElementById('section-suitors-tag').getBoundingClientRect().top - 250;

      if (scrollToSuitor <= 0 && check == false) {
        // console.log('scrolled past header meow');
        nemo.style.transform = "translateX(0)";
        zane.style.transform = "translateX(0)";
        petra.style.transform = "translateX(0)";
        stercus.style.transform = "translateX(0)";
        ilis.style.transform = "translateX(0)";
        heis.style.transform = "translateX(0)";
        tom.style.transform = "translateX(0)";
        elina.style.transform = "translateX(0)";

        check = true;
        
      } else {
        return;
      };
        
      }
      );
    }
  


suitorScroll();


// Image Slideshow - Technical section

let slideIndex = 1;


// Next/previous controls
const plusSlides = (n) => {showSlides(slideIndex += n)}

// Thumbnail image controls
currentSlide = (n) => { showSlides(slideIndex = n)}

const showSlides = (n) => {

  let i;

  const slides = document.getElementsByClassName('technical-img');
  const dots = document.getElementsByClassName('dot');

  if(n > slides.length) {slideIndex = 1};

  if (n < 1) {slideIndex = slides.length};

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }

  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';

  
}

showSlides(slideIndex);


// const glitchLag = () => {
//   let images = document.getElementsByClassName("item1");
//   const imagesArray = [...document.getElementsByClassName("item1")];

//   window.addEventListener("scroll", function () {
//     imagesArray.forEach((img, i) => {
//       let y = imagesArray[i].getBoundingClientRect().top;
//       let x = imagesArray[i].getBoundingClientRect().left;
//       // prettier-ignore
//       console.log(imagesArray[i]);

//         imagesArray[i].insertAdjacentHTML(h2);
//         console.log();
        
//         // 'beforebegin', '<div style="position: absolute; z-Index: 30;background-image: url("../img/cit.png")";></div>'


      
//       // document.write(
//       //   '<div id="obj' +
//       //     i +
//       //     '" style="position: absolute; z-Index: 30;"><img src="' +
//       //     imagesArray[i].style.backgroundmage +
//       //     '"></div>'
//       // );
//     });
//   });
// };

// Scroll horizontal dilation effect
const sections = document.querySelectorAll(".section-landing__container--item");

let currentPos = window.pageYOffset;

const update = () => {
  const newPos = window.pageYOffset;
  const diff = newPos - currentPos;
  const speed = diff * 0.65;

  sections.forEach((sect) => (sect.style.transform = `skewY(${speed}deg)`));

  currentPos = newPos;

  requestAnimationFrame(update);
};

update();














// Scroll horizontal dilation effect

// Navbar shrink - old, only relying on position
// $(document).scroll(function () {
//   headerShrink();
// });

// console.log($(document).scrollTop());

// if ($(document).scrollTop() > 150) {
//   $(".nav").addClass("navbar--shrink");
//   $(".nav__container").addClass("navbar--shrink__container");
//   $(".nav__title").addClass("navbar--shrink__title");
//   $(".nav__logo").addClass("navbar--shrink__logo");
//   $(".nav__items").addClass("navbar--shrink__items");
//   $(".nav__item").addClass("navbar--shrink__item");
// } else {
//   $(".nav").removeClass("navbar--shrink");
//   $(".nav__container").removeClass("navbar--shrink__container");
//   $(".nav__title").removeClass("navbar--shrink__title");
//   $(".nav__logo").removeClass("navbar--shrink__logo");
//   $(".nav__items").removeClass("navbar--shrink__items");
//   $(".nav__item").removeClass("navbar--shrink__item");
//   }
// }
