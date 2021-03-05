import { Position } from "../model/Position";
import { ICommand } from "../commands/ICommand";
import { Coordinate } from '../model/Coordinate';
import { Direction, DirectionEnum } from '../model/Direction';

export class MarsRoverEngine {
    private position: Position = new Position(new Coordinate(0, 0), new Direction(DirectionEnum.NORTH));

    execute(commands: Array<ICommand>): void {
        for (let command of commands) {
            this.position = command.execute(this.position);
        }
    }
    getPosition(): Position {
        return this.position;
    }


}
