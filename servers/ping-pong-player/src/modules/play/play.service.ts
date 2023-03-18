// Third-party imports
import { Injectable, Logger } from "@nestjs/common"
import { ConfigService } from "@nestjs/config"

// Global imports
import { nowTimestamp } from "src/utils"

// Local imports

////////////////////////////////////////////////////////////////////////////////

/**
 * @class PlayService
 * @category Play
 * @description Service used to determine the functionality and rules of the ping-pong game from the player's perspective.
 */
@Injectable()
export class PlayService {
    private readonly logger = new Logger(PlayService.name)

    constructor(private readonly configService: ConfigService) { }

    /**
     * @method play
     * @description Determines the behavior of the player when he receives a ball (i.e. a request from the ball generator). Logs its behavior for the log aggregator and returns its own ID for now. Behavior in the complete setting TBD.
     * @returns 
     */
    play(): string {
        this.logger.verbose(`Ping: ${nowTimestamp()}`)
        return this.configService.get<string>("player.playerID")
    }
}
