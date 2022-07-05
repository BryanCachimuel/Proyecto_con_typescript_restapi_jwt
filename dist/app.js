"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// lo que esta entre { Application }  dice que va a importar la interfaz de la aplicación
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// configuraciones
app.set('port', 3009);
exports.default = app;
//# sourceMappingURL=app.js.map