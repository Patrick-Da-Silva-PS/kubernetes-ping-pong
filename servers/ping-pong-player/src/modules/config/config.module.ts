// Third-party imports
import { Module } from "@nestjs/common"
import { ConfigModule as NestJSConfigModule } from "@nestjs/config"

// Global imports

// Local imports
import { networkLoader, playerIDLoader } from "./loaders"

////////////////////////////////////////////////////////////////////////////////

@Module({
    imports: [
        NestJSConfigModule.forRoot({
            isGlobal: true,
            ignoreEnvFile: true,
            load: [networkLoader, playerIDLoader],
        }),
    ],
    controllers: [],
    providers: [],
})
export class ConfigModule { }
