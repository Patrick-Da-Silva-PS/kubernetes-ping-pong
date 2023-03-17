// Third-party imports
import { Injectable } from "@nestjs/common"

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

@Injectable()
export class AppService {
	getHello(): string {
		return "Hello World!"
	}
}
