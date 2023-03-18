// Third-party imports
import { registerAs } from '@nestjs/config'

// Global imports

// Local imports
import { mockedConfig } from '../../__mocks__'

////////////////////////////////////////////////////////////////////////////////

const mockedYamlConfigLoader = <ConfigType,>(label: string): ReturnType<typeof registerAs<ConfigType>> => registerAs<ConfigType>(
    label,
    () => mockedConfig[label]
)

export default mockedYamlConfigLoader