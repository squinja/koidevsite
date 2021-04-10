// Navbar shrink effect

function headerShrink() {

    let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;;
    // clearTimeout();
  
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

  
// // Image Slideshow - index header section

// let slideIndexNum = 1;


// // Next/previous controls
// const plusSlidesNum = (n) => {showSlides(slideIndexNum += n)}

// // Thumbnail image controls
// currentSlideNum = (n) => { showSlides(slideIndexNum = n)}

// const showSlidesIndex = (n) => {

//   let i;

//   const slides = document.getElementsByClassName('technical-img-index');
//   const dots = document.getElementsByClassName('dot');

//   if(n > slides.length) {slideIndexNum = 1};

//   if (n < 1) {slideIndexNum = slides.length};

//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = 'none';
//   }


//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(' active', '');
//   }

//   slides[slideIndexNum - 1].style.display = 'block';
//   dots[slideIndexNum - 1].className += ' active';

//   setTimeout(showSlidesIndex, 1000);
//   console.log(slideIndexNum);
  

  
// }

// showSlidesIndex(slideIndexNum);
  
  

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
