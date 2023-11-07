(function() {
    // Bind Click event to the drop down navigation button
    document.querySelector('.dropbtn').addEventListener('click', function() {
      /*  Toggle the CSS closed class which reduces the height of the UL thus 
          hiding all LI apart from the first */
      this.nextElementSibling.classList.toggle('show')
    }, false);
  })();

  document.querySelectorAll('.store-toggle-btn').forEach(element =>{ element.addEventListener('click', function () {
    this.classList.toggle('active');
    
});
  // jQuery(document).ready(function() {
    jQuery('.tech-logo').slick({
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow:4,
      slidesToScroll:2,
      dots: true,
      pauseOnHover: true,
      responsive: [
      {
        breakpoint: 768,
        settings: {
        slidesToShow:3,
        slidesToScroll:2,
        }
      },
      {
        breakpoint: 576,
        settings: {
        slidesToShow:2,
        slidesToScroll:2,
        }
      }
      ]
    });
  })

  