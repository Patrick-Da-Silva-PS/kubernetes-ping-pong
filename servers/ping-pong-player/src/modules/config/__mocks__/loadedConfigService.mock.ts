// Third-party imports

// Global imports

// Local imports
import NestJSConfigServiceMock from "./configService.mock"
import type { ConfigType } from "../types"

////////////////////////////////////////////////////////////////////////////////

export const mockedConfig: ConfigType = {
    network: {
        server_port: 1234
    },
    player: {
        playerID: "MyRandomPlayerID"
    }
}

const LoadedConfigServiceMock = {
    getInstanceConfig: () => ({
        network: NestJSConfigServiceMock.get("network"),
        player: NestJSConfigServiceMock.get("player"),
    })
}

export default LoadedConfigServiceMock