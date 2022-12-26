// ======================================================================
// Leaf2D Game Engine Source Code.
// Created by Marcin "FoXcodeZ" Grabowy.
// License: MIT
// ======================================================================

import {LeafData} from "./leaf.data.js";

// Helper function
function resize(event) {
    LeafDisplay.instance.resizeCanvas();
    // @TODO clearScreen is temporary only.
    LeafDisplay.instance.clearScreen();
}

export class LeafDisplay {
    constructor() {
        if(LeafDisplay.instance)
        {
            return LeafDisplay.instance;
        }
        this._canvas = {};
        this._context = {};
        LeafDisplay.instance = this;
        window.addEventListener("resize",  resize);
    }

    _createCanvas() {
        this._canvas = document.createElement('canvas');
        this._canvas.id = 'Leaf2D_Engine';
        document.body.appendChild(this._canvas);
    }

    _createContext() {
        this._context = this._canvas.getContext('2d');
    }

    init(width = 0, height = 0) {
        console.log(`Graphics::init(${width}, ${height})`);
        this._createCanvas();
        this.resizeCanvas(width, height);
        this._createContext();
    }

    resizeCanvas(width = 0, height = 0) {
        if(width === 0 || height === 0) {
            this._canvas.width = window.innerWidth;
            this._canvas.height = window.innerHeight;
            this.applyFullscreenStyle();
        } else {
            this._canvas.width = width;
            this._canvas.height = height;
        }
    }

    clearScreen(color='#00bfff') {
        this._context.fillStyle = color;
        this._context.fillRect(0, 0, this._canvas.width, this._canvas.height);
    }

    applyFullscreenStyle(){
        document.body.style.margin = '0';
        document.body.style.padding = '0';
        document.body.style.width = '100%'
        document.body.style.height = '100%';
        document.body.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    drawImage(alias, positionX = 0, positionY = 0, width = 0, height = 0) {
        const img = LeafData.instance.getImage(alias);
        if(width === 0 || height === 0) {
            width = img.width;
            height = img.height;
        }
        this._context.drawImage(img, positionX, positionY, width, height);
    }
}


