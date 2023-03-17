// Third-party imports
import { Module } from "@nestjs/common"
import { ConfigModule as NestJSConfigModule } from "@nestjs/config"

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

@Module({
    imports: [
        NestJSConfigModule.forRoot({
            isGlobal: true,
            envFilePath: [`env_vars/${process.env.NODE_ENV}/network.env`],
        }),
    ],
    controllers: [],
    providers: [],
})
export class ConfigModule { }
