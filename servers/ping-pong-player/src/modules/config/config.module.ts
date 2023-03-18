// Third-party imports
import { Module } from "@nestjs/common"
import { ConfigModule as NestJSConfigModule } from "@nestjs/config"

// Global imports

// Local imports
import { LoadedConfigService } from "./config.service"
import { ConfigController } from "./config.controller"
import { networkLoader, playerLoader } from "./loaders"

////////////////////////////////////////////////////////////////////////////////

@Module({
    imports: [
        NestJSConfigModule.forRoot({
            isGlobal: true,
            ignoreEnvFile: true,
            load: [networkLoader, playerLoader],
        }),
    ],
    controllers: [ConfigController],
    providers: [LoadedConfigService],
})
export class ConfigModule { }
