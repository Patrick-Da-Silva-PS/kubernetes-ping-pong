// Third-party imports
import { Controller, Get } from "@nestjs/common"

// Global imports

// Local imports
import { AppService } from "./app.service"

////////////////////////////////////////////////////////////////////////////////


@Controller()
export class AppController {
	constructor(private readonly appService: AppService) { }

	@Get()
	getHello(): string {
		return this.appService.getHello()
	}
}
