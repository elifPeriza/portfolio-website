-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: portfolio
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `articles`
--

DROP TABLE IF EXISTS `articles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `articles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `teaser` varchar(255) NOT NULL,
  `text` text NOT NULL,
  `release_date` date NOT NULL,
  `keywords` varchar(255) NOT NULL,
  `tag_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_article_tag` (`tag_id`),
  CONSTRAINT `fk_article_tag` FOREIGN KEY (`tag_id`) REFERENCES `tags` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articles`
--

LOCK TABLES `articles` WRITE;
/*!40000 ALTER TABLE `articles` DISABLE KEYS */;
INSERT INTO `articles` VALUES (1,'How to create wavy shapes with SVG','In one of thes group projects during the bootcamp, we struggled with a header that had a wavy shape with a background image. tempor incididunt ut labore et dolore magna aliqua. Turpis in eu mi bibendum neque egestas congue quisque egestas.','In one of thes group projects during the bootcamp, we struggled with a header that had a wavy shape with a background image. tempor incididunt ut labore et dolore magna aliqua. Turpis in eu mi bibendum neque egestas congue quisque egestas.\n\n## What is SVG?\n\nSVG stands for Scalable Vector Graphics, a type of image file format used for vector graphics on the web. Unlike raster graphics which are made up of pixels, vector graphics are made up of paths, shapes, and curves defined by mathematical equations.\n\nThis allows SVGs to be resized without losing quality, making them well-suited for graphics that need to be resized often, such as logos, icons, and illustrations. SVGs can be created and edited using vector graphic design software, and can be animated using CSS or JavaScript. They are widely supported across web browsers and devices.\n\n![Alt text](https://images.unsplash.com/photo-1661956601030-fdfb9c7e9e2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1942&q=80)\n\n## When to use SVG?\n\nIt makes sense to use SVG when:\n\nResolution independence is required: Since SVGs are vector-based, they can be scaled up or down without losing quality, making them ideal for logos, icons, and illustrations that need to be resized often.\n\nHigh-quality graphics are desired: SVGs can produce sharp, clean graphics with small file sizes, making them a good choice for graphics that need to be detailed and high-quality.\n\nAnimations are needed: SVGs can be animated using CSS or JavaScript, making them a good choice for interactive graphics, charts, and other data visualizations.\n\nAccessibility is important: SVGs can be made accessible to assistive technologies such as screen readers, making them a good choice for graphics that need to be inclusive and accessible to all users.\n\nWeb performance is a concern: Since SVGs have small file sizes, they can be loaded quickly, improving the overall performance of a web page.\n\nIt\'s important to note that while SVGs are well-suited for certain types of graphics, they may not be the best choice for all graphics. For example, photographs and complex images with many colors and shades are better suited to raster formats like JPEG or PNG.\n\n## RESOURCES\n\n[CSS/SVG Art & Animation: A Curated Collection](https://blog.anniebombanie.com/css-svg-art-animation-a-curated-collection-of-useful-resources-tutorials)\n','2023-02-02','#css #svg #frontend',1),(2,'The history of programming from a gender perspective','Women have made and continue to make significant contributions to the field of computer programming and technology. Ada Lovelace is one of the most popular. It is worth diving deeper into how the role of women changed over time.','Women have made and continue to make significant contributions to the field of computer programming and technology. Ada Lovelace is one of the most popular. It is worth diving deeper into how the role of women changed over time.\n\n## Early computers: The 1940s and 1950s\n\nDuring the early days of computing in the 1940s and 1950s, women played a significant role as \"computers\" or human calculators. During World War II, many women were employed by the US government to work on mathematical calculations for the military. These women, who were called \"computers,\" performed calculations using mechanical calculators and were responsible for performing a variety of mathematical and scientific calculations.\n\nAfter the war, the use of electronic computers began to increase, and women continued to play an important role as \"computers.\" They were employed by government agencies and private companies to perform calculations for scientific and engineering projects. These women worked with early computers like the ENIAC, UNIVAC, and IBM 704.\n\nDespite their important contributions, the role of women as \"computers\" was often undervalued, and they were paid less than their male counterparts. However, their work laid the foundation for the development of software and paved the way for women to play a more significant role in the programming field in the future.\n\n## Emergence of Software\n\nWith the advent of software in the 1950s and 1960s, women began to take on programming roles and made significant contributions to the field. One of the most notable women in this era was Grace Hopper, a mathematician and computer programmer who developed one of the first compilers and was a pioneer in the development of COBOL, a programming language used for business applications.\n\nWomen also worked on early computer systems, such as the IBM System/360, and were responsible for writing software for scientific and engineering applications. They also worked on early computer languages like FORTRAN, LISP, and BASIC.\n\nDespite their important contributions, the field of computer programming was still largely male-dominated during this time, and women often faced challenges and discrimination in the workplace.\n\n### Credits\n\n[chatGPT](https://chat.openai.com/) ','2023-02-03','#woman #tech #inclusivity #history',2),(3,'How to use react markdown  ','For a recent project I used the react markdown library. However, I found the documentation not to be very beginner-friendly. So here\'s a guide how to use it with nextjs.','For a recent project I used the react markdown library. However, I found the documentation not to be very beginner-friendly. So here\'s a guide how to use it with nextjs.\n\n## What for?\n\nReact Markdown is a library used for rendering markdown text into HTML elements in React applications. Markdown is a simple syntax for formatting plain text documents, and it is commonly used for writing content for websites, blogs, and other applications.\n\nReact Markdown allows developers to write their content in Markdown syntax and then render it as HTML elements within a React application. This makes it easy to create dynamic, reusable, and scalable components for displaying content in a user-friendly format.\n\n## How does it work?\n\nReact Markdown works by converting the markdown text into a tree-like structure of React components, which can then be rendered into the DOM. This structure can be easily customized and styled using React\'s built-in styling capabilities or CSS.\n\n## Resources ','2023-02-02','#markdown #react',1);
/*!40000 ALTER TABLE `articles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `images` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `alt` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tags`
--

DROP TABLE IF EXISTS `tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tags` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tags`
--

LOCK TABLES `tags` WRITE;
/*!40000 ALTER TABLE `tags` DISABLE KEYS */;
INSERT INTO `tags` VALUES (1,'tutorial'),(2,'history'),(3,'CSS');
/*!40000 ALTER TABLE `tags` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-02 22:55:54
