import { appconfig } from "../src/initconfig/configure";
import { app } from "../src/main";

const puerto = appconfig.port || 8080;

const server = app.listen(puerto, () => {
    console.log(`servidor escuchando en http://localhost:${puerto}`);
});

server.on('error', error => {
    console.log('error en el servidor:', error);
});

process.on('SIGINT', function() {

    console.log("Finished");
    
    process.exit(0);
});
