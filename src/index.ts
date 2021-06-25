import express, {Request, Response} from "express";
import {router} from "./routes/loginRoute";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";
import Router from "./AppRouter";
import "./controller";

const app  = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}))
app.use(Router);

app.listen(3000, () => {
  console.log("server");
});

