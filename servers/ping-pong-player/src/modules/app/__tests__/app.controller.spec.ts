// Third-party imports
import { Test, TestingModule } from "@nestjs/testing"
import { INestApplication } from "@nestjs/common"
import * as request from "supertest"

// Global imports

// Local imports
import { AppModule } from "../app.module"

////////////////////////////////////////////////////////////////////////////////

// This reads YAML file from disk
// so we mock it and load from the mockedConfig instead
jest.mock("src/modules/config/loaders/yaml")

describe("AppController (e2e)", () => {
	let app: INestApplication

	beforeEach(async () => {

		const moduleFixture: TestingModule = await Test.createTestingModule({
			imports: [AppModule],
		})
			.compile()

		app = moduleFixture.createNestApplication()
		await app.init()
	})

	describe("/health (GET)", () => {
		it("should return { status: 200 }", () => {
			return request(app.getHttpServer())
				.get("/health")
				.expect(200)
				.expect({ status: 200 })
		})
	})
})
