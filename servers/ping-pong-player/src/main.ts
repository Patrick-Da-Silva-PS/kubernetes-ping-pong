// Third-party imports
import { NestFactory } from "@nestjs/core"

// Global imports
import { AppModule } from "./app.module"

// Local imports

////////////////////////////////////////////////////////////////////////////////


async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	await app.listen(3000)
}
bootstrap()
