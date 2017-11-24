//http://youmightnotneedjquery.com/#toggle_class
export function toggleAnimation(el, className){
  if (el.classList) {
    el.classList.toggle(className);
  } else {
    var classes = el.className.split(' ');
    var existingIndex = classes.indexOf(className);

    if (existingIndex >= 0)
    classes.splice(existingIndex, 1);
    else
    classes.push(className);

    el.className = classes.join(' ');
  }
};

export function polyfillStringStartsWith(){
  if (!String.prototype.startsWith) {
    String.prototype.startsWith = function(searchString, position) {
      position = position || 0;
      return this.indexOf(searchString, position) === position;
    };
  }
}
