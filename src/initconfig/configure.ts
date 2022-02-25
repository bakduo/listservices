import config from 'config';

const cwd = process.cwd();
const { env } = process;
export const appPathPublic = cwd + '/public';

export const ERRORS_APP = {
    'archivo':{
        number:100,
        detail:"Archivo no existe"
    }
}

export interface IConfigDB {
    port:number;
    hostname:string;
    secure:boolean;
    protocol:string;
    remotepath:string;
    pathfilejson:string;
    rootpathfile:string;
    servicefilename:string;
}

export const appconfig:IConfigDB = config.get('app');
