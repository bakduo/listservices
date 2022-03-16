export class EBase extends Error {

    private code: number;
    private detail: string;
    private httpcode: number;

    constructor(description:string,_code:number,_detail?:string,_httpcode?:number){
        super(description);
        this.detail = _detail || "";
        this.code = _code;
        this.httpcode = _httpcode || -1;
        Error.captureStackTrace(this);
    }

    getHttpCode(){
        return this.httpcode;
    }

    getCode(){
        return this.code;
    }

    getDetail(){
        return this.detail;
    }
}

export class EArchivo extends EBase {

    constructor(description:string,_code:number,_detail?:string,_httpcode?:number){
        super(description,_code);
    }
}