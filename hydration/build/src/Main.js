"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.view = exports.initialModel = void 0;
const Html = __importStar(require("../derw-packages/derw-lang/html/src/Html"));
const Html_1 = require("../derw-packages/derw-lang/html/src/Html");
const List = __importStar(require("../derw-packages/derw-lang/stdlib/src/List"));
const String_1 = require("../derw-packages/derw-lang/stdlib/src/String");
function Model(args) {
    return Object.assign({}, args);
}
const initialModel = { text: "Hello" };
exports.initialModel = initialModel;
function Noop(args) {
    return Object.assign({ kind: "Noop" }, args);
}
function Flip(args) {
    return Object.assign({ kind: "Flip" }, args);
}
function update(msg, model, send) {
    const _res108417 = msg;
    switch (_res108417.kind) {
        case "Flip": {
            return { text: reverse(model.text) };
        }
        case "Noop": {
            return model;
        }
    }
}
function reverse(str) {
    return (0, String_1.join)("", List.reverse((0, String_1.split)("", str)));
}
function view(model) {
    return (0, Html_1.div)([], [], [(0, Html_1.button)([(0, Html_1.onClick)(function (_) {
                return Flip({});
            })], [], [(0, Html_1.text)("Flip the message")]), (0, Html_1.text)(model.text)]);
}
exports.view = view;
function main(_) {
    const p = (0, Html_1.program)({
        initialModel,
        view,
        update,
        root: "hydration"
    });
    const root = document.getElementById("root");
    const runHydration = Html.hydrate(p, root);
    return p;
}
const runMain = globalThis.document === undefined ? undefined : main();
