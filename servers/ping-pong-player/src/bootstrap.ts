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
	const app = await NestFactory.create(AppModule)
	const configService = app.get<ConfigService>(ConfigService)
	const serverPort = configService.get<number>("network.server_port")

	await app.listen(serverPort)
	console.log(`*** App running on port ${serverPort} in ${process.env.NODE_ENV} ***`)
	console.log("CONTAINER ID: ", configService.get<string>("player.playerID"))
}

export default bootstrap
