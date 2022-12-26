// ======================================================================
// Leaf2D Game Engine Source Code.
// Created by Marcin "FoXcodeZ" Grabowy.
// License: MIT
// ======================================================================

export class LeafData {
    constructor() {
        if(LeafData.instance) {
            return LeafData.instance;
        }
        this._images = {};
        LeafData.instance = this;
    }

    loadImage(alias, filename) {
        return new Promise((resolve, reject) => {
            const image = new Image();
            image.src = filename;
            image.addEventListener('load', () => {
                this._images[alias] = image;
                console.log(`Image ${alias} (${filename}) loaded correctly.`);
                resolve();
            });
            image.addEventListener('error', () => {
                reject(new Error(`Failed to load image ${alias} (${filename}).`));
            });
        });
    }

    getImage(alias) {
        if(this._images[alias]) {
            return this._images[alias];
        }
        else {
            return false;
        }
    }
}