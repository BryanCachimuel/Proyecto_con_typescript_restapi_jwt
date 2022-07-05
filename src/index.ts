import app from "./app";

function main() {
    app.listen(app.get('port'));
    console.log(`Servidor en el puerto http://localhost:${app.get('port')}`)
}

main();

