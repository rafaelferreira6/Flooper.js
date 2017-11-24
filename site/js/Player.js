import {toggleAnimation} from './utils';

export function Player(){
  let pauseControl = document.querySelector(".js-flooper-pause"),
      playControl = document.querySelector(".js-flooper-play"),
      curFlooper = window.curFlooper,
      floopers = window.flooperInstances,
      selectbox;


  function handlePause(){
    if(!curFlooper.getState().paused){
      toggleAnimation(curFlooper.flooper, "paused");
    }

    curFlooper.pause();
    console.log(`${curFlooper.uid} is paused`);
  }

  function handlePlay(){
    if(curFlooper.getState().paused){
      toggleAnimation(curFlooper.flooper, "paused");
    }

    curFlooper.play();
    console.log(`${curFlooper.uid} is playing`);
  }


  function buildSelectbox(){
    var container = document.querySelector('.js-player-selectbox-holder');
    selectbox = document.createElement('select');
    selectbox.classList.add('js-player-selectbox');

     for (var i = 0; i < floopers.length; i++) {
      var opt = document.createElement("option");
      opt.value = flooperInstances[i].uid;
      opt.innerHTML = floopers[i].options.name; // whatever property it has

      // then append it to the select element
      selectbox.appendChild(opt);
    }

    container.appendChild(selectbox);
  }

  function onSelectChange(e){
    var selectedFlooper = e.target.selectedOptions[0].value;

    curFlooper = flooperInstances.find(flooper => flooper.uid === selectedFlooper );
    console.log(curFlooper);
  }

  function attachEvents(){
    pauseControl.addEventListener('click', handlePause, false);
    playControl.addEventListener('click', handlePlay, false);

    selectbox.addEventListener('change', onSelectChange, false);
  }

  function init(){
    buildSelectbox();
    attachEvents();
  }

  init();
}
