// Third-party imports
import { Test } from "@nestjs/testing"
import { get as deepGet } from "lodash"

// Global imports
import { mockedConfig } from "src/modules/config/__mocks__/configService.mock"

// Local imports
import { PlayController } from "../play.controller"
import { PlayService } from "../play.service"
import PlayServiceMock from "../__mocks__/playService.mock"

////////////////////////////////////////////////////////////////////////////////

describe("ConfigController", () => {
    let playController: PlayController

    beforeEach(async () => {
        const playModule = await Test.createTestingModule({
            controllers: [PlayController],
        })
            .useMocker((token) => {
                if (token === PlayService) {
                    return PlayServiceMock
                }
            })
            .compile()

        playController = playModule.get<PlayController>(PlayController)
    })

    describe("play", () => {
        it("should return the player ID", () => {
            const response = playController.play()

            expect(response).toEqual(deepGet(mockedConfig, "player.playerID"))
        })
    })
})