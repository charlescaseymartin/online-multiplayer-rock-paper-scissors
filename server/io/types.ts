import { Server, Socket } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

export type IOServerType = Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>;
export type IOSocketType = Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>;
