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
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var Plane = /** @class */ (function () {
    function Plane() {
        this.color = "red";
    }
    Plane.prototype.fly = function () {
        console.log("flyer");
    };
    __decorate([
        get("/login"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Plane.prototype, "fly", null);
    return Plane;
}());
function get(path) {
    return function (target, key) {
        Reflect.defineMetadata("path", path, target, key);
    };
}
function controller(target) {
    for (var key in target.prototype) {
        var path = Reflect.getMetadata("path", target.prototype, key);
        // const middleware = target.prototype[path];
    }
}
