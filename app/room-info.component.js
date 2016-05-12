"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var room_1 = require("./room");
var RoomInfo = (function () {
    function RoomInfo() {
    }
    RoomInfo.prototype.bookRoom = function (event, room) {
        console.log("Clicked");
        event.stopPropagation();
        room.time = new Date();
        room.isLocked = true;
    };
    RoomInfo.prototype.editRoom = function (event, room) {
        console.log("Clicked");
        event.stopPropagation();
        room.isLocked = room.isLocked ? false : false;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', room_1.Room)
    ], RoomInfo.prototype, "room", void 0);
    RoomInfo = __decorate([
        core_1.Component({
            selector: "room-info",
            template: "<div *ngIf=\"room\" class=\"room\" (click)=\"editRoom($event,room)\" [class.selected]=\"room.isLocked\">\n                <h3>{{room.roomName}}</h3>\n                <div *ngIf=\"room.isLocked==false\">\n                    <input type=\"text\" [(ngModel)]=\"room.ownedBy\" class=\"text\" placeholder=\"Your Name\"/>\n                    <br/>\n                    <input type=\"Number\" [(ngModel)]=\"room.duration\" placeholder=\"Duration\" class=\"text\"/>\n                    <br/>\n                    <input type=\"button\" (click)=\"bookRoom($event,room)\" class=\"button\" value=\"Book Room\"/>\n                </div>\n                <div *ngIf=\"room.isLocked==true\">\n                    <div class=\"text\">{{room.ownedBy}}</div>\n                    <div class=\"text\">{{room.time | date:'shortTime'}}</div>\n                    <div class=\"text\">{{room.duration}} minutes</div>\n                </div>\n            </div>",
            styles: ["\n        .room {\n            border: 1px solid #34776E;\n            width:220px;\n            height:160px;\n            text-align:center;\n            background:#76AF33;\n            margin:10px;\n            border-radius: 5px;\n            display:inline-block;\n        }\n        .selected {\n            background-color: #B33F37 !important;\n            color: white;\n           }\n        .text{\n            padding:0px 5px 5px 5px;\n        }\n        .button{\n            margin: 5px;\n            border-radius: 3px;\n            padding: 6px;\n            border: 0px;\n            background: #FFC107;\n            color: #06090A;\n            \n        }\n        \n    "],
        }), 
        __metadata('design:paramtypes', [])
    ], RoomInfo);
    return RoomInfo;
}());
exports.RoomInfo = RoomInfo;
//# sourceMappingURL=room-info.component.js.map