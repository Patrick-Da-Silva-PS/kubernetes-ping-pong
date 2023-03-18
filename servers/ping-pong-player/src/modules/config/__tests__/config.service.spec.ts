// Third-party imports
import { Test } from "@nestjs/testing"
import { ConfigService } from "@nestjs/config"

// Global imports

// Local imports
import { LoadedConfigService } from "../config.service"
import type { ConfigType } from "../types"

////////////////////////////////////////////////////////////////////////////////

const mockedConfig: ConfigType = {
    network: {
        server_port: 1234
    },
    player: {
        playerID: "MyRandomPlayerID"
    }
}

describe("LoadedConfigService", () => {
    let loadedConfigService: LoadedConfigService

    beforeEach(async () => {
        const configModule = await Test.createTestingModule({
            providers: [LoadedConfigService],
        })
            .useMocker((token) => {
                if (token === ConfigService) {
                    return {
                        get: jest.fn().mockImplementation((key: string) => mockedConfig[key])
                    }
                }
            })
            .compile()

        loadedConfigService = configModule.get<LoadedConfigService>(LoadedConfigService)
    })

    describe("getInstanceConfig", () => {
        it("should return the configuration loaded by the NestJS ConfigService", () => {
            const loadedConfig = loadedConfigService.getInstanceConfig()

            expect(loadedConfig).toEqual(mockedConfig)
        })
    })
})