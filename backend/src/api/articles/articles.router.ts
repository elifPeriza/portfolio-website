import { Router } from "express";
import { GetArticleById, GetArticles } from "./articles.handler";

const ArticlesRouter = Router({ mergeParams: true });

ArticlesRouter.get("/", GetArticles);
ArticlesRouter.get("/:id", GetArticleById);

export default ArticlesRouter;
