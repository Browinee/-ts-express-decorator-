import { MetadataKeys } from './../../MetadataKeys';
import "reflect-metadata";
import router from "../../AppRouter"
import {Methods}from "../../Methods";
import {Request, Response, NextFunction} from "express";


function bodyValidator(keys: string[]) {
  return function(req: Request, res:Response, next: NextFunction) {
    console.log(req.body)
    if(!req.body){
      res.send("invalid request").status(422)
      return;
    }
    for(let key of keys){
      if(!req.body[key]) {
        res.send("invalid request").status(422)
        return;
      }
    }
    next();
  };
}


function controller(routerPrefix: string){
  return function(target: Function) {
    for(let key in target.prototype) {
      const routerHandler = target.prototype[key];
      const path = Reflect.getMetadata("path", target.prototype, key);
      const method: Methods = Reflect.getMetadata("method", target.prototype, key);
      const middlewares = Reflect.getMetadata(MetadataKeys.middlewares, target.prototype, key) || [];
      const validatorKeys = Reflect.getMetadata(MetadataKeys.bodyValidator, target.prototype, key) || [];
      const validator = bodyValidator(validatorKeys);
      console.log("path", `${routerPrefix}${path}`)
      console.log("method", method)
      if(path && method) {
        router[method](`${routerPrefix}${path}`, ...middlewares, validator, routerHandler);
      }
    }
  }
}

export default controller;