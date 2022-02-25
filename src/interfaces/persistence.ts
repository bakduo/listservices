export interface IFile<T> {

    open(path:string):void;
    
    close():void;

    getItems():T[];
}