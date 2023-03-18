// Third-party imports
import { Module } from "@nestjs/common"

// Global imports

// Local imports
import { PlayController } from "./play.controller"
import { PlayService } from "./play.service"

////////////////////////////////////////////////////////////////////////////////

@Module({
    providers: [PlayService],
    controllers: [PlayController],
})
export class PlayModule { }
