import { RequestHandler } from "express";
import "reflect-metadata";


// value protection
interface RouteHandlerDescriptor extends PropertyDescriptor {
  value?: RequestHandler
}
function routeBinder(method: string) {
  return function(path: string) {
    return function(target: any, key: string, desc: RouteHandlerDescriptor) {
      Reflect.defineMetadata("path", path, target, key);
      Reflect.defineMetadata("method", method, target, key);
    }
  }
}

export const get = routeBinder("get");
export const post = routeBinder("post");
export const put = routeBinder("put");
