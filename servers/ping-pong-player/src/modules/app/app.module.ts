// Third-party imports
import { Module } from "@nestjs/common"

// Global imports
import { ConfigModule } from "src/modules/config"
import { HealthModule } from "src/modules/health"

// Local imports
import { AppController } from "./app.controller"
import { AppService } from "./app.service"

////////////////////////////////////////////////////////////////////////////////

@Module({
	imports: [ConfigModule, HealthModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule { }
