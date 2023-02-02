import { Router } from "express";
import { GetArticles } from "./articles.handler";

const ArticlesRouter = Router({ mergeParams: true });

ArticlesRouter.get("/", GetArticles);
// ArticlesRouter.get("/:id", GetArticleByID);

export default ArticlesRouter;
