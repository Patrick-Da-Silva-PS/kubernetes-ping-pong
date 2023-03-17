// Third-party imports
import { Module } from "@nestjs/common"

// Global imports
import { ConfigModule } from "src/modules/config"
import { HealthModule } from "src/modules/health"
import { PlayModule } from "src/modules/play"

// Local imports
import { AppController } from "./app.controller"
import { AppService } from "./app.service"

////////////////////////////////////////////////////////////////////////////////

@Module({
	imports: [ConfigModule, HealthModule, PlayModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule { }
