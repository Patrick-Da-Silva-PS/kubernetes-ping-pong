// Third-party imports
import { Injectable } from "@nestjs/common"

// Global imports
import { CONTAINER_ID } from "src/constants"

// Local imports

////////////////////////////////////////////////////////////////////////////////

@Injectable()
export class PlayService {
    play(): string {
        return CONTAINER_ID
    }
}
