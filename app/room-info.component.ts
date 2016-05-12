import { Component, Input } from '@angular/core';
import {Room} from "./room";
@Component({
    selector:"room-info",
    template:`<div *ngIf="room" class="room" (click)="editRoom($event,room)" [class.selected]="room.isLocked">
                <h3>{{room.roomName}}</h3>
                <div *ngIf="room.isLocked==false">
                    <input type="text" [(ngModel)]="room.ownedBy" class="text" placeholder="Your Name"/>
                    <br/>
                    <input type="Number" [(ngModel)]="room.duration" placeholder="Duration" class="text"/>
                    <br/>
                    <input type="button" (click)="bookRoom($event,room)" class="button" value="Book Room"/>
                </div>
                <div *ngIf="room.isLocked==true">
                    <div class="text">{{room.ownedBy}}</div>
                    <div class="text">{{room.time | date:'shortTime'}}</div>
                    <div class="text">{{room.duration}} minutes</div>
                </div>
            </div>`,
     styles:[`
        .room {
            border: 1px solid #34776E;
            width:220px;
            height:160px;
            text-align:center;
            background:#76AF33;
            margin:10px;
            border-radius: 5px;
            display:inline-block;
        }
        .selected {
            background-color: #B33F37 !important;
            color: white;
           }
        .text{
            padding:0px 5px 5px 5px;
        }
        .button{
            margin: 5px;
            border-radius: 3px;
            padding: 6px;
            border: 0px;
            background: #FFC107;
            color: #06090A;
            
        }
        
    `],
})

export class RoomInfo{
    @Input()
    room:Room;
    bookRoom(event,room:Room){
        console.log("Clicked")
        event.stopPropagation();
        room.time=new Date();
        room.isLocked=true;
    }
    editRoom(event,room:Room){
        console.log("Clicked")
        event.stopPropagation();
        room.isLocked=room.isLocked?false:false;
    }
}