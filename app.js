$(document).ready(function () {
  var scrollThreshold = 100;
  var $logoContainer = $(".logo-container");
  var logoAnimationApplied = false;

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > scrollThreshold) {
      if (!logoAnimationApplied) {
        $logoContainer.addClass("logo-container-new");
        $logoContainer.removeClass("logo-container");

        gsap.to(".logo", {
          duration: 1,
          width: "200px",
          height: "30px",

          y: 7,

          ease: "power3.inOut",
        });

        logoAnimationApplied = true;
      }
    } else {
      if (logoAnimationApplied) {
        $logoContainer.addClass("logo-container");
        $logoContainer.removeClass("logo-container-new");

        gsap.to(".logo", {
          duration: 2,
          width: "350px",
          height: "50px",
          scrub: true,

          y: 0,
          rotate: "+=360",
          ease: "power3.inOut",
        });

        logoAnimationApplied = false;
      }
    }
  });
});

$(document).ready(function () {
  var scrollThreshold = 100;
  var $header = $(".heading");
  var headerAnimationApplied = false;

  var $section = $(".lending-page");

  $section.on("scroll", function () {
    if ($(this).scrollTop() > scrollThreshold) {
      if (!headerAnimationApplied) {
        $header.addClass("heading-new");
        $header.removeClass("heading");

        gsap.to(".heading-animation", {
          duration: 0.5,
          x: "-280px",
          y: "-100px",
          position: "fixed",
          rotate: -90,
          ease: "power3.inOut",
        });

        headerAnimationApplied = true;
      }
    } else {
      if (headerAnimationApplied) {
        $header.addClass("heading");
        $header.removeClass("heading-new");

        gsap.to(".heading-animation", {
          duration: 1,
          x: "0",
          y: "0",
          rotate: 0,
          ease: "power3.inOut",
        });

        headerAnimationApplied = false;
      }
    }
  });
});

// code for animating multiple headings to 90 degree

// const observer = new IntersectionObserver((entries)=>{
//     entries.forEach((entry)=>{
//         console.log(entry)
//         if(entry.isIntersecting){

//             var scrollThreshold = 100;
//             var $header = $('.heading');
//             var headerAnimationApplied = false;

//             var $section = $('.lending-page');

//             $section.on('scroll', function() {
//                 if ($(this).scrollTop() > scrollThreshold) {
//                     if (!headerAnimationApplied) {

//                         $header.addClass('heading-new');
//                         $header.removeClass('heading');

//                         gsap.to('.heading-animation', {
//                             duration: 0.5,
//                             x: "-250px",
//                             y: "-100px",
//                             position:"fixed",
//                             rotate: -90,
//                             ease: "power3.inOut"
//                         });

//                         headerAnimationApplied= true;
//                     }
//                 } else {
//                     if (headerAnimationApplied) {

//                         $header.addClass('heading');
//                         $header.removeClass('heading-new');

//                         gsap.to('.heading-animation', {
//                             duration: 1,
//                             x: "0",
//                             y: "0",
//                             rotate: 0,
//                             position: relative,
//                             ease: "power3.inOut"
//                         });

//                         headerAnimationApplied = false;
//                     }
//                 }
//             });
//         }else{
//             entry.target.classList.remove("heading-new")
//         }
//     })
// })

// const hiddenElements = document.querySelectorAll(".heading");
// hiddenElements.forEach((el)=>observer.observe(el));
