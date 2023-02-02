import { RequestHandler } from "express";
import database from "../../database";
import { dateToString } from "../../utils/date";

export const GetArticles: RequestHandler = (req, res) => {
  database
    .query(
      "SELECT articles.title, articles.teaser, articles.release_date, tags.name FROM articles JOIN tags ON articles.tag_id = tags.id"
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
