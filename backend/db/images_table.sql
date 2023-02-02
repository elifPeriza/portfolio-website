CREATE TABLE images (
    `id` int primary key NOT NULL AUTO_INCREMENT,
    `title` varchar(255) NOT NULL,
    `url` varchar(255) NOT NULL,
    `alt` varchar(255) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
