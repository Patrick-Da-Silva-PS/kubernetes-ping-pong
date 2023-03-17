// Third-party imports
import { Module } from "@nestjs/common"

// Global imports
import { ConfigModule } from "src/modules/config"

// Local imports
import { AppController } from "./app.controller"
import { AppService } from "./app.service"

////////////////////////////////////////////////////////////////////////////////

@Module({
	imports: [ConfigModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule { }
