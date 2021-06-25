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
var decorator_1 = require("./decorator");
function requiredAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
    }
    res.status(403).send("not permitted");
}
var RootController = /** @class */ (function () {
    function RootController() {
    }
    RootController.prototype.getRoot = function (req, res) {
        if (req.session && req.session.loggedIn) {
            res.send("\n        <div>\n          <p>You are loggedIn!</p>\n          <a href=\"/auth/logout\">\n          logout\n          </a>\n        </div>\n\n      ");
        }
        else {
            res.send("\n      <div>\n        <p>You are not loggedIn!</p>\n        <a href=\"/auth/login\" >\n      login\n        </a>\n      </div>\n\n    ");
        }
    };
    RootController.prototype.getProtected = function (req, res) {
        res.send("proteced route");
    };
    __decorate([
        decorator_1.get('/'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], RootController.prototype, "getRoot", null);
    __decorate([
        decorator_1.get("/protected"),
        decorator_1.use(requiredAuth),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], RootController.prototype, "getProtected", null);
    RootController = __decorate([
        decorator_1.controller('')
    ], RootController);
    return RootController;
}());
exports.default = RootController;
