// Third-party imports
import { Controller, Get } from "@nestjs/common"

// Global imports

// Local imports
import { LoadedConfigService } from "./config.service"

////////////////////////////////////////////////////////////////////////////////

@Controller("/config")
export class ConfigController {
    constructor(private readonly loadedConfigService: LoadedConfigService) { }

    @Get()
    config() {
        return this.loadedConfigService.getInstanceConfig()
    }
}
