import express from "express";

 class AppRouter {
    private static instance: express.Router;
    static getInstacne(): express.Router{
        if (AppRouter.instance) return AppRouter.instance;
        AppRouter.instance = express.Router();
        return AppRouter.instance;
    }

}
export default AppRouter.getInstacne();