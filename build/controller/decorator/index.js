"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.post = exports.put = exports.get = exports.use = exports.bodyValidator = exports.controller = void 0;
var controller_1 = require("./controller");
Object.defineProperty(exports, "controller", { enumerable: true, get: function () { return __importDefault(controller_1).default; } });
var bodyValidator_1 = require("./bodyValidator");
Object.defineProperty(exports, "bodyValidator", { enumerable: true, get: function () { return __importDefault(bodyValidator_1).default; } });
var use_1 = require("./use");
Object.defineProperty(exports, "use", { enumerable: true, get: function () { return __importDefault(use_1).default; } });
var route_1 = require("./route");
Object.defineProperty(exports, "get", { enumerable: true, get: function () { return route_1.get; } });
Object.defineProperty(exports, "put", { enumerable: true, get: function () { return route_1.put; } });
Object.defineProperty(exports, "post", { enumerable: true, get: function () { return route_1.post; } });
