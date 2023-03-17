// Third-party imports
import { Injectable, Logger } from "@nestjs/common"

// Global imports
import { PLAYER_ID } from "src/constants"
import { nowTimestamp } from "src/utils"

// Local imports

////////////////////////////////////////////////////////////////////////////////

@Injectable()
export class PlayService {
    private readonly logger = new Logger(PlayService.name)

    play(): string {
        this.logger.verbose(`Ping: ${nowTimestamp()}`)
        return PLAYER_ID
    }
}
