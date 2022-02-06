

(function() {
    'use strict';

    function trackScroll() {
      var scrolled = window.pageYOffset;
      var coords = document.documentElement.clientHeight;
  
      if (scrolled > coords) {
        top.classList.add('back_to_top-show');
      }
      if (scrolled < coords) {
        top.classList.remove('back_to_top-show');
      }
    }
  
    function backToTop() {
      if (window.pageYOffset > 0) {
        window.scrollBy(0, -50);
        setTimeout(backToTop, 0);
      }
    }
    
    var top = document.querySelector('#topss')
  
    window.addEventListener('scroll', trackScroll);
    top.addEventListener('click', backToTop);
  })();