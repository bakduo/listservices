import express from 'express';
import {Request, Response, NextFunction} from 'express';
import { ControllerService } from '../controller';
import { ERRORS_APP } from '../initconfig';
import { errorType } from '../interfaces';

export const routerArchivo = express.Router();

try {
    const controller = new ControllerService();
    routerArchivo.get('/',controller.renderTemplate);
    routerArchivo.get('/json',controller.listService);
} catch (error) {
    const errorCode = error as errorType;
    const code = errorCode.code || -1
    switch (code) {
        case 100:
            errorCode.detail = ERRORS_APP.archivo.detail;      
            break;
        default:
            errorCode.detail = "Exception Unknow";
            break;
    }
    routerArchivo.get('/', (req:Request,res:Response,next:NextFunction) =>{

        return res.render('error',{ code:code,detail:errorCode.message});
    });
    
    
}

