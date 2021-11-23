$('document').ready(() => {
  let dropdownMenu = $('.nav-dropdown-menu');

  $('.nav-dropdown a').on('mouseover', () => {
    dropdownMenu.addClass('show');
  })

  $('.nav-dropdown a').on('mouseout', () => {
    dropdownMenu.removeClass('show');
  })


  // range

  $(function () {
    $("#slider-range").slider({
      range: true,
      min: 100,
      max: 5000,
      values: [1000, 3000],
      slide: function (event, ui) {
        $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
      }
    });
    $("#amount").val("$" + $("#slider-range").slider("values", 0) +
      " - $" + $("#slider-range").slider("values", 1));
  });


  // search bar


  // featured image toggle

  let featuredImg = document.querySelector('.featured-img');
  let featuredToggleImages = document.querySelectorAll('.recomend img');

  featuredToggleImages.forEach((item) => {
    item.addEventListener('click', () => {
      featuredImg.src = item.src;
    })
  })

  // shop page

  // shop slider
  $('.shop-slider-banner').bxSlider({
    mode: 'fade',
  });

  // arrival slider

  $('.arrival-slider').bxSlider({
    
  });

  // product slider

  $('.product-slider').owlCarousel({
    loop: false,
    margin: 5,
    nav: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
        loop: false
      }
    }
  })

  $('.hot-deal-carousel').owlCarousel({
    center: true,
    merge: true,
    loop: false,
    margin: 40,
    nav: true,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
        loop: false
      }
    }
  })

})

