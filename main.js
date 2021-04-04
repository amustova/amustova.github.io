/***************************************
 *                                     *
 * IMMA KEEP THIS FOR FUTURE REFERENCE *
 *                                     *
 ***************************************/
/*
var toogleLinks = document.querySelectorAll('.nav-link');
var toogleBlocks = document.querySelectorAll('.sxtion');

// Loop through all links
Array.from(toogleLinks).forEach(link => {
	// add click event
    link.addEventListener('click', function(event) {
    	// Hide all blocks
    	Array.from(toogleBlocks).forEach(item => item.classList.add('d-none'));
        // Get target block
        var target = this.getAttribute('href');
        // Show target block
        document.querySelector(target).classList.remove('d-none');
    }, false);
});
*/

/***************************************
 *                                     *
 * IMMA KEEP THIS FOR FUTURE REFERENCE *
 *                                     *
 ***************************************/
/*
var toogleLinks = document.querySelectorAll('[data-toggle]');

// Loop through all links
Array.from(toogleLinks).forEach(link => {
        // get tooble elements
        var elementsSelector = link.getAttribute('data-toggle')
        var elements = document.querySelectorAll(elementsSelector);
	// add click event
        link.addEventListener('click', function(event) {
        // Hide all blocks
        Array.from(elements).forEach(item => item.classList.add('d-none')); // setAttribute('hidden', true));
        // Get target block
        var target = this.getAttribute('href');
        // Show target block
        document.querySelector(target).classList.remove('d-none'); // removeAttribute('hidden')
    }, false);
});
 */

/************************************
 *                                  *
 * HIDE NAVBAR ONCLICK EVERYWHERE   *
 *                                  *
 ************************************/
var body = document.querySelector('body');
var nbCollapse = document.querySelector('.navbar-collapse');
var hide = new bootstrap.Collapse(nbCollapse, {toggle: false});

body.addEventListener('click', function(){
    if (nbCollapse.classList.contains('show')){
      hide.toggle();
      }
    }
  );
  
/************************************
 *                                  *
 * HIDE & COLLAPSE NAVBAR ON SCROLL *
 *                                  *
 ************************************/
var navbar = document.querySelector('#navigation');
var nbHeight = parseFloat(getComputedStyle(navbar, null).height);
var prevScrollpos = window.pageYOffset;

window.onscroll = function(){
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos){
      navbar.classList.add('scroll-down');
      navbar.classList.remove('scroll-up');
      if (nbCollapse.classList.contains('show')){
        hide.toggle();
      }
  } else {
      navbar.classList.remove('scroll-down');
      navbar.classList.add('scroll-up');
      if (nbCollapse.classList.contains('show')){
        hide.toggle();
      }
  }
  prevScrollpos = currentScrollPos;
}

/************************************
 *                                  *
 * CAROUSEL INDICATOR add active    *
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
 * CAROUSEL INDICATOR jquery ver    *
 *                                  *
 ************************************/
/*
$('.carousel').bind('slide.bs.carousel', function (e) {
    var index = $(e.relatedTarget).index();

    $('[data-target="#' + $(this).prop('id') + '"]').each(function (i) {
        if (i === index) {
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }
    });
});
*/

/************************************
 *                                  *
 *  BOOTSTRAP TOOLTIP TRIGGER       *
 *                                  *
 ************************************/
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})