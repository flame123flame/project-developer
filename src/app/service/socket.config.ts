import { environment } from "../../environments/environment";

import { StompConfig } from "@stomp/ng2-stompjs";

export class SocketConfig {
    public static getConfig(socketUrl,username) {
        const stompConfig: StompConfig = {
            url: socketUrl,
            headers: {
                login: username?username:"username",
                passcode: "",
                app:"player"
            },
            heartbeat_in: 0,
            heartbeat_out: 20000,
            reconnect_delay: 5000,
            debug: environment.DEBUG_SOCKET,
        };
        return stompConfig;
    }
}
