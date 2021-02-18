// import * as vec3 from '../node_modules/gl-matrix/esm/vec3.js';
import { Transform } from './transform.js';
export class GameObject {
    constructor(position, mesh, texture) {
        this.components = [];
        this.transform = new Transform(position);
        this.mesh = mesh;
        this.texture = texture;
    }
    addComponent(component) {
        this.components.push(component);
        return component;
    }
    getComponent(component) {
        return this.components.find(function (element) {
            return element.constructor == component;
        });
    }
}
