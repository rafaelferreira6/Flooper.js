import {consoleColophon} from './consoleColophon';
import {
  initialiseDemoInstances,
  beatlesDemo
} from './demos.js';
import { Player } from './Player.js';

consoleColophon();

// INIT
document.addEventListener('DOMContentLoaded', function(){
  initialiseDemoInstances();
  Player();
  beatlesDemo();

}, false);





