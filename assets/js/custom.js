/* ========== table of content start ========== */
// * Project Name   :  Portfolio Template
// * File           :  JS Base
// * Version        :  1.0.0
// * Last change    :  27 january 2023
// * Author         :  https://juraiz.com
// * Developer      :  Md jubayer ahammed
/* ========== table of content end ========== */

(function($) {

  "use strict";
  
  /* ========== sticky header start ========== */
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 80) {
      $('.header_section').addClass("sticky")
    } else {
      $('.header_section').removeClass("sticky")
    }
  });
  /* ========== sticky header end ========== */
  
  
  /* ========== back-to-top start ========== */
  
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('.back_to_top:hidden').stop(true, true).fadeIn();
    } else {
      $('.back_to_top').stop(true, true).fadeOut();
    }
  });
  $(function() {
    $(".scroll").on('click', function() {
      $("html,body").animate({scrollTop: 0}, "slow");
      return false
    });
  });

  // =============== Video modal ===============

  $(document).ready(function () {
    var $videoSrc;
    $(".video-btn").click(function () {
      $videoSrc = $(this).data("src");
    });
    $("#myModal").on("shown.bs.modal", function (e) {
      $("#video").attr(
        "src",
        $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
      );
    });
    $("#myModal").on("hide.bs.modal", function (e) {
      $("#video").attr("src", $videoSrc);
    });
  });
  
  
  /* ========== Isotope start ========== */
  var $grid = $('#product-list').isotope({
    // options
  });
  
  /* ========== filter items on button click ========== */
  
  $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  })

  $('#circle').circleProgress({
    value: 0.75,
    size: 80,
    fill: {
        gradient: ["red", "orange"]
    }
  });
  
  
})(jQuery);







































