// mobile-menu
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

// mobil-menu при клике на секцию переход и закрываться меню
document.getElementById('program-menu').onclick = function () {
  document.getElementById('navigation').classList.remove('is-open'),
    document.getElementById('mobil-menu__btn').classList.remove('is-open'),
    document.getElementById('logo').classList.remove('logo-dark');
};

document.getElementById('about-menu').onclick = function () {
  document.getElementById('navigation').classList.remove('is-open'),
    document.getElementById('mobil-menu__btn').classList.remove('is-open'),
    document.getElementById('logo').classList.remove('logo-dark');
};

document.getElementById('training-menu').onclick = function () {
  document.getElementById('navigation').classList.remove('is-open'),
    document.getElementById('mobil-menu__btn').classList.remove('is-open'),
    document.getElementById('logo').classList.remove('logo-dark');
};

document.getElementById('contacts-menu').onclick = function () {
  document.getElementById('navigation').classList.remove('is-open'),
    document.getElementById('mobil-menu__btn').classList.remove('is-open'),
    document.getElementById('logo').classList.remove('logo-dark');
};
