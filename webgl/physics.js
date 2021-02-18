import * as vec3 from '../node_modules/gl-matrix/esm/vec3.js';
export class Physics {
    constructor(gameObject) {
        this.gravityScale = -0.981;
        this.mass = 1;
        this.location = [0, 0, 0];
        this.velocity = [0, 0, 0];
        this.acceleration = [0, 0, 0];
        this.angularRotation = [0, 0, 0];
        this.angularVelocity = [0, 0, 0];
        this.angularAcceleration = [0, 0, 0];
        this.gameObject = gameObject;
        this.location = gameObject.transform.position;
    }
    update(deltaTime) {
        vec3.add(this.angularVelocity, this.angularVelocity, this.angularAcceleration);
        vec3.add(this.angularRotation, this.angularRotation, this.angularVelocity);
        this.angularAcceleration = [0, 0, 0];
        //Gravity
        vec3.add(this.acceleration, this.acceleration, [0, this.gravityScale * deltaTime, 0]);
        vec3.add(this.velocity, this.velocity, this.acceleration);
        vec3.add(this.location, this.location, this.velocity);
        this.acceleration = [0, 0, 0];
        //Apply drag force
        let drag = [0, 0, 0];
        vec3.copy(drag, this.velocity);
        vec3.normalize(drag, drag);
        const c = -6. * deltaTime;
        const speed = Math.pow(vec3.len(this.velocity), 2);
        vec3.mul(drag, drag, [c * speed, c * speed, c * speed]);
        this.addForce(drag);
        //Invisible ground
        if (this.location[1] < -5) {
            vec3.mul(this.velocity, this.velocity, [1, -0.8, 1]);
            this.location[1] = -5;
        }
        //Apply Friction
        if (this.location[1] == -5) {
            let friction = [0, 0, 0];
            vec3.copy(friction, this.velocity);
            vec3.normalize(friction, friction);
            const c = -0.1 * deltaTime;
            vec3.mul(friction, friction, [c, c, c]);
            this.addForce(friction);
        }
        this.gameObject.transform.position = this.location;
        this.gameObject.transform.rotation = this.angularRotation;
    }
    addForce(force) {
        // F=ma
        // a=F/m
        const f = [0, 0, 0];
        vec3.div(f, force, [this.mass, this.mass, this.mass]);
        vec3.add(this.acceleration, this.acceleration, f);
        vec3.add(this.angularAcceleration, this.angularAcceleration, [0, 0, f[0]]);
    }
}
