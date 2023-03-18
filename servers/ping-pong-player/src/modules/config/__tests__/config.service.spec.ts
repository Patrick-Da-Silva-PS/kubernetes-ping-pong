// Third-party imports
import { Test } from "@nestjs/testing"
import { ConfigService } from "@nestjs/config"

// Global imports
import NestJSConfigServiceMock, { mockedConfig } from "../__mocks__/configService.mock"

// Local imports
import { LoadedConfigService } from "../config.service"

////////////////////////////////////////////////////////////////////////////////

describe("LoadedConfigService", () => {
    let loadedConfigService: LoadedConfigService

    beforeEach(async () => {
        const configModule = await Test.createTestingModule({
            providers: [LoadedConfigService],
        })
            .useMocker((token) => {
                if (token === ConfigService) {
                    return NestJSConfigServiceMock
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