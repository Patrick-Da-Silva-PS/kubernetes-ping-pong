// Third-party imports
import { Test, TestingModule } from "@nestjs/testing"
import { INestApplication } from "@nestjs/common"
import * as request from "supertest"
import { get as deepGet } from "lodash"

// Global imports
import { mockedConfig } from "src/modules/config/__mocks__/configService.mock"

// Local imports
import { AppModule } from "../app.module"
import { LoadedConfigService } from "src/modules/config/config.service"

////////////////////////////////////////////////////////////////////////////////

// This reads YAML file from disk
// so we mock it and load from the mockedConfig instead
jest.mock("src/modules/config/loaders/yaml")

describe("AppController (e2e)", () => {
	let app: INestApplication
	let loadedConfigService: LoadedConfigService

	beforeEach(async () => {

		const moduleFixture: TestingModule = await Test.createTestingModule({
			imports: [AppModule],
		})
			.compile()

		app = moduleFixture.createNestApplication()
		await app.init()

		loadedConfigService = app.get<LoadedConfigService>(LoadedConfigService)
	})

	describe("/health (GET)", () => {
		it("should return { status: 200 }", async () => {
			const response = await request(app.getHttpServer())
				.get("/health")
				.expect(200)

			expect(response.body).toEqual({ status: 200 })
		})
	})

	describe("/config (GET)", () => {
		it("should return the mocked config object", async () => {
			const response = await request(app.getHttpServer())
				.get("/config")
				.expect(200)

			const config = loadedConfigService.getInstanceConfig()

			expect(response.body).toEqual(config)
		})
	})


	describe("/play (GET)", () => {
		it("should return the player ID", async () => {
			const response = await request(app.getHttpServer())
				.get("/play")
				.expect(200)

			const config = loadedConfigService.getInstanceConfig()

			expect(response.text).toEqual(deepGet(config, "player.playerID"))
		})
	})
})
