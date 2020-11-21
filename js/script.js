//fixed menu start//

$(window).scroll(function () {
    $scrollamout = $(window).scrollTop();

    if ($scrollamout > 500) {
        $(".menu").addClass("sticky")
    } else {
        $(".menu").removeClass("sticky")
    }


//fixed menu start//



//bottom to top start//

    if ($scrollamout > 1500) {
        $(".btop").fadeIn()
    } else {
        $(".btop").fadeOut()
    }
})


$(".btop").click(function () {
    $("html,body").animate({
        scrollTop: 0
    }, 2000)
})

//bottom to top end//



//banner part start//

$('#banner-part').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
    },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
    },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

});

//banner part end//



//venubox part start//

$('.venobox').venobox();

//venubox part end//


//testimonial part start//

$('.testi-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
    },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
    },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

//testimonial part end//


//counter part start//

$('.counter').counterUp({
    delay: 10,
    time: 1000
});


//counter part end//





$('.slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: '<i class="fa fa-chevron-left leftarrow" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-chevron-right rightarrow" aria-hidden="true"></i>',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
    },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
    },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});





//class part start//

$(document).ready(function () {

    $("#colorful").colorfulTab();

    $("#colorful-elliptic").colorfulTab({
        theme: "elliptic"
    });

    $("#colorful-flatline").colorfulTab({
        theme: "flatline"
    });

    $("#colorful-background-image").colorfulTab({
        theme: "flatline",
        backgroundImage: "true",
        overlayColor: "#002F68",
        overlayOpacity: "0.8"
    });

});


//class part end//

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                     logo js start
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
$('.logo-slider .partner').slick({
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  centerMode: false,
  arrows: true,
  prevArrow: '<i class="fa fa-chevron-left leftarrow" aria-hidden="true"></i>' ,
  nextArrow: '<i class="fa fa-chevron-right rightarrow" aria-hidden="true"></i>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                     logo js end
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~