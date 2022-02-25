import {Request, Response, NextFunction} from 'express';
import { appconfig, appPathPublic, ERRORS_APP } from '../initconfig';
import { errorType } from '../interfaces';
import { ArchivoJson } from '../util/archivo';
import { IFile } from '../interfaces/persistence';
import { IService } from '../interfaces/service';

export class ControllerService {

    fileOperator:IFile<IService>;

    constructor(){

        this.fileOperator = new ArchivoJson();

        this.fileOperator.open(appPathPublic+"/"+appconfig.servicefilename);
    }
    

    listService = (req:Request,res:Response,next:NextFunction)=>{
       try {

        const serviceJson = this.fileOperator.getItems();
        
        res.status(200).json({services:serviceJson});

       } catch (error:unknown) {
        const errorCode = error as errorType;
        errorCode.code = ERRORS_APP.archivo.number;
        errorCode.detail = ERRORS_APP.archivo.detail;
        next(errorCode);
       } 
    }

    renderTemplate = (req:Request,res:Response,next:NextFunction) =>{
        try {

            const serviceJson = this.fileOperator.getItems();

            const url = appconfig.protocol+"://"+appconfig.hostname+appconfig.remotepath; 

            return res.render('main',{ services:serviceJson,remotepath:url});

        } catch (error:unknown) {
            const errorCode = error as errorType;
            errorCode.code = ERRORS_APP.archivo.number;
            errorCode.detail = ERRORS_APP.archivo.detail;
            next(errorCode);
        }
    }
}