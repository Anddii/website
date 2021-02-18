export class Mesh {
    constructor(offset, positions) {
        this.offset = offset;
        this.positions = positions;
        this.vertexCount = positions.length / 3;
    }
}
