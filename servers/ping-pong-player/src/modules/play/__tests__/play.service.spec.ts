// Third-party imports
import { Test } from "@nestjs/testing"
import { ConfigService } from "@nestjs/config"
import { get as deepGet } from "lodash"

// Global imports
import NestJSConfigServiceMock, { mockedConfig } from "src/modules/config/__mocks__/configService.mock"

// Local imports
import { PlayService } from "../play.service"

////////////////////////////////////////////////////////////////////////////////

describe("PlayService", () => {
    let playService: PlayService

    beforeEach(async () => {
        const playModule = await Test.createTestingModule({
            providers: [PlayService],
        })
            .useMocker((token) => {
                if (token === ConfigService) {
                    return NestJSConfigServiceMock
                }
            })
            .compile()

        playService = playModule.get<PlayService>(PlayService)
    })

    describe("play", () => {
        it("should return the configuration loaded by the NestJS ConfigService", () => {
            const result = playService.play()

            expect(result).toEqual(deepGet(mockedConfig, "player.playerID"))
        })
    })
})