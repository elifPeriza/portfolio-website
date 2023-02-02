import { Router } from "express";
import ArticlesRouter from "./api/articles/articles.router";

const MainRouter = Router();

MainRouter.use("/articles", ArticlesRouter);

export default MainRouter;
