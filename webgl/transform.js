export class Transform {
    constructor(position, rotation, scale) {
        this.position = [0, 0, 0];
        this.rotation = [0, 0, 0];
        this.scale = [1, 1, 1];
        this.position = position != null ? position : this.position;
        this.rotation = rotation != null ? rotation : this.rotation;
        this.scale = scale != null ? scale : this.scale;
        ;
    }
}
