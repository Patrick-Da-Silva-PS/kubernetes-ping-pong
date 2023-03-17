// Third-party imports
import { registerAs } from "@nestjs/config"

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

/**
 * @function networkLoader
 * @category Config
 * @description Loads networking-related configuration.
 * @returns Networking configuration.
 */
const networkLoader = registerAs(
    "network",
    () => ({
        server_port: 3456
    })
)

export default networkLoader