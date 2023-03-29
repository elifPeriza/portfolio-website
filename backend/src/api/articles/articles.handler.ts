import { RequestHandler } from "express";
import { RowDataPacket } from "mysql2";
import database from "../../database";
import { dateToString } from "../../utils/date";

interface ArticlePreview extends RowDataPacket {
  id: number;
  title: string;
  teaser: string;
  release_date: string;
  tag: string;
}
type ArticleParams = {
  id: number;
};

type AllArticlesQuery = ArticlePreview[];

interface SingleArticle extends RowDataPacket {
  id: number;
  title: string;
  teaser: string;
  text: string;
  release_date: string;
  keywords: string;
  tag_id: number;
}

type SingleArticleQuery = [SingleArticle];

export const GetArticles: RequestHandler = (req, res) => {
  database
    .query<AllArticlesQuery>(
      "SELECT articles.id, articles.title, articles.teaser, articles.release_date, tags.name as tag FROM articles JOIN tags ON articles.tag_id = tags.id"
    )
    .then(([result]) => {
      const articles = result.map((article: ArticlePreview) => {
        return {
          ...article,
          release_date: dateToString(new Date(article.release_date)),
        };
      });
      res.status(200).json(articles);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Internal Server Error");
    });
};

export const GetArticleById: RequestHandler<ArticleParams, {}, {}, {}> = (
  req,
  res
) => {
  const { id } = req.params;
  database
    .query<SingleArticleQuery>("Select * FROM articles WHERE id = ?", [id])
    .then(([result]) => {
      const article = {
        ...result[0],
        release_date: dateToString(new Date(result[0].release_date)),
      };
      res.status(200).json(article);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Internal Server Error");
    });
};
