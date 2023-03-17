// Third-party imports
import { NestFactory } from "@nestjs/core"
import { ConfigService } from "@nestjs/config"

// Global imports
import { AppModule } from "src/modules/app"
import { PLAYER_ID } from "src/constants"

// Local imports

////////////////////////////////////////////////////////////////////////////////

/**
 * @function bootstrap
 * @category Main
 * @description Function called to run the entire application.
 */
const bootstrap = async () => {
	const app = await NestFactory.create(AppModule)
	const configService = app.get<ConfigService>(ConfigService)
	const serverPort = Number(configService.get<string>("SERVER_PORT"))

	await app.listen(serverPort)
	console.log(`*** App running on port ${serverPort} in ${process.env.NODE_ENV} ***`)
	console.log("CONTAINER ID: ", PLAYER_ID)
}

export default bootstrap
