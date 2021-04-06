/************************************
 *                                  *
 *  PRELOADER ELEMENT               *
 *                                  *
 ************************************/
var loader = document.querySelector('#preloader');
window.addEventListener('load', function(){
  setTimeout(function(){loader.remove()}, 1000)
  });

/************************************
 *                                  *
 *  HIDE NAVBAR ONCLICK EVERYWHERE  *
 *                                  *
 ************************************/
var body = document.querySelector('body');
var nbCollapse = document.querySelector('.navbar-collapse');
var hide = new bootstrap.Collapse(nbCollapse, { toggle: false });

body.addEventListener('click', function () {
  if (nbCollapse.classList.contains('show')) {
    hide.toggle();
  }
});

/************************************
 *                                  *
 *  HIDE/COLLAPSE NAVBAR ON SCROLL  *
 *                                  *
 ************************************/
var navbar = document.querySelector('#navigation');
var nbHeight = parseFloat(getComputedStyle(navbar, null).height);
var prevScrollpos = window.pageYOffset;

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navbar.classList.add('scroll-down');
    navbar.classList.remove('scroll-up');
    if (nbCollapse.classList.contains('show')) {
      hide.toggle();
    }
  } else {
    navbar.classList.remove('scroll-down');
    navbar.classList.add('scroll-up');
    if (nbCollapse.classList.contains('show')) {
      hide.toggle();
    }
  }
  prevScrollpos = currentScrollPos;
};

/************************************
 *                                  *
 *  CAROUSEL INDICATOR add active   *
 *                                  *
 ************************************/
var myCarousel = document.querySelector('#carouselPage');

myCarousel.addEventListener('slide.bs.carousel', (event) => {
  var elementChildrens = document.querySelector('.carousel-controls').children;
  elementChildrens.item(event.from).classList.remove('active');
  elementChildrens.item(event.to).classList.add('active');
});

/************************************
 *                                  *
 *  BOOTSTRAP TOOLTIP TRIGGER       *
 *                                  *
 ************************************/
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle='tooltip']'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

/************************************
 *                                  *
 *  CONTACT FORM                    *
 *                                  *
 ************************************/
var form = document.getElementById('fs-frm');

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.querySelector('.toast-body');
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: 'application/json',
    },
  })
    .then((response) => {
      status.innerHTML = 'Thanks for your submission!';
      toastList.forEach((toast) => toast.show());
      form.reset();
    })
    .catch((error) => {
      status.innerHTML = 'Oops! There was a problem submitting your form';
      toastList.forEach((toast) => toast.show());
    });
}
form.addEventListener('submit', handleSubmit);

/************************************
 *                                  *
 *  TOAST FORM                      *
 *                                  *
 ************************************/
var toastElList = [].slice.call(document.querySelectorAll('.toast'));
var toastList = toastElList.map(function (toastEl) {
  return new bootstrap.Toast(toastEl);
});

/* Manual?
--------------------------------------
*/
/*
document.getElementById('toastbtn').onclick = function() {
	toastList.forEach(toast => toast.show());
    }
*/
