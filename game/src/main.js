
//
// const input = new Input();
// const display = new Display();
// const game = new Game();
//
// const engine = new Engine(1000/30, init, render, update, release);

import {data} from "../../engine/src/leaf.js";
import {display} from "../../engine/src/leaf.js";


window.onload = function() {
    display.init();
    display.clearScreen();
    data.loadImage('player', 'player.png', 10, 10).then( () => {
        display.drawImage('player', 20, 20, 150, 150);
    });
}