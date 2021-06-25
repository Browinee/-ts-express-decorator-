"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var MetadataKeys_1 = require("./../../MetadataKeys");
require("reflect-metadata");
var AppRouter_1 = __importDefault(require("../../AppRouter"));
function bodyValidator(keys) {
    return function (req, res, next) {
        console.log(req.body);
        if (!req.body) {
            res.send("invalid request").status(422);
            return;
        }
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (!req.body[key]) {
                res.send("invalid request").status(422);
                return;
            }
        }
        next();
    };
}
function controller(routerPrefix) {
    return function (target) {
        for (var key in target.prototype) {
            var routerHandler = target.prototype[key];
            var path = Reflect.getMetadata("path", target.prototype, key);
            var method = Reflect.getMetadata("method", target.prototype, key);
            var middlewares = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.middlewares, target.prototype, key) || [];
            var validatorKeys = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.bodyValidator, target.prototype, key) || [];
            var validator = bodyValidator(validatorKeys);
            console.log("path", "" + routerPrefix + path);
            console.log("method", method);
            if (path && method) {
                AppRouter_1.default[method].apply(AppRouter_1.default, __spreadArrays(["" + routerPrefix + path], middlewares, [validator, routerHandler]));
            }
        }
    };
}
exports.default = controller;
