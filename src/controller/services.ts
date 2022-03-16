import {Request, Response, NextFunction} from 'express';
import { appconfig, appPathPublic, ERRORS_APP } from '../initconfig';
import { errorType, IFile, IService } from '../interfaces';
import { ArchivoJson } from '../util/archivo';

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

        if (errorCode.detail && errorCode.code){
            errorCode.code = ERRORS_APP.archivo.code;
            errorCode.detail = ERRORS_APP.archivo.detail;
        }
        
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
            if (errorCode.detail && errorCode.code){
                errorCode.code = ERRORS_APP.archivo.code;
                errorCode.detail = ERRORS_APP.archivo.detail;
            }
            next(errorCode);
        }
    }

}
