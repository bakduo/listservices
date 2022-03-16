
import * as fs from 'fs';
import { errorType, IFile, IService } from '../interfaces';
import { ERRORS_APP } from '../initconfig';

import { EArchivo } from '../exception';

export class ArchivoJson implements IFile<IService>{

    items:IService[] = [];

    path:string='';

    watchChange(){

        fs.watchFile(this.path, (curr, prev) => {

            const fileserviceJson = fs.readFileSync(this.path);
            
            this.items = JSON.parse(Buffer.from(fileserviceJson).toString());
            
        });
    }

    open(path: string): void {
        try {

            this.path = path;

            console.log(this.path);

            const fileserviceJson = fs.readFileSync(this.path);

            this.items = JSON.parse(Buffer.from(fileserviceJson).toString());

            this.watchChange();
    
        } catch (error:unknown) {
            const errorCode = error as errorType;
            errorCode.code = ERRORS_APP.archivo.code;
            errorCode.detail = ERRORS_APP.archivo.detail;
            throw new EArchivo(errorCode.detail,errorCode.code);
        }          
    }

    close(): void {
        throw new Error('not implemented');
    }

    getItems():IService[]{
        
        return this.items;
    }


}
