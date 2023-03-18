// Third-party imports

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

/**
 * @function nowTimestamp
 * @category Utils
 * @description Returns the current timestamp in ISO format.
 * @returns The current timestamp in ISO format.
 */
const nowTimestamp = () => new Date(Date.now()).toISOString()

export default nowTimestamp