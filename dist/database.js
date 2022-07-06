"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect('mongodb://localhost/restapi-jwt-typescript', {})
    .then(db => console.log('Conexión a la Base de Datos exitosa'))
    .catch(err => console.log(err));
//# sourceMappingURL=database.js.map