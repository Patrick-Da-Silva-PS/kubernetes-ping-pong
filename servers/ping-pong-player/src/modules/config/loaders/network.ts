// Third-party imports

// Global imports

// Local imports
import yamlLoader from './yaml'

////////////////////////////////////////////////////////////////////////////////

export interface NetworkConfig {
    server_port: number
}

/**
 * @function networkLoader
 * @category Config
 * @description Loads networking-related configuration.
 * @returns Networking configuration.
 */
const networkLoader = yamlLoader<NetworkConfig>("network")

export default networkLoader