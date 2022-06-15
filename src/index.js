import $ from 'jquery';
import slick from 'slick-carousel';

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

// mobil-menu

(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');

  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
  });
})();

// logo style

document.getElementById('mabil-menu__btn').onclick = function () {
  document.getElementById('logo').classList.toggle('logo-dark');
};

// Плавный скрол меню

$(document).ready(function () {
  $('#navigation').on('click', 'a', function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({ scrollTop: top }, 1500);
  });
});

// кнопка вверх

$(document).ready(function () {
  var btn = $('#toTop');
  $(window).scroll(function () {
    if ($(window).scrollTop() > 500) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '500');
  });
});

// mobil-menu при клике на секцию переход и закрываться меню

document.getElementById('consultation').onclick = function () {
  document.getElementById('navigation').classList.remove('is-open'),
    document.getElementById('mabil-menu__btn').classList.remove('is-open'),
    document.getElementById('logo').classList.remove('logo-dark');
};

document.getElementById('program-menu').onclick = function () {
  document.getElementById('navigation').classList.remove('is-open'),
    document.getElementById('mabil-menu__btn').classList.remove('is-open'),
    document.getElementById('logo').classList.remove('logo-dark');
};

document.getElementById('about-menu').onclick = function () {
  document.getElementById('navigation').classList.remove('is-open'),
    document.getElementById('mabil-menu__btn').classList.remove('is-open'),
    document.getElementById('logo').classList.remove('logo-dark');
};

document.getElementById('training-menu').onclick = function () {
  document.getElementById('navigation').classList.remove('is-open'),
    document.getElementById('mabil-menu__btn').classList.remove('is-open'),
    document.getElementById('logo').classList.remove('logo-dark');
};

document.getElementById('contacts-menu').onclick = function () {
  document.getElementById('navigation').classList.remove('is-open'),
    document.getElementById('mabil-menu__btn').classList.remove('is-open'),
    document.getElementById('logo').classList.remove('logo-dark');
};
