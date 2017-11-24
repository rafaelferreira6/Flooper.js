import {polyfillStringStartsWith} from './utils';
import Flooper from '../../dist/Flooper.js';

export function initialiseDemoInstances(){
  window.flooperInstances = [];
  var $floopers = [].slice.call(document.querySelectorAll('.js-flooper'));

  $floopers.forEach(function(flooper, i){
    flooperInstances[i] = new Flooper(flooper);
  });

  window.curFlooper = flooperInstances[0];
}


export function beatlesDemo(){

  var beatlesFlooper = flooperInstances.find(inst => inst.uid.startsWith('beatles') === true);

   // Add random delay to floating animation
  var elements = beatlesFlooper.flooperItems;
  for (var i = 0, len = elements.length; i < len; ++i) {
    elements[i].style.animationDelay = Math.random()*3 + "s";
  }
}
