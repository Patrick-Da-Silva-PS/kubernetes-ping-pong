// Third-party imports
import { registerAs } from '@nestjs/config';
import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

const YAML_CONFIG_FILENAME = (label: string) => [process.cwd(), "env_vars", process.env.NODE_ENV, `${label}.yaml`]

/**
 * @function yamlConfigLoader
 * @category Config
 * @description Loads YAML configuration file for environment variables. Uses a label to both identify the YAML file and register the configuration object.
 * @returns The JavaScript object form of the environment variables for the app's configuration. 
 */
const yamlConfigLoader = <ConfigType,>(label: string): ReturnType<typeof registerAs<ConfigType>> => registerAs<ConfigType>(
    label,
    () => {
        const loadedConfiguration = yaml.load(
            readFileSync(
                join(...YAML_CONFIG_FILENAME(label)),
                'utf8'
            ),
        ) as ConfigType

        return loadedConfiguration
    }
)

export default yamlConfigLoader