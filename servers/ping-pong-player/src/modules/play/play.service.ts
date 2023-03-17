// Third-party imports
import { Injectable, Logger } from "@nestjs/common"
import { ConfigService } from "@nestjs/config"

// Global imports
import { nowTimestamp } from "src/utils"

// Local imports

////////////////////////////////////////////////////////////////////////////////

@Injectable()
export class PlayService {
    private readonly logger = new Logger(PlayService.name)

    constructor(private readonly configService: ConfigService) { }

    play(): string {
        this.logger.verbose(`Ping: ${nowTimestamp()}`)
        return this.configService.get<string>("player.playerID")
    }
}
