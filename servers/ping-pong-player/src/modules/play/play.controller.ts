// Third-party imports
import { Controller, Get } from "@nestjs/common"

// Global imports

// Local imports
import { PlayService } from "./play.service"

////////////////////////////////////////////////////////////////////////////////


@Controller("/play")
export class PlayController {
    constructor(private readonly playService: PlayService) { }

    @Get()
    play(): any {
        return this.playService.play()
    }
}
