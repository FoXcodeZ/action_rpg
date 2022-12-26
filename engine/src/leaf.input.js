// ======================================================================
// Leaf2D Game Engine Source Code.
// Created by Marcin "FoXcodeZ" Grabowy.
// License: MIT
// ======================================================================

import {KeyCode} from "./leaf.keycode.js";

export class LeafInput {
    constructor() {
        if(LeafInput.instance) {
            return LeafInput.instance;
        }
        LeafInput.instance = this;

        this.keysDown = {};

        window.addEventListener('keydown', (event) => {
           this.keysDown[event.key] = true;
        });

        window.addEventListener('keyup', (event) => {
            this.keysDown[event.key] = false;
        });
    }

    /**
     *
     * @param {KeyCode} key
     */
    isKeyDown(key) {
        return this.keysDown[key] || false;
    }
}