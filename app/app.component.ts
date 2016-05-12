import {Component} from "@angular/core";
import {Room} from "./room";
import {RoomInfo} from "./room-info.component";
import {RoomFinderServices} from "./services";
import { OnInit } from '@angular/core';

@Component({
    selector:"room-finder",
    template:`
    <div class="wrapper"><room-info *ngFor="let room of rooms" [room]="room"></room-info></div>`,
    directives:[RoomInfo],
    providers: [RoomFinderServices]
})

export class AppComponent implements OnInit{
    room:Room={
        roomId:1,
        roomName:"Training Room 1",
        ownedBy:"Maddy",
        time:new Date(),
        duration:30,
        isLocked:true
    };
    ngOnInit() {
        this.getAllRooms();
    }
    rooms:Room[];
    constructor(private roomFinderService: RoomFinderServices) { }
    getAllRooms() {
     this.roomFinderService.getAllRooms().then(rooms => this.rooms=rooms);
  }
    bookRoom(room:Room){
        console.log("Clicked")
        room.isLocked=room.isLocked?false:true;
    }
}

