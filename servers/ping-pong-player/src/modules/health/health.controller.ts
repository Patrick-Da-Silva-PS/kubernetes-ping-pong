// Third-party imports
import { Controller, Get } from "@nestjs/common"

// Global imports

// Local imports
import type { Health } from "./types"

////////////////////////////////////////////////////////////////////////////////

@Controller("/health")
export class HealthController {
    @Get()
    health(): Health {
        return { status: 200 }
    }
}
