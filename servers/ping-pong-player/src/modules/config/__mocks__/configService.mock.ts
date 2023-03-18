// Third-party imports
import { get as deepGet } from "lodash"

// Global imports

// Local imports
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

const NestJSConfigServiceMock = {
    get: (
        jest
            .fn()
            .mockImplementation(
                (key: string) => deepGet(mockedConfig, key)
            )
    ),
}

export default NestJSConfigServiceMock