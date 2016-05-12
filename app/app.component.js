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
var core_1 = require("@angular/core");
var room_info_component_1 = require("./room-info.component");
var services_1 = require("./services");
var AppComponent = (function () {
    function AppComponent(roomFinderService) {
        this.roomFinderService = roomFinderService;
        this.room = {
            roomId: 1,
            roomName: "Training Room 1",
            ownedBy: "Maddy",
            time: new Date(),
            duration: 30,
            isLocked: true
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getAllRooms();
    };
    AppComponent.prototype.getAllRooms = function () {
        var _this = this;
        this.roomFinderService.getAllRooms().then(function (rooms) { return _this.rooms = rooms; });
    };
    AppComponent.prototype.bookRoom = function (room) {
        console.log("Clicked");
        room.isLocked = room.isLocked ? false : true;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "room-finder",
            template: "\n    <div class=\"wrapper\"><room-info *ngFor=\"let room of rooms\" [room]=\"room\"></room-info></div>",
            directives: [room_info_component_1.RoomInfo],
            providers: [services_1.RoomFinderServices]
        }), 
        __metadata('design:paramtypes', [services_1.RoomFinderServices])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map