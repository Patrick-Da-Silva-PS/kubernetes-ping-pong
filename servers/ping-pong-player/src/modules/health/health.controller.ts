// Third-party imports
import { Controller, Get } from "@nestjs/common"

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////


@Controller("/health")
export class HealthController {
    @Get()
    health(): Record<string, never> {
        return {}
    }
}
