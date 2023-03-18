// Third-party imports
import { NestFactory } from "@nestjs/core"
import { ConfigService } from "@nestjs/config"

// Global imports
import { AppModule } from "src/modules/app"
import { Logger } from "@nestjs/common"

// Local imports

////////////////////////////////////////////////////////////////////////////////

/**
 * @function bootstrap
 * @category Main
 * @description Function called to run the entire application.
 */
const bootstrap = async () => {
	// Load NestJS app and services
	const app = await NestFactory.create(AppModule)
	const configService = app.get<ConfigService>(ConfigService)
	const logger = new Logger()

	// Extract constants from configuration service
	const serverPort = configService.get<number>("network.server_port")
	const playerID = configService.get<string>("player.playerID")

	// Run the app
	await app.listen(serverPort)

	// Display helpful logs for debugging purposes
	logger.debug(`*** App running on port ${serverPort} in ${process.env.NODE_ENV} ***`)
	logger.debug(`Player ID: ${playerID}`)
}

export default bootstrap
