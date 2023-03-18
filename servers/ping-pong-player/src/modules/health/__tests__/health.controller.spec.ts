// Third-party imports
import { Test } from "@nestjs/testing"

// Global imports

// Local imports
import { HealthController } from "../health.controller"

////////////////////////////////////////////////////////////////////////////////

describe("HealthController", () => {
    let healthController: HealthController

    beforeEach(async () => {
        const healthModule = await Test.createTestingModule({
            controllers: [HealthController]
        }).compile()

        healthController = healthModule.get<HealthController>(HealthController)
    })

    describe("health", () => {
        it("should return { status: 200 }", () => {
            const response = healthController.health()

            expect(response).toEqual({ status: 200 })
        })
    })
})