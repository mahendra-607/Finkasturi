$('.in-slide').slick({
    infinite:true,
  autoplay:true,
  speed: 500,
  initialSlide: 0,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: false,
  asNavFor: '.fs-slider'
});
$('.fs-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  vertical: true,
  verticalScrolling: true,
  infinite:true,
  asNavFor: '.in-slide',
  dots: false,
  arrows:true,
  prevArrow: '<button class="slide-arrow prev-arrow"><i class="fa-solid fa-angle-up"></i></button>',
  nextArrow: '<button class="slide-arrow next-arrow"><i class="fa-solid fa-angle-down"></i></button>',
  centerMode: true,
  focusOnSelect: true,
  // responsive: [
  //   {breakpoint: 768,
  //     settings: {
  //       vertical: false,
  //       verticalScrolling: false,
  //     }
  //   }
  // ]
});
$('a[data-slide]').click(function(e) {
  e.preventDefault();
  var slideno = $(this).data('slide');
  $('.fs-slider').slick('slickGoTo', slideno - 1);
});

// Process Slider 

$('.process-slider').slick({
  // infinite:true,
autoplay:true,
speed: 500,
initialSlide: 0,
slidesToShow: 1,
slidesToScroll: 1,
touchToMove:false,
arrows: false,
fade: false,
asNavFor: '.process-num'
});
$('.process-num').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
    vertical: true,
    verticalScrolling: false,
  infinite:false,
  asNavFor: '.process-slider',
    dots: false,
    arrows:false,
  centerMode: false,
  focusOnSelect: true,
  accessibility: false,
  centerPadding:true,
  //   responsive: [
  //     {breakpoint: 768,
  //       settings: {
  //         vertical: false,
  //         verticalScrolling: false,
  //       }
  //     }
  //   ]
  });
  $('a[data-slide]').click(function(e) {
  e.preventDefault();
  var slideno = $(this).data('slide');
  $('.process-num').slick('slickGoTo', slideno - 1);
  });

// Last Slider 

$('.slider-box').slick({
  infinite:true,
autoplay:false,
speed: 500,
initialSlide: 0,
slidesToShow: 2,
slidesToScroll: 1,
arrows: false,
fade: false,
asNavFor: '.box-num',
responsive: [
      {breakpoint: 991.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
});
$('.box-num').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite:true,
  asNavFor: '.slider-box',
  dots: false,
  arrows:true,
  prevArrow: '<button class="slide-arrow prev-arrow"><i class="fa-solid fa-angle-left"></i></button>',
  nextArrow: '<button class="slide-arrow next-arrow"><i class="fa-solid fa-angle-right"></i></button>',
  centerMode: true,
  focusOnSelect: true,
});
$('a[data-slide]').click(function(e) {
  e.preventDefault();
  var slideno = $(this).data('slide');
  $('.box-num').slick('slickGoTo', slideno - 1);
});
