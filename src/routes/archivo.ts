
import express from 'express';
import { ControllerService } from '../controller/services';

export const routerArchivo = express.Router();

const controller = new ControllerService();

routerArchivo.get('/',controller.renderTemplate);

routerArchivo.get('/json',controller.listService);
