import Flooper from '../../dist/Flooper.js';

export default function beatlesDemo(){
  var demoFlooper = new Flooper({speed: 2});
  demoFlooper.init();

  document.querySelector(".js-flooper-pause").onclick = () => {
    if(!(demoFlooper.getState().paused)) toggleAnimation(document.querySelector(".js-flooper"), "paused");
    demoFlooper.pause();
    console.log("paused");
  };

  document.querySelector(".js-flooper-resume").onclick = () => {
    if(demoFlooper.getState().paused) toggleAnimation(document.querySelector(".js-flooper"), "paused");
    demoFlooper.resume();
    console.log("resumed");
  };

  // Add random delay to floating animation
  var elements = document.querySelectorAll(".js-flooper-item");
  for (var i = 0, len = elements.length; i < len; ++i) {
    elements[i].style.animationDelay = Math.random()*3 + "s";
  }
}
