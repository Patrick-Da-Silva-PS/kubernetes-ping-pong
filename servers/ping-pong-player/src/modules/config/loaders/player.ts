// Third-party imports
import { registerAs } from "@nestjs/config"
import { randomUUID } from "crypto"

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

export interface PlayerConfig {
    playerID: string
}

/**
 * @function playerLoader
 * @category Config
 * @description Generates player-related configuration, including a unique identifier for this instance of a ping-pong player in the Kubernetes ping pong game.
 * @returns {PlayerIDConfig} The player-related configuration.
 */
const playerLoader = registerAs<PlayerConfig>(
    "player",
    () => ({
        playerID: randomUUID()
    })
)

export default playerLoader