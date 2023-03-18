// Third-party imports
import { Injectable } from "@nestjs/common"
import { ConfigService } from "@nestjs/config"
import type { ConfigType, NetworkConfig, PlayerConfig } from "src/modules/config"

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

/**
 * @class LoadedConfigService
 * @category Config
 * @description Service used to enable displaying the entire configuration setup in one callback.
 */
@Injectable()
export class LoadedConfigService {
    constructor(private readonly configService: ConfigService) { }

    /**
     * @method getInstanceConfig
     * @description Retrieves all the configuration registered in the ConfigModule.
     * @returns {ConfigType} The entire configuration loaded in one object.  
     */
    getInstanceConfig(): ConfigType {
        return {
            network: this.configService.get<NetworkConfig>("network"),
            player: this.configService.get<PlayerConfig>("player")
        }
    }
}
