var classes = ['orange', 'blue', 'purple'];
var body = document.querySelector('body');
var refreshBtn = document.querySelector('.RefreshButton');

var changeBodyBg = function() {
  var currentClass = body.classList[0];
  body.classList.remove(currentClass);

  var filtered = classes.filter(function(item) {
    return (currentClass === 'bg-' + item) ? false : true;
  });

  var randClass = 'bg-' + filtered[Math.floor(Math.random() * filtered.length)];

  body.classList.add(randClass);
};

refreshBtn.addEventListener('click', changeBodyBg);
