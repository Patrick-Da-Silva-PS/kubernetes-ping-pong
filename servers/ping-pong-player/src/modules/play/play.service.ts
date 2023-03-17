// Third-party imports
import { Injectable } from "@nestjs/common"

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

@Injectable()
export class PlayService {
    play(): string {
        return "Ready to rumble!"
    }
}
