// Third-party imports
import { Controller, Get, Header } from "@nestjs/common"

// Global imports

// Local imports
import { LoadedConfigService } from "./config.service"

////////////////////////////////////////////////////////////////////////////////

@Controller("/config")
export class ConfigController {
    constructor(private readonly loadedConfigService: LoadedConfigService) { }

    @Get()
    @Header("Connection", "close")
    config() {
        return this.loadedConfigService.getInstanceConfig()
    }
}

