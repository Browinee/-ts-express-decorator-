import { MetadataKeys } from './../MetadataKeys';
import {Request, Response, NextFunction} from "express";
import {use, controller, get, post, bodyValidator} from "./decorator";

function logger(req: Request, res:Response, next: NextFunction) {
  console.log("logger middle")
  next();
}

@controller("/auth")
class LoginController {
  @get("/login")
  @use(logger)
  getLogin(req: Request, res:Response){
    res.send(`
      <form method="POST">
        <div>
          <label> Email </label>
          <input name="email" />
        </div>
        <div>
          <label> Password </label>
          <input name="password"  type="password"/>
        </div>
        <button>Submit</button>
      </form>
    `);
  }
  @post('/login')
  @bodyValidator("email", "password")
  postLogin(req: Request, res:Response) {
    const {email, password} = req.body;
    if(email === "admin") {
     req.session = {loggedIn: true};
     res.redirect("/");
    } else {
     res.send("Invalid email")
    }
  }

  @get("/logout")
  getLoggerOut(req: Request, res:Response) {
    if(req.session) {
      req.session = undefined;
    }
    res.redirect("/");
  }
}

export default LoginController;