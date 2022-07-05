"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// lo que esta entre { Application }  dice que va a importar la interfaz de la aplicación
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("./routes/auth"));
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
// configuraciones
app.set('port', 3009);
// middlewares -> se debe poner la configuració dev de desarrollo
app.use((0, morgan_1.default)('dev'));
// rutas -> se pone /api/auth para que las rutas se anteponga ese termino
app.use('/api/auth', auth_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map