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
      items: 2,
      
    },

    1366: {
      items: 2,   
      
    }
  },
  navText: ['<span class="fas fa-arrow-left"></span>','<span class="fas fa-arrow-right"></span>'],

  
});

// jQuery("#youtube-slider").owlCarousel({
//   autoplay: false,
//   center: true,
//   lazyLoad: true,
//   loop: true,
//   margin:0,
//   responsiveClass: true,
//   autoHeight: true,
//   autoplayTimeout: 7000,
//   smartSpeed: 800,
//   dots: false,
//   nav:true,
//   navigation : true,
//   responsive: {
//     0: {
//       items: 1,

//     },

//     600: {
//       items: 1,
      
//     },

//     1024: {
//       items: 4,
      
//     },

//     1366: {
//       items: 4,   
      
//     }
//   },
//   navText: ['<span class="fas fa-arrow-left"></span>','<span class="fas fa-arrow-right"></span>'],

  
// });


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



// $(document).on('ready', function() {

//   $(".regular").slick({
//     dots: false,
//     infinite: true,
//     slidesToShow: 6,
//     slidesToScroll: 6,
//     autoplay: true,
//     autoplaySpeed: 2000,

//       pauseOnHover: true,

//     responsive: [
//     {
//         breakpoint: 1024,
//         settings: {
//             slidesToShow: 5,
//             slidesToScroll: 5,
//         }
//     },
//     {
//         breakpoint: 600,
//         settings: {
//             slidesToShow: 3,
//             slidesToScroll: 3
//         }
//     },
//     {
//         breakpoint: 480,
//         settings: {
//             slidesToShow: 2,
//             slidesToScroll: 2
//         }
//     }

// ]


//   }); 
// });

// $(document).on('ready', function() {
//   $(".center").slick({
//     dots: true,
//     infinite: true,
//     centerMode: true,
//     slidesToShow: 3,
//     slidesToScroll: 3
//   });
// });



  //Responsive slider
// $(document).ready(function(){
//   $('.responsive-slider').slick({
//   dots: false,
//   infinite: true,
//   speed: 300,
//   slidesToShow: 4,
//   slidesToScroll: 4,
//   responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: false,
//         arrows:false
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
  
//   ]
//   });
// });

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

// $(function() {
//   var top = $('#sidebar').offset().top - parseFloat($('#sidebar').css('marginTop').replace(/auto/, 0));
//   var footTop = $('#footer').offset().top - parseFloat($('#footer').css('marginTop').replace(/auto/, 0));

//   var maxY = footTop - $('#sidebar').outerHeight();

//   $(window).scroll(function(evt) {
//       var y = $(this).scrollTop();
//       if (y >= top - $('#fixedHeader').height()) {
//           if (y < maxY) {
//               $('#sidebar').addClass('fixed').removeAttr('style');
//           } else {
//               $('#sidebar').removeClass('fixed').css({
//                   position: 'absolute',
//                   top: (maxY - top) + 'px'
//               });
//           }
//       } else {
//           $('#sidebar').removeClass('fixed');
//       }
//   });
// });


// $(function() {
//     var top = $('#sidebar').offset().top - parseFloat($('#sidebar').css('marginTop').replace(/auto/, 0));
//     var footTop = $('#footer').offset().top - parseFloat($('#footer').css('marginTop').replace(/auto/, 0));

//     var maxY = footTop - $('#sidebar').outerHeight();

//     $(window).scroll(function(evt) {
//         var y = $(this).scrollTop();
//         if (y >= top - $('#fixedHeader').height()) {
//             if (y < maxY) {
//                 $('#sidebar').addClass('fixed').removeAttr('style');
//             } else {
//                 $('#sidebar').removeClass('fixed').css({
//                     position: 'absolute',
//                     top: (maxY - top) + 'px'
//                 });
//             }
//         } else {
//             $('#sidebar').removeClass('fixed');
//         }
//     });
// });
$(document).on('ready', function() {
  $('.slick1-class').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

});

// $("#owl_v").owlCarousel({
//   merge: true,
//   loop: true,
//   margin: 10,
//   video: true,
//   lazyLoad: true,
//   center: true
// });


$(".circle_1").hover(function(){
  
  $(".c7").css("border-color", "#B31B1B");
  $(".c8").css("border-color", "#B31B1B");
  $(".c3").css("border-color", "#B31B1B");
  $(".circle_1 img").attr('src', 'assets/images/Group8.png');

  }, function(){
  $(".c3").css("border-color", "#DBDBDB");
  $(".c7").css("border-color", "#DBDBDB");
  $(".c8").css("border-color", "#DBDBDB");
  $(".circle_1 img").attr('src', 'assets/images/Group9.png');

});
$(".circle_2").hover(function(){
  
  $(".c1").css("border-color", "#B31B1B");
  $(".c2").css("border-color", "#B31B1B");
  $(".c3").css("border-color", "#B31B1B");
  $(".c4").css("border-color", "#B31B1B");
  $(".c5").css("border-color", "#B31B1B");
  $(".c6").css("border-color", "#B31B1B");
  }, function(){
  $(".c1").css("border-color", "#DBDBDB");
  $(".c2").css("border-color", "#DBDBDB");
  $(".c3").css("border-color", "#DBDBDB");
  $(".c4").css("border-color", "#DBDBDB");
  $(".c5").css("border-color", "#DBDBDB");
  $(".c6").css("border-color", "#DBDBDB");
  $(".c2").css("border-color", "#DBDBDB");
});

$(".circle_3").hover(function(){
  $(".c6").css("border-color", "#B31B1B");
  $(".c13").css("border-color", "#B31B1B");
  $(".c14").css("border-color", "#B31B1B");
  $(".c15").css("border-color", "#B31B1B");
  $(".c16").css("border-color", "#B31B1B");

  }, function(){
  $(".c6").css("border-color", "#DBDBDB");
  $(".c13").css("border-color", "#DBDBDB");
  $(".c14").css("border-color", "#DBDBDB");
  $(".c15").css("border-color", "#DBDBDB");
  $(".c16").css("border-color", "#DBDBDB");

});
$(".circle_4").hover(function(){
  $(".c10").css("border-color", "#B31B1B");
  $(".c16").css("border-color", "#B31B1B");
  $(".c17").css("border-color", "#B31B1B");


  }, function(){
  $(".c10").css("border-color", "#DBDBDB");
  $(".c16").css("border-color", "#DBDBDB");
  $(".c17").css("border-color", "#DBDBDB");


});

$(".circle_5").hover(function(){
  $(".c5").css("border-color", "#B31B1B");
  $(".c17").css("border-color", "#B31B1B");
  $(".c18").css("border-color", "#B31B1B");
  $(".c19").css("border-color", "#B31B1B");
  $(".c15").css("border-color", "#B31B1B");


  }, function(){
  $(".c5").css("border-color", "#DBDBDB");
  $(".c17").css("border-color", "#DBDBDB");
  $(".c18").css("border-color", "#DBDBDB");
  $(".c19").css("border-color", "#DBDBDB");
  $(".c15").css("border-color", "#DBDBDB");

});
$(".circle_6").hover(function(){
  $(".c1").css("border-color", "#B31B1B");
  $(".c12").css("border-color", "#B31B1B");
  $(".c14").css("border-color", "#B31B1B");
  $(".c19").css("border-color", "#B31B1B");
  $(".c20").css("border-color", "#B31B1B");

  }, function(){
  $(".c1").css("border-color", "#DBDBDB");
  $(".c12").css("border-color", "#DBDBDB");
  $(".c14").css("border-color", "#DBDBDB");
  $(".c19").css("border-color", "#DBDBDB");
  $(".c20").css("border-color", "#DBDBDB");
});

$(".circle_7").hover(function(){
  $(".c4").css("border-color", "#B31B1B");
  $(".c7").css("border-color", "#B31B1B");
  $(".c9").css("border-color", "#B31B1B");
  $(".c11").css("border-color", "#B31B1B");
  $(".c12").css("border-color", "#B31B1B");
  $(".c13").css("border-color", "#B31B1B");


  }, function(){
  $(".c4").css("border-color", "#DBDBDB");
  $(".c7").css("border-color", "#DBDBDB");
  $(".c9").css("border-color", "#DBDBDB");
  $(".c11").css("border-color", "#DBDBDB");
  $(".c12").css("border-color", "#DBDBDB");
  $(".c13").css("border-color", "#DBDBDB");


});

$(".circle_8").hover(function(){
  $(".c2").css("border-color", "#B31B1B");
  $(".c8").css("border-color", "#B31B1B");
  $(".c9").css("border-color", "#B31B1B");
  $(".c10").css("border-color", "#B31B1B");


  }, function(){
  $(".c2").css("border-color", "#DBDBDB");
  $(".c8").css("border-color", "#DBDBDB");
  $(".c9").css("border-color", "#DBDBDB");
  $(".c10").css("border-color", "#DBDBDB");

});

$(".circle_9").hover(function(){
  $(".c11").css("border-color", "#B31B1B");
  $(".c18").css("border-color", "#B31B1B");
  $(".c20").css("border-color", "#B31B1B");

  }, function(){
  $(".c11").css("border-color", "#DBDBDB");
  $(".c18").css("border-color", "#DBDBDB");
  $(".c20").css("border-color", "#DBDBDB");
});
