// Third-party imports
import { Controller, Get, Header } from "@nestjs/common"

// Global imports

// Local imports
import { PlayService } from "./play.service"

////////////////////////////////////////////////////////////////////////////////


@Controller("/play")
export class PlayController {
    constructor(private readonly playService: PlayService) { }

    @Get()
    @Header("Connection", "close")
    play() {
        return this.playService.play()
    }
}

