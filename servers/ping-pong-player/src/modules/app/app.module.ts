// Third-party imports
import { Module } from "@nestjs/common"

// Global imports
import { ConfigModule } from "src/modules/config"
import { HealthModule } from "src/modules/health"
import { PlayModule } from "src/modules/play"

// Local imports

////////////////////////////////////////////////////////////////////////////////

@Module({
	imports: [ConfigModule, HealthModule, PlayModule]
})
export class AppModule { }
