$("document").ready(function() {
  $(".hero-carousel").owlCarousel({
    items: 1,
    nav: true,
    navText: ["<span class='mai-chevron-back'></span>", "<span class='mai-chevron-forward'></span>"],
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
  });

  $(".team-carousel").owlCarousel({
    margin: 16,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      800: {
        items: 3
      }
    }
  })

  $(".testimonial-carousel").owlCarousel({
    responsive: {
      0: {
        items: 1,
        margin: 16
      },
      768: {
        items: 2,
        margin: 24
      },
      992: {
        items: 3,
        margin: 24
      }
    }
  });
});
