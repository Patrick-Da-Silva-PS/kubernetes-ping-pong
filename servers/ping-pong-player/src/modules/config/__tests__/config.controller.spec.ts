// Third-party imports
import { Test } from "@nestjs/testing"

// Global imports

// Local imports
import { ConfigController } from "../config.controller"
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

describe("ConfigController", () => {
    let configController: ConfigController

    beforeEach(async () => {
        const configModule = await Test.createTestingModule({
            controllers: [ConfigController],
        })
            .useMocker((token) => {
                if (token === LoadedConfigService) {
                    return { getInstanceConfig: jest.fn().mockReturnValue(mockedConfig) }
                }
            })
            .compile()

        configController = configModule.get<ConfigController>(ConfigController)
    })

    describe("config", () => {
        it("should return the configuration generated by the loadedConfigService", () => {
            const response = configController.config()

            expect(response).toEqual(mockedConfig)
        })
    })
})