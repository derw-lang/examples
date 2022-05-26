"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const coed_1 = require("@eeue56/coed");
const express_1 = __importDefault(require("express"));
const fs_1 = require("fs");
const Main_1 = require("./Main");
function main() {
    const app = (0, express_1.default)();
    const port = 3000;
    app.get("/", (req, res) => {
        const index = (0, fs_1.readFileSync)("./index.html", "utf-8");
        const rendered = (0, coed_1.flatRender)((0, Main_1.view)(Main_1.initialModel));
        const result = index.replace(`<div id="root"></div>`, `<div id="root">${rendered}</div>`);
        res.send(result);
    });
    app.use(express_1.default.static("public"));
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
}
main();
