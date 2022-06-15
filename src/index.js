//  button "read more"
// function myFunction() {
//   var dots = document.getElementById('dots');
//   var moreText = document.getElementById('more');
//   var btnText = document.getElementById('myBtn');

//   if (dots.style.display === 'none') {
//     dots.style.display = 'inline';
//     btnText.innerHTML = 'Read more';
//     moreText.style.display = 'none';
//   } else {
//     dots.style.display = 'none';
//     btnText.innerHTML = 'Read less';
//     moreText.style.display = 'inline';
//   }
// }
// slider

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  infinite: false,
  asNavFor: '.slider-nav',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
      },
    },
  ],
});

$('.slider-nav').slick({
  slidesToShow: 7,
  slidesToScroll: 7,
  asNavFor: '.slider-for',
  infinite: false,
  dots: false,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
      },
    },
  ],
});

// button "read more"
$(document).ready(function () {
  $('.reviews__button').click(function () {
    if ($('.reviews__button').val() == 1) {
      $('.hide-text').show();
      $('.reviews__button').html('Read less');
      $('.reviews__button').val(2);
    } else {
      $('.hide-text').hide();
      $('.reviews__button').html('Read more');
      $('.reviews__button').val(1);
    }
  });
});
