import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()

export class EmailInterceptor implements HttpInterceptor{

    constructor(){

    }

    intercept(request : HttpRequest<any>, next : HttpHandler){
        request = request.clone({
            setHeaders :{
                Authorization : 'Bearer ' + localStorage.getItem('token')
            }
        })
        return next.handle(request);
    }
}