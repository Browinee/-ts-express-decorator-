import "reflect-metadata";


class Plane {
  color: string = "red"

  @get("/login")
  fly() {
    console.log("flyer")
  }
}

function get(path: string){
  return function(target:any, key:string){
    Reflect.defineMetadata("path", path, target, key);
  }

}
function controller(target: typeof Plane) {
  for (let key in target.prototype) {
    const path = Reflect.getMetadata("path", target.prototype, key);
    // const middleware = target.prototype[path];
  }
}