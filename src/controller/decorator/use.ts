import { RequestHandler } from "express";
import "reflect-metadata";
import {MetadataKeys} from "../../MetadataKeys";

function use(middleware: RequestHandler) {
  return function(target: any, key: string, desc: PropertyDescriptor) {
    const middlewares = Reflect.getMetadata(MetadataKeys.middlewares, target, key) || [];
    Reflect.defineMetadata(MetadataKeys.middlewares, [
      ...middlewares,
      middleware,
    ], target, key);
  }
}

export default use;