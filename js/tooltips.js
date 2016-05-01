var makeTooltips = function() {
  var tooltips = document.querySelectorAll('.tooltip');
  var ids = [];
  var tempId = 0;

  var hasAlreadyTooltips = function(nodes) {
    var occurence = 0;
    Array.prototype.map.call(nodes, function(node) {
      // if element is tooltip-box or if there are more tooltip boxes
      if (node.className === 'tooltip-box' || occurence >= 1)
        occurence++;
    });

    return occurence;
  };

  var create = function(el) {
    if (hasAlreadyTooltips(el.childNodes)) return;

    var div = document.createElement('div');
    var text = document.createTextNode(el.title);
    div.appendChild(text);
    div.classList.add('tooltip-box');
    el.appendChild(div);
  };

  var attach = function() {
    create(this);
  };

  Array.prototype.map.call(tooltips, function(tooltip) {
    tooltip.addEventListener('mouseover', attach);
  })
};

setTimeout(makeTooltips, 500);
