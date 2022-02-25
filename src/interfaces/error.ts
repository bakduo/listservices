export interface ErrorMiddleware extends TypeError {
    code?:number;
    detail?:string;
  }
export type errorType = ErrorMiddleware;