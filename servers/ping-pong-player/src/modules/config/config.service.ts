// Third-party imports
import { Injectable } from "@nestjs/common"
import { ConfigService } from "@nestjs/config"
import type { ConfigType, NetworkConfig, PlayerConfig } from "src/modules/config"

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

@Injectable()
export class LoadedConfigService {
    constructor(private readonly configService: ConfigService) { }

    getInstanceConfig(): ConfigType {
        return {
            network: this.configService.get<NetworkConfig>("network"),
            player: this.configService.get<PlayerConfig>("player")
        }
    }
}
