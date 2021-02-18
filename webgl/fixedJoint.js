import * as vec3 from '../node_modules/gl-matrix/esm/vec3.js';
import { Physics } from './physics.js';
export class FixedJoint {
    constructor(gameObject) {
        this.originLocation = [0, 0, -6];
        this.a = Math.PI / 4;
        this.r = 3;
        this.angularRotation = [0, 0, Math.PI / 4];
        this.angularVelocity = [0, 0, 0];
        this.angularAcceleration = [0, 0, 0.0];
        this.gameObject = gameObject;
        this.physics = gameObject.getComponent(Physics);
        if (!this.physics) {
            throw new Error('FixedJoint requires Physics component. Please make sure your object has it BEFORE adding a FixedJoint');
        }
    }
    update(deltaTime) {
        const gravity = -0.981;
        const a = (gravity / this.r) * Math.sin(this.angularRotation[2] - Math.PI / 2) * deltaTime;
        vec3.add(this.angularAcceleration, this.angularAcceleration, [0, 0, a]);
        vec3.add(this.angularVelocity, this.angularVelocity, this.angularAcceleration);
        vec3.mul(this.angularVelocity, this.angularVelocity, [0.995, 0.995, 0.995]);
        vec3.add(this.angularRotation, this.angularRotation, this.angularVelocity);
        this.angularAcceleration = [0, 0, 0];
        const xPos = this.r * Math.cos(-this.angularRotation[2]);
        const yPos = this.r * Math.sin(-this.angularRotation[2]);
        this.physics.location = [this.originLocation[0] + xPos, this.originLocation[1] + yPos, this.physics.location[2]];
    }
}
