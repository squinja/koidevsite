// Navbar shrink effect

function headerShrink() {
  let lastScrollTop = 0;
  window.addEventListener(
    "scroll",
    function () {
      let st = window.pageYOffset || document.documentElement.scrollTop;

      

      if (st > lastScrollTop) {
        $(".nav").addClass("navbar--shrink");
        $(".nav__container").addClass("navbar--shrink__container");
        $(".nav__title").addClass("navbar--shrink__title");
        $(".nav__logo").addClass("navbar--shrink__logo");
        $(".nav__items").addClass("navbar--shrink__items");
        $(".nav__item").addClass("navbar--shrink__item");
        
      } else {
        $(".nav").removeClass("navbar--shrink");
        $(".nav__container").removeClass("navbar--shrink__container");
        $(".nav__title").removeClass("navbar--shrink__title");
        $(".nav__logo").removeClass("navbar--shrink__logo");
        $(".nav__items").removeClass("navbar--shrink__items");
        $(".nav__item").removeClass("navbar--shrink__item");
        
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

  let scrollPastHeader = false;

  const headerTop = document.getElementById('place').clientHeight;

  window.addEventListener(
    "scroll", function () {
      let st = window.pageYOffset || document.documentElement.scrollTop;

      if (st > headerTop) {
        // console.log('scrolled past header meow');
        scrollPastHeader = true;
      } else if (st < headerTop) {
        // console.log('Havent scrolled past yet meow');
        scrollPastHeader = false;
      }

      if (st > lastScrollTop && !scrollPastHeader) {
        // Luna zoom in effect 
        $('.box').addClass('on');
      } else if (st > lastScrollTop && scrollPastHeader) {
        console.log('.');  
      } else if (st < lastScrollTop && !scrollPastHeader) {
        console.log('.');  
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
