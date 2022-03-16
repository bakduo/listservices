
import express from 'express';
import { routerArchivo } from './archivo';

export const routerGlobal = express.Router();

try {
    routerGlobal.use('/',routerArchivo);    
} catch (error) {
    console.log(error);
}

