// Third-party imports

// Global imports

// Local imports
import yamlConfigLoader from './yaml'
import type { NetworkConfig } from './types'

////////////////////////////////////////////////////////////////////////////////

/**
 * @function networkLoader
 * @category Config
 * @description Loads networking-related configuration.
 * @returns Networking configuration.
 */
const networkLoader = yamlConfigLoader<NetworkConfig>("network")

export default networkLoader