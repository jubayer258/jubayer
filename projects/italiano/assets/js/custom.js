 // ==================================================
// * Project Name   :  Italiano - Food Template
// * File           :  JS Base
// * Version        :  1.0.0
// * Author         :  htmlmate (https://htmlmate.com)
// * Developer      :  Imran Hosain
// ==================================================
(function($) {
  "use strict";

  /* sticky header start */
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 120) {
      $('.header_navbar').addClass("sticky")
    } else {
      $('.header_navbar').removeClass("sticky")
    }
  });
  /* sticky header end */

  /* slick slider start */
  $('.future-slider').slick({
    dots: true,
    speed: 1000,
    arrows: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 3,
    autoplaySpeed: 3000,
    responsive: [
    {
      breakpoint: 440,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 4
      }
    }
    ]
  });

  /* filterizer filter */ 

  var filterizd = $('.filterz-container').filterizr({

  });

  /* slick slider start */
  $('.special_slider').slick({
    dots: true,
    speed: 1000,
    arrows: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    autoplaySpeed: 3000,
    responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
    ]
  });

  /* team slider */

  $('.team_slider').slick({
    dots: true,
    speed: 1000,
    arrows: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 3,
    autoplaySpeed: 3000,
    responsive: [
    {
      breakpoint: 440,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 4
      }
    }
    ]
  });

  /* testimonial slider */ 

  $('.testimonial-slider').slick({
    dots: true,
    speed: 1000,
    arrows: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 2,
    autoplaySpeed: 3000,
    responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1
      }
    }
    ]
  });


})(jQuery);