// Third-party imports
import { get as deepGet } from "lodash"

// Global imports
import { mockedConfig } from "src/modules/config/__mocks__/configService.mock"

// Local imports

////////////////////////////////////////////////////////////////////////////////

const PlayServiceMock = {
    play: (
        jest
            .fn()
            .mockImplementation(
                () => deepGet(mockedConfig, "player.playerID")
            )
    ),
}

export default PlayServiceMock