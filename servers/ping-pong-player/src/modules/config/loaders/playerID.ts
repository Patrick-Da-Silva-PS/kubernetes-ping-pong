// Third-party imports
import { registerAs } from "@nestjs/config"
import { randomUUID } from "crypto"

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

/**
 * @function playerIDLoader
 * @category Config
 * @description Generates a unique identifier for this instance of a ping-pong player in the Kubernetes ping pong game.
 * @returns {string} A unique string identifier for the server.
 */
const playerIDLoader = registerAs(
    "player",
    () => ({
        playerID: randomUUID()
    })
)

export default playerIDLoader