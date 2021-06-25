import { MetadataKeys } from '../MetadataKeys';
import { Request, Response, NextFunction } from 'express';
import { use, controller, get, post, bodyValidator } from './decorator';
function requiredAuth(req: Request, res:Response, next: NextFunction) {
  if(req.session && req.session.loggedIn) {
    next();
  }
  res.status(403).send("not permitted");
}
@controller('')
class RootController {
  
	@get('/')
	getRoot(req: Request, res: Response) {
		if (req.session && req.session.loggedIn) {
			res.send(`
        <div>
          <p>You are loggedIn!</p>
          <a href="/auth/logout">
          logout
          </a>
        </div>

      `);
		} else {
			res.send(`
      <div>
        <p>You are not loggedIn!</p>
        <a href="/auth/login" >
      login
        </a>
      </div>

    `);
		}
  }

  @get("/protected")
  @use(requiredAuth)
  getProtected(req: Request, res:Response){
    res.send("proteced route");
  }
}

export default RootController;
