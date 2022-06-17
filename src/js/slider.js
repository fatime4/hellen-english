import $ from 'jquery';
import slick from 'slick-carousel';

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  infinite: false,
  asNavFor: '.slider-nav',
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        arrows: true,
        appendArrows: $('.slider-for'),
      },
    },
  ],
});

$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  infinite: false,
  dots: false,
  focusOnSelect: true,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 7,
        arrows: false,
      },
    },
  ],
});

// button "read more"
$('.reviews__button').on('click', function () {
  if ($('.reviews__button').val() == 1) {
    $('.hide-text').show('fast');
    $('.reviews__button').html('Read less');
    $('.reviews__button').val(2);
  } else {
    $('.hide-text').hide('fast');
    $('.reviews__button').html('Read more');
    $('.reviews__button').val(1);
  }
});
