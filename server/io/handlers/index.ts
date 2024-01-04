import { IOServerType, IOSocketType } from "../types"
import friendConnections from "./friendConnections"
import strangerConnections from "./strangerConnections"

export default function IOHandler(io: IOServerType, socket: IOSocketType) {
  friendConnections(io, socket);
  strangerConnections(io, socket);
}