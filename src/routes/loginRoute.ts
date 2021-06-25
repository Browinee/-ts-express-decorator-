import {Request, Response, NextFunction} from "express";
import router from "../AppRouter";

router.get("/", (req: Request, res:Response) => {
  if(req.session && req.session.loggedIn){
    res.send(`
      <div>
        <p>You are loggedIn!</p>
        <a href="/logout">
        logout
        </a>
      </div>

    `);
  } else {
    res.send(`
    <div>
      <p>You are not loggedIn!</p>
      <a href="/login" >
    login
      </a>
    </div>

  `);
  }
})
router.get("/logout", (req: Request, res:Response) => {
  if(req.session) {
    req.session = null;
    res.redirect("/")
  }

})
router.get("/login", (req: Request, res:Response) => {
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
})

router.post("/login", (req: Request, res:Response) => {
  const {email, password} = req.body;
 if(email === "admin") {
  req.session = {loggedIn: true};
  res.redirect("/");
 } else {
  res.send("Invalid email")
 }
})
function requiredAuth(req: Request, res:Response, next: NextFunction) {
  if(req.session && req.session.loggedIn) {
    next();
  }
  res.status(403).send("not permitted");
}
router.get("/protected", requiredAuth, (req: Request, res:Response) => {
  res.send("proteced route");
});
export {router}