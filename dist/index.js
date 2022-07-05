"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
// importando el archivo con la conexión a base de datos
require("./database");
function main() {
    app_1.default.listen(app_1.default.get('port'));
    console.log(`Servidor en el puerto http://localhost:${app_1.default.get('port')}`);
}
main();
//# sourceMappingURL=index.js.map