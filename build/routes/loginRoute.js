"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var AppRouter_1 = __importDefault(require("../AppRouter"));
exports.router = AppRouter_1.default;
AppRouter_1.default.get("/", function (req, res) {
    if (req.session && req.session.loggedIn) {
        res.send("\n      <div>\n        <p>You are loggedIn!</p>\n        <a href=\"/logout\">\n        logout\n        </a>\n      </div>\n\n    ");
    }
    else {
        res.send("\n    <div>\n      <p>You are not loggedIn!</p>\n      <a href=\"/login\" >\n    login\n      </a>\n    </div>\n\n  ");
    }
});
AppRouter_1.default.get("/logout", function (req, res) {
    if (req.session) {
        req.session = null;
        res.redirect("/");
    }
});
AppRouter_1.default.get("/login", function (req, res) {
    res.send("\n  <form method=\"POST\">\n    <div>\n      <label> Email </label>\n      <input name=\"email\" />\n    </div>\n    <div>\n      <label> Password </label>\n      <input name=\"password\"  type=\"password\"/>\n    </div>\n    <button>Submit</button>\n  </form>\n  ");
});
AppRouter_1.default.post("/login", function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (email === "admin") {
        req.session = { loggedIn: true };
        res.redirect("/");
    }
    else {
        res.send("Invalid email");
    }
});
function requiredAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
    }
    res.status(403).send("not permitted");
}
AppRouter_1.default.get("/protected", requiredAuth, function (req, res) {
    res.send("proteced route");
});
