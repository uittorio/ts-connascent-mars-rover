import {InitializationCommand} from "../main/commands/InitializationCommand";
import {Coordinate} from "../main/model/Coordinate";
import {StartingPositionCommand} from "../main/commands/StartingPositionCommand";
import {Position} from "../main/model/Position";
import {TurnLeftCommand} from "../main/commands/TurnLeftCommand";
import {TurnRightCommand} from "../main/commands/TurnRightCommand";
import {MoveForwardCommand} from "../main/commands/MoveForwardCommand";
import {MarsRoverEngine} from "../main/app/MarsRoverEngine";
import { Direction, DirectionEnum } from '../main/model/Direction';

describe('MarsRoverEngine ', () => {
    beforeEach(() => {

    })

    it.each([
        [
            [
                new InitializationCommand(new Coordinate(5, 5)),
                new StartingPositionCommand(new Position(new Coordinate(2, 2), new Direction(DirectionEnum.NORTH)))
            ],
            new Position(new Coordinate(2, 2), new Direction(DirectionEnum.NORTH))
        ],
        [[new InitializationCommand(new Coordinate(5, 5)),
            new StartingPositionCommand(new Position(new Coordinate(2, 2), new Direction(DirectionEnum.NORTH))),
            new TurnLeftCommand()
        ], new Position(new Coordinate(2, 2), new Direction(DirectionEnum.WEST))],
        [[new InitializationCommand(new Coordinate(5, 5)),
            new StartingPositionCommand(new Position(new Coordinate(2, 2), new Direction(DirectionEnum.NORTH))),
            new TurnRightCommand()
        ], new Position(new Coordinate(2, 2), new Direction(DirectionEnum.EAST))],
        [
            [
                new InitializationCommand(new Coordinate(5, 5)),
                new StartingPositionCommand(new Position(new Coordinate(2, 2), new Direction(DirectionEnum.NORTH))),
                new MoveForwardCommand()
            ],
            new Position(new Coordinate(2, 3), new Direction(DirectionEnum.NORTH))]
    ])('should execute commands %s then end in %s position', (commands, finalPosition) => {
        let roverEngine: MarsRoverEngine = new MarsRoverEngine();

        roverEngine.execute(Array.from(commands))

        let position = roverEngine.getPosition();
        expect(position).toStrictEqual(finalPosition);
    })
})
