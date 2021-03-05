import {Coordinate} from "./Coordinate";
import {Direction} from "./Direction";
import {format} from "util";
import deepEqual = require("deep-equal");

export class Position {
    private coordinate: Coordinate;
    private direction: Direction;

    constructor(coordinate: Coordinate, direction: Direction) {
        this.coordinate = coordinate;
        this.direction = direction;
    }

    turnLeft(): Position {
        return new Position(this.coordinate, this.direction.turnLeft())
    }

    turnRight(): Position {
        return new Position(this.coordinate, this.direction.turnRight())
    }

    moveForward() {
        let coordinate: Coordinate = new Coordinate(0, 0);
        let s = this.direction.enumValue();
        if (s === "NORTH") {
            coordinate = this.coordinate.moveNorth()
        } else if (s === "EAST") {
            coordinate = this.coordinate.moveEast()
        } else if (s === "SOUTH") {
            coordinate = this.coordinate.moveSouth()
        } else if (s === "WEST") {
            coordinate = this.coordinate.moveWest();
        }
        return new Position(coordinate, this.direction);
    }

    toString(): string {
        return format("%s %s", this.coordinate.toString(), this.direction.toString())
    }

    equals(o: Position): boolean {
        return deepEqual(this.coordinate, o.coordinate) && this.direction === o.direction;
    }


}
