import express from 'express';

import {Request, Response, NextFunction} from 'express';
import { errorType } from './interfaces';
import { routerGlobal } from './routes';
import { ERRORS_APP } from './initconfig/configure';

export const app = express();

app.disable('x-powered-by');

app.use(express.json({limit: '10mb'}));

app.use(express.urlencoded({ limit: '10mb',extended: true }));

app.use(express.static('public'));

app.set('views','./src/views');

app.set('view engine','ejs');

app.use(routerGlobal);

//Handler GET 404 for not found
app.use((req:Request, res:Response)=> {
    return res.status(404).json({message:'Request not found'});
});
  
//Error Handler
app.use((err:errorType, req:Request, res:Response, next:NextFunction)=> {

    //console.log(err);

    if(err.code === ERRORS_APP.archivo.number){
        return res.status(404).json({message:`${err.code} ${err.detail}`});
    }
    
    return res.status(404).json({message:`${err.message}`});

});  
