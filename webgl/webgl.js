//GAME SCRIPT
import { GameEngine } from './renderer.js';
import { GameObject } from './gameObject.js';
import { loadTexture } from './util.js';
import { Physics } from './physics.js';
let currentAnimationFrame;
const cameraScale = -100;
let deltaTime = 0;
let then = 0;
let mouseX = 0;
let mouseY = 0;
let mouseXDist = 0;
let mouseYDist = 0;
let mouseMoveBall = false;

// Start
export const main = () => {
    try {
        const gameEngine = new GameEngine(document.body.clientWidth, 800, cameraScale); //document.body.clientWidth
        gameEngine.clearCanvas();

        const plane = new GameObject([0, 0, -6], gameEngine.meshList["plane"], null);
        plane.transform.scale = [100, 100, 100];
        gameEngine.scene.push(plane);

        requestAnimationFrame((time) => update(gameEngine, time));
    }
    catch (err) {
        console.error(err);
    }
}

function update(gameEngine, time) {
    time *= 0.001; // convert to seconds
    deltaTime = time - then;
    then = time;
    gameEngine.scene.forEach(gameObject => {
        gameObject.components.forEach(component => {
            component.update(deltaTime);
        });
    });
    gameEngine.drawScene();
    currentAnimationFrame = requestAnimationFrame((time) => update(gameEngine, time));
}
