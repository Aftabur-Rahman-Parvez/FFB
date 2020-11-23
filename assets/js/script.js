var $window=$(window);

$(function(){
	new WOW().init();
});

AOS.init({
    duration: 600
});
    

$(document).ready(function(){
    $('.main-men-ul .nav-item .nav-link').click(function(){
       
        $('.main-men-ul .nav-item .nav-link').removeClass('active');
        $(this).addClass('active');
    })
})

$(document).ready(function(){
  $('.nav-large .nav-item .nav-link').click(function(){
     
      $('.nav-large .nav-item .nav-link').removeClass('active');
      $(this).addClass('active');
  })
})


$window.on('scroll',function(){
    if($window.scrollTop()>100){
        $("#header-menu").addClass('header-sticky');
    }else{
        $("#header-menu").removeClass('header-sticky');
    }
})


jQuery("#home-banner-slider").owlCarousel({
    autoplay: false,
    lazyLoad: true,
    loop: true,

    margin: 0,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    dots: true,
    nav:false,
    navigation : true,
    responsive: {
      0: {
        items: 1,
 
      },
  
      600: {
        items: 1,
        
      },
  
      1024: {
        items: 1,
        
      },
  
      1366: {
        items: 1,   
	      
      }
    },
    navText: ['<span class="fas fa-chevron-left "></span>','<span class="fas fa-chevron-right "></span>'],
});

jQuery(".owl-carousel-tab-1").owlCarousel({
  autoplay: false,
  lazyLoad: true,
  loop: true,
  animateOut: 'fadeOut',
  margin: 20,
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  dots: false,
  nav:true,
  navigation : true,
  responsive: {
    0: {
      items: 1,

    },

    600: {
      items: 1,
      
    },

    1024: {
      items: 1,
      
    },

    1366: {
      items: 1,   
      
    }
  },
  navText: ['<span class="fas fa-chevron-left "></span>','<span class="fas fa-chevron-right "></span>'],
});

jQuery("#news-views-banner-slider").owlCarousel({
  autoplay: false,
  lazyLoad: true,
  loop: true,
  margin: 10,
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  dots: false,
  nav:true,
  navigation : true,
  responsive: {
    0: {
      items: 1,

    },

    600: {
      items: 1,
      
    },

    1024: {
      items: 2,
      
    },

    1366: {
      items: 2,   
      
    }
  },
  navText: ['<span class="fas fa-arrow-left"></span>','<span class="fas fa-arrow-right"></span>'],

  
});

jQuery("#youtube-slider").owlCarousel({
  autoplay: false,
  lazyLoad: true,
  loop: true,
  margin:0,
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  dots: false,
  nav:true,
  navigation : true,
  responsive: {
    0: {
      items: 1,

    },

    600: {
      items: 1,
      
    },

    1024: {
      items: 2,
      
    },

    1366: {
      items: 4,   
      
    }
  },
  navText: ['<span class="fas fa-arrow-left"></span>','<span class="fas fa-arrow-right"></span>'],

  
});


jQuery("#our-activies-item-slider").owlCarousel({
  autoplay: false,
  lazyLoad: true,
  loop: true,
  margin:20,
  responsiveClass: true,
  autoHeight: false,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  dots: false,
  nav:true,
  navigation : true,
  responsive: {
    0: {
      items: 1,

    },

    600: {
      items: 1,
      
    },

    1024: {
      items: 3,
      
    },

    1366: {
      items: 3,   
      
    }
  },
  navText: ['<span class="fas fa-arrow-left"></span>','<span class="fas fa-arrow-right"></span>'],

  
});



// another menu
$(document).ready(function(){
  $( ".discover-btn" ).click(function() {
    $(this).toggleClass( "discover-btn-open" );
    $(".discover-container").toggleClass("discover-container-open" );
  });
  
});
function searchoption(){
  $('.search-trigger').on('click',function(e){
      e.preventDefault();
          $('.search-flyoverlay-area').addClass('is-visible');
  })
  $('.btn-close-search').on('click', function (e) {
      e.preventDefault(),
          $(this).parent('.search-flyoverlay-area').removeClass('is-visible')
  })

}
searchoption();



$(document).on('ready', function() {

  $(".regular").slick({
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: true,
    autoplaySpeed: 2000,

      pauseOnHover: true,

    responsive: [
    {
        breakpoint: 1024,
        settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    }

]


  }); 
});

$(document).on('ready', function() {
  $(".center").slick({
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });
});



  //Responsive slider
$(document).ready(function(){
  $('.responsive-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
        arrows:false
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
});

$window.on('scroll', function () {
 
  if ($window.scrollTop() > 150) {
      $('.header-part').addClass('header-sticky');
    
  } else {
      $('.header-part').removeClass('header-sticky');
      
  }

});
$window.on('scroll', function () {
 
  if ($window.scrollTop() > 250) {
      $('.single-page-body').addClass('single-page-main-body-fixed');
    
  } else {
      $('.single-page-body').removeClass('single-page-main-body-fixed');
      
  }

});

$(function() {
  var top = $('#sidebar').offset().top - parseFloat($('#sidebar').css('marginTop').replace(/auto/, 0));
  var footTop = $('#footer').offset().top - parseFloat($('#footer').css('marginTop').replace(/auto/, 0));

  var maxY = footTop - $('#sidebar').outerHeight();

  $(window).scroll(function(evt) {
      var y = $(this).scrollTop();
      if (y >= top - $('#fixedHeader').height()) {
          if (y < maxY) {
              $('#sidebar').addClass('fixed').removeAttr('style');
          } else {
              $('#sidebar').removeClass('fixed').css({
                  position: 'absolute',
                  top: (maxY - top) + 'px'
              });
          }
      } else {
          $('#sidebar').removeClass('fixed');
      }
  });
});


$(function() {
    var top = $('#sidebar').offset().top - parseFloat($('#sidebar').css('marginTop').replace(/auto/, 0));
    var footTop = $('#footer').offset().top - parseFloat($('#footer').css('marginTop').replace(/auto/, 0));

    var maxY = footTop - $('#sidebar').outerHeight();

    $(window).scroll(function(evt) {
        var y = $(this).scrollTop();
        if (y >= top - $('#fixedHeader').height()) {
            if (y < maxY) {
                $('#sidebar').addClass('fixed').removeAttr('style');
            } else {
                $('#sidebar').removeClass('fixed').css({
                    position: 'absolute',
                    top: (maxY - top) + 'px'
                });
            }
        } else {
            $('#sidebar').removeClass('fixed');
        }
    });
});
