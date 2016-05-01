var modal = document.querySelector('.Modal');
var modalTrigger = document.querySelector('.Modal-trigger');
var overlay = document.querySelector('.Overlay');
var modalClose = document.querySelector('.Modal-close');

var toggle = function() {
  modalTrigger.classList.remove('is-shaking');
  modal.classList.toggle('is-visible');
  overlay.classList.toggle('is-visible');
  document.body.classList.toggle('is-expanded');
};

modalTrigger.addEventListener('click', toggle);
overlay.addEventListener('click', toggle);
modalClose.addEventListener('click', toggle);
