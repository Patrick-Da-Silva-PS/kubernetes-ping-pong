// Third-party imports
import { NestFactory } from "@nestjs/core"
import { ConfigService } from "@nestjs/config"

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
	const configService = new ConfigService()
	const app = await NestFactory.create(AppModule)
	const serverPort = Number(configService.get<string>("SERVER_PORT"))

	await app.listen(serverPort)
	console.log(`*** App running on port ${serverPort} in ${process.env.NODE_ENV} ***`)
}

export default bootstrap
