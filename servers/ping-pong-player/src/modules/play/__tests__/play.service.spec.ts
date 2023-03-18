// Third-party imports
import { Test } from "@nestjs/testing"
import { ConfigService } from "@nestjs/config"
import { get as deepGet } from "lodash"

// Global imports
import type { ConfigType } from "src/modules/config"

// Local imports
import { PlayService } from "../play.service"

////////////////////////////////////////////////////////////////////////////////

const mockedConfig: ConfigType = {
    network: {
        server_port: 1234
    },
    player: {
        playerID: "MyRandomPlayerID"
    }
}

describe("PlayService", () => {
    let playService: PlayService

    beforeEach(async () => {
        const playModule = await Test.createTestingModule({
            providers: [PlayService],
        })
            .useMocker((token) => {
                if (token === ConfigService) {
                    return {
                        get: (
                            jest
                                .fn()
                                .mockImplementation((key: string) => deepGet(mockedConfig, key))
                        )
                    }
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