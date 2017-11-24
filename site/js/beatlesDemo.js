import {toggleAnimation} from './utils';

export function beatlesDemo(){

  var beatlesFlooper = flooperInstances.find(inst => inst.uid.startsWith('beatles') === true);
  console.log(beatlesFlooper);

   // Add random delay to floating animation
  var elements = beatlesFlooper.flooperItems;
  for (var i = 0, len = elements.length; i < len; ++i) {
    elements[i].style.animationDelay = Math.random()*3 + "s";
  }
}
