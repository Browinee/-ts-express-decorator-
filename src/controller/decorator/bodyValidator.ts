import { RequestHandler } from "express";
import "reflect-metadata";
import {MetadataKeys} from "../../MetadataKeys";

function bodyValidator(...keys:string[]) {
  return function(target: any, key: string, desc: PropertyDescriptor) {
     Reflect.defineMetadata(MetadataKeys.bodyValidator, keys, target, key);
  }
}

export default bodyValidator;