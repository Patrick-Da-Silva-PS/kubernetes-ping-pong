// Third-party imports
import { NestFactory } from "@nestjs/core"

// Global imports
import { AppModule } from "src/modules/app"

// Local imports

////////////////////////////////////////////////////////////////////////////////

/**
 * @function bootstrap
 * @category Main
 * @description Function called to run the entire application.
 */
const bootstrap = async () => {
	const app = await NestFactory.create(AppModule)
	await app.listen(3000)
}

export default bootstrap
