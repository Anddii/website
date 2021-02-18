import * as vec3 from '../node_modules/gl-matrix/esm/vec3.js';
import { Physics } from './physics.js';
export class SpringJoint {
    constructor(gameObject) {
        this.originLocation = [0, 0, -6];
        this.restLength = 4;
        this.damper = 3;
        this.angularRotation = [0, 0, Math.PI / 4];
        this.angularVelocity = [0, 0, 0];
        this.angularAcceleration = [0, 0, 0.0];
        this.gameObject = gameObject;
        this.physics = gameObject.getComponent(Physics);
        if (!this.physics) {
            throw new Error('SpringJoint requires Physics component. Please make sure your object has it BEFORE adding a SpringJoint');
        }
    }
    update(deltaTime) {
        let spring = [0, 0, -6];
        vec3.sub(spring, this.gameObject.transform.position, this.originLocation);
        const currentLength = vec3.len(spring);
        vec3.normalize(spring, spring);
        const k = 0.8;
        const stretch = currentLength - this.restLength;
        vec3.mul(spring, spring, [-k * stretch, -k * stretch, -k * stretch]);
        vec3.sub(spring, spring, [this.damper * this.physics.velocity[0], this.damper * this.physics.velocity[1], this.damper * this.physics.velocity[2]]);
        vec3.mul(spring, spring, [deltaTime, deltaTime, deltaTime]);
        this.physics.addForce(spring);
    }
}
