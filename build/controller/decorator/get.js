"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
function get(path) {
    return function (target, key) {
        Reflect.defineMetadata("path", path, target, key);
    };
}
exports.default = get;
