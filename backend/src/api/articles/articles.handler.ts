import { RequestHandler } from "express";
import database from "../../database";
import { dateToString } from "../../utils/date";

export const GetArticles: RequestHandler = (req, res) => {
  database
    .query(
      "SELECT articles.id, articles.title, articles.teaser, articles.release_date, tags.name as tag FROM articles JOIN tags ON articles.tag_id = tags.id"
    )
    .then(([result]) => {
      const articles = (result as any).map((article: any) => {
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

export const GetArticleById: RequestHandler = (req, res) => {
  const { id } = req.params;
  database
    .query("Select * FROM articles WHERE id = ?", [id])
    .then(([result]: any) => {
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
