
//
// const input = new Input();
// const display = new Display();
// const game = new Game();
//
// const engine = new Engine(1000/30, init, render, update, release);

import {Data} from "../../engine/src/leaf.js";
import {Display} from "../../engine/src/leaf.js";


window.onload = function() {
    Display.init();
    Display.clearScreen();
    Data.loadImage('player', 'player.png', 10, 10).then( () => {
        Display.drawImage('player', 20, 20, 150, 150);
    });
}