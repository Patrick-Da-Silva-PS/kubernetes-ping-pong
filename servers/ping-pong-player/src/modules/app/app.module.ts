// Third-party imports
import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"

// Global imports

// Local imports
import { AppController } from "./app.controller"
import { AppService } from "./app.service"

////////////////////////////////////////////////////////////////////////////////

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			envFilePath: [`env_vars/${process.env.NODE_ENV}/network.env`],
		}),
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule { }
