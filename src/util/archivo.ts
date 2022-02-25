import { IFile } from '../interfaces/persistence';
import { IService } from '../interfaces/service';

import * as fs from 'fs';
import { errorType } from '../interfaces';
import { ERRORS_APP } from '../initconfig';

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

            const fileserviceJson = fs.readFileSync(this.path);

            this.items = JSON.parse(Buffer.from(fileserviceJson).toString());

            this.watchChange();
    
        } catch (error:unknown) {
            const errorCode = error as errorType;
            errorCode.code = ERRORS_APP.archivo.number;
            errorCode.detail = ERRORS_APP.archivo.detail;
            throw new Error(`Exception: ${errorCode.code} ${errorCode.detail}`);
        }          
    }

    close(): void {
        throw new Error('not implemented');
    }

    getItems():IService[]{
        
        return this.items;
    }


}