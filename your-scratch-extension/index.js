const BlockType = require('../../extension-support/block-type');
const ArgumentType = require('../../extension-support/argument-type');
const TargetType = require('../../extension-support/target-type');

class Scratch3Canvas {

    constructor (runtime) {
        // Setup your extension here
    }

    /**
     * Returns the metadata about your extension.
     */
    getInfo () {
        return {
            // unique ID for your extension
            id: 'canvasExtension',

            // name that will be displayed in the Scratch UI
            name: 'Canvas',

            // colors to use for your extension blocks
            color1: '#4CAF50',  // green for Canvas-related blocks
            color2: '#8BC34A',  // lighter green

            // icons to display
            blockIconURI: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAFCAAAAACyOJm3AAAAFklEQVQYV2P4DwMMEMgAI/+DEUIMBgAEWB7i7uidhAAAAABJRU5ErkJggg==',
            menuIconURI: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAFCAAAAACyOJm3AAAAFklEQVQYV2P4DwMMEMgAI/+DEUIMBgAEWB7i7uidhAAAAABJRU5ErkJggg==',

            // your Scratch blocks
            blocks: [
                {
                    opcode: 'drawRectangle',

                    blockType: BlockType.COMMAND,
                    text: 'Draw rectangle with width [WIDTH] and height [HEIGHT] at position [X] [Y]',
                    terminal: false,
                    filter: [ TargetType.SPRITE, TargetType.STAGE ],
                    arguments: {
                        WIDTH: {
                            defaultValue: 100,
                            type: ArgumentType.NUMBER
                        },
                        HEIGHT: {
                            defaultValue: 50,
                            type: ArgumentType.NUMBER
                        },
                        X: {
                            defaultValue: 0,
                            type: ArgumentType.NUMBER
                        },
                        Y: {
                            defaultValue: 0,
                            type: ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: 'clearCanvas',

                    blockType: BlockType.COMMAND,
                    text: 'Clear the canvas',
                    terminal: false,
                    filter: [ TargetType.SPRITE, TargetType.STAGE ],
                    arguments: {}
                }
            ]
        };
    }

    /**
     * Implementation for drawing a rectangle on the canvas.
     */
    drawRectangle ({ WIDTH, HEIGHT, X, Y }) {
        // Assuming a canvas object exists on the stage
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        
        // Draw the rectangle
        ctx.beginPath();
        ctx.rect(X, Y, WIDTH, HEIGHT);
        ctx.fillStyle = 'blue'; // Example color
        ctx.fill();
    }

    /**
     * Clears the canvas.
     */
    clearCanvas () {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        
        // Clear the entire canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}

module.exports = Scratch3Canvas;
