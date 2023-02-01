


CREATE TABLE articles (
    `id` int primary key NOT NULL AUTO_INCREMENT,
    `title` varchar(255) NOT NULL,
    `teaser` varchar(255) NOT NULL,
    `text` TEXT NOT NULL,
    `release_date` DATE NOT NULL,
    `keywords` varchar(255) NOT NULL,
    `tag_id` INT NOT NULL,
    CONSTRAINT fk_article_tag
    FOREIGN KEY (tag_id)
    REFERENCES tags(id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

