import {Injectable} from "@angular/core";
import {Rooms} from "./mock-data";

@Injectable()
export class RoomFinderServices{
    getAllRooms() {
    return Promise.resolve(Rooms);
  }
}