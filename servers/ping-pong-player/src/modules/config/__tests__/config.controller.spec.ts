// Third-party imports
import { Test } from "@nestjs/testing"

// Global imports
import { LoadedConfigServiceMock, mockedConfig } from "../__mocks__"


// Local imports
import { ConfigController } from "../config.controller"
import { LoadedConfigService } from "../config.service"

////////////////////////////////////////////////////////////////////////////////

describe("ConfigController", () => {
    let configController: ConfigController

    beforeEach(async () => {
        const configModule = await Test.createTestingModule({
            controllers: [ConfigController],
        })
            .useMocker((token) => {
                if (token === LoadedConfigService) {
                    return LoadedConfigServiceMock
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