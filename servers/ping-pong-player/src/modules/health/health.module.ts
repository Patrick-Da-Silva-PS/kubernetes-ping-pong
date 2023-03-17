// Third-party imports
import { Module } from "@nestjs/common"

// Global imports

// Local imports
import { HealthController } from "./health.controller"

////////////////////////////////////////////////////////////////////////////////

@Module({
    controllers: [HealthController],
})
export class HealthModule { }
