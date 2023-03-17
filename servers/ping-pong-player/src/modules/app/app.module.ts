// Third-party imports
import { Module } from "@nestjs/common"

// Global imports

// Local imports
import { AppController } from "./app.controller"
import { AppService } from "./app.service"

////////////////////////////////////////////////////////////////////////////////

@Module({
	imports: [],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule { }
