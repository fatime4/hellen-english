//  button "read more"
function myFunction() {
  var dots = document.getElementById('dots');
  var moreText = document.getElementById('more');
  var btnText = document.getElementById('myBtn');

  if (dots.style.display === 'none') {
    dots.style.display = 'inline';
    btnText.innerHTML = 'Read more';
    moreText.style.display = 'none';
  } else {
    dots.style.display = 'none';
    btnText.innerHTML = 'Read less';
    moreText.style.display = 'inline';
  }
}

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: '.slider-nav',
});

$('.slider-nav').slick({
  slidesToShow: 7,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        dots: false,
      },
    },
  ],
});
