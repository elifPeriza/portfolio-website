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
  KEY `fk_article_tag` (`tag_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articles`
--

LOCK TABLES `articles` WRITE;
/*!40000 ALTER TABLE `articles` DISABLE KEYS */;
INSERT INTO `articles` VALUES (1,'Code demystified: Shorthand to Define Methods in Objects','The other day, I came across a code example in a documentation that confused me. It was an object with a method, but the syntax looked mysterious. ','Going through the documentation of the react-markdown library, I was confused by this code example: \n\n\n```\nimport React from \'react\'\nimport ReactDom from \'react-dom\'\nimport ReactMarkdown from \'react-markdown\'\nimport {Prism as SyntaxHighlighter} from \'react-syntax-highlighter\'\nimport {dark} from \'react-syntax-highlighter/dist/esm/styles/prism\'\n\n// Did you know you can use tildes instead of backticks for code in markdown? ✨\nconst markdown = `Here is some JavaScript code:\n\n~~~js\nconsole.log(\'It works!\')\n~~~\n`\n\nReactDom.render(\n  <ReactMarkdown\n    children={markdown}\n    components={{\n      code({node, inline, className, children, ...props}) {\n        const match = /language-(\\w+)/.exec(className || \'\')\n        return !inline && match ? (\n          <SyntaxHighlighter\n            children={String(children).replace(/\\n$/, \'\')}\n            style={dark}\n            language={match[1]}\n            PreTag=\"div\"\n            {...props}\n          />\n        ) : (\n          <code className={className} {...props}>\n            {children}\n          </code>\n        )\n      }\n    }}\n  />,\n  document.body\n)\n```\nreact-markdown is a library that renders markdown text safely into React elements. [Here]() I’ve written a thorough guide on how to use it.\n\n\nThe `ReactMarkdown` component, which is responsible for rendering the markdown into HTML, receives a prop `components` which takes in an object that maps HTML tag names to custom React components. \n\nIn the code example, the concise syntax method that came with ES6 was used.  To define a method inside an object, we no longer need to create a property and assign it to a function expression. Instead we define the function as a method directly.\n\nLet\'s look at a more basic example, provided by [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions?retiredLocale=de): \n\n```\nconst obj = {\n  foo() {\n    return \'bar\';\n  }\n};\n\nconsole.log(obj.foo());\n// Expected output: \"bar\"\n\n```\nThis is equivalent to this:\n\n```\nconst obj = {\n  foo: function() {\n    return \'bar\';\n  }\n};\n\nconsole.log(obj.foo());\n// Expected output: \"bar\"\n```\n\nSo with the traditional way the above code would look like this:\n\n```\nimport React from \'react\'\nimport ReactDom from \'react-dom\'\nimport ReactMarkdown from \'react-markdown\'\nimport {Prism as SyntaxHighlighter} from \'react-syntax-highlighter\'\nimport {dark} from \'react-syntax-highlighter/dist/esm/styles/prism\'\n\n// Did you know you can use tildes instead of backticks for code in markdown? ✨\nconst markdown = `Here is some JavaScript code:\n\n~~~js\nconsole.log(\'It works!\')\n~~~\n`\n\nReactDom.render(\n  <ReactMarkdown\n    children={markdown}\n    components={{\n      code: function({node, inline, className, children, ...props}) {\n        const match = /language-(\\w+)/.exec(className || \'\')\n        return !inline && match ? (\n          <SyntaxHighlighter\n            children={String(children).replace(/\\n$/, \'\')}\n            style={dark}\n            language={match[1]}\n            PreTag=\"div\"\n            {...props}\n          />\n        ) : (\n          <code className={className} {...props}>\n            {children}\n          </code>\n        )\n      }\n    }}\n  />,\n  document.body\n)\n```\n\nThere are a lot of ES6 features, I really like and wouldn’t want to miss, like destructuring or the optional chaining operator. However, I realized that I prefer the traditional way to define methods because it’s more explicit and readable in my opinion. \n\n## RESOURCES\n\n[Schmedtmann, The Complete JavaScript Course 2023: From Zero to Expert!\n(udemy course)](https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648565#search)\n \n[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions?retiredLocale=de)\n\n','2023-03-01','#javascript #ES6 #objects',4),(2,'The history of programming from a gender perspective','Coming soon ...','Coming soon ...','2023-02-03','#woman #tech #inclusivity #history',2),(3,'How to use react markdown with code highlighting ','For a recent project I used the react markdown library. However, I found the documentation hard to navigate. So here\'s a guide for beginners.','When it comes to writing content for the web, you’ll eventually come across Markdown. For my blog, I used [react-markdown library](https://www.npmjs.com/package/react-markdown?activeTab=readme) to safely convert my Markdown articles into HTML and React elements. The documentation was a bit tough to navigate, so I made a beginner-friendly guide for using react-markdown with react-syntax-highlighter. With this duo, you can create visually appealing articles complete with embedded code blocks. \n                                                                       \n## What is Markdown?\nMarkdown is a lightweight markup language that uses plain text syntax to indicate formatting. It is a simple way to write formatted text that can be easily converted to HTML to be used on the web.\n                                                                  \nMarkdown allows you to create headings, lists, emphasis, links, images, and more by using simple symbols and characters. For example, to create a heading, you simply add one or more hash symbols (#) at the beginning of a line, followed by the heading text:\n\n```\n# This is a top-level heading\n\n## This is a second-level heading\n```\n\nWhen this Markdown is rendered to HTML, it will generate the following markup:\n\n``` \n<h1>This is a top-level heading</h1>\n\n<h2>This is a second-level heading</h2>\n```\nThis makes it a popular choice for developers, bloggers, and writers who want to quickly create content without having to worry about the details of HTML markup.\n\n## How do we render Markdown text into HTML in a react application?\n\nSo far, I’ve created blog post in Markdown syntax which are stored as string in a database. But how to actually render it into HTML in my react application? The react-markdown library does the magic! \n\nWith react-markdown, you can simply pass your Markdown content as a string to the **`ReactMarkdown`** component, and it will automatically generate the corresponding HTML output.\n\nFirst install the package with your preferred package manager:\n```typescript\nnpm i react-markdown\n```\nNow, let’s see a basic example: \n\n```typescript\nimport ReactMarkdown from \'react-markdown\';\n\nfunction App() {\n\n  return (\n    <div className=\"App\">\n      <ReactMarkdown># Hello, *world*!</ReactMarkdown>\n    </div>\n  );\n}\n```\nThe resulting output will be: \n\n```typescript\n<h1>\n  Hello, <em>world</em>!\n</h1>\n\n```\n\nWe can also pass the markdown text as children prop to the **`ReactMarkdown`**  component. It represents the Markdown text you want to render:\n\n```typescript\nimport ReactMarkdown from \'react-markdown\';\n\nfunction App() {\nconst markdown = `# Hello, World!\nThis is a **bold** text.\n`;\n\n  return (\n    <div className=\"App\">\n      <ReactMarkdown children={markdownText} />\n    </div>\n  );\n}\n```\n## Customize :)\n\nSo **`ReactMarkdown`** generates standard HTML tags for each Markdown element and applies some basic styles. What makes the library really useful though is that you can customize how the elements are rendered.\n\n**First Step**: Let’s create our custom components and style it according to our design, so for example:\n\n```typescript\n\nexport const ArticleLink = ({ href, children }: any) => {\n  return (\n    <a\n      href={href}\n      target=\"_blank\"\n      rel=\"noreferrer\"\n      className=\"font-lato font-medium text-base text-violet-secondary no-underline decoration-violet-secondary mb-4 sm:text-lg sm:mb-6 \"\n    >\n      {children}\n    </a>\n  );\n};\n```\n\nCheck the [documentation](https://www.npmjs.com/package/react-markdown?activeTab=readme#appendix-b-components) to see which props to use for which HTML elements. \n\n**Second Step**: We want to pass these custom components to the `ReactMarkdown` component, so that it knows how to render certain HTML tags. \n\nLet\'s create a `MarkdownRenderer` component, so that we can reuse it wherever we need in our app. It receives the `markdownText` as prop and renders the `ReactMarkdown` component:\n            \n```\nimport ReactMarkdown from \"react-markdown\";\nimport { ArticleH2 } from \"./ArticleH2\";\nimport { ArticleH3 } from \"./ArticleH3\";\nimport { ArticleImage } from \"./ArticleImage\";\nimport { ArticleLink } from \"./ArticleLink\";\nimport { ArticleParagraph } from \"./ArticleParagraph\";\nimport { ArticleCode } from \"./ArticleCode\";\n\nexport const MarkdownRenderer = ({ markdownText }: any) => {\n  // eslint-disable-next-line react/no-children-prop\n  return (\n    <ReactMarkdown\n      children={markdownText}\n      components={{\n        img: ArticleImage,\n        h2: ArticleH2,\n        h3: ArticleH3,\n        p: ArticleParagraph,\n        a: ArticleLink,\n      }}\n    ></ReactMarkdown>\n  );\n};\n```\nLet\'s break the code down:  \n            \nThe **`ReactMarkdown`** component accepts a prop called **`components`**: It takes in an object that maps HTML tag names to custom React components. \n\nSo it is basically saying:  \n> *Hey, if you ecounter an img element in the Markdown text, render the ArticleImage component, if you encounter any h2, then render ArticleH2* ... and so on. \n\nSo the key/property represents HTML equivalents for the things you write with markdown (such as **`h1`** for **`# heading`** ) and as the value you pass your custom components.\n\n**Third Step**: Use the `MarkdownRenderer` where you need. In my case I use nextjs and getStaticProps to fetch the article markdown content from my backend API:\n\n```\nimport ArticleHeader from \"@/components/ArticleHeader\";\nimport Button from \"@/components/Button\";\nimport { MarkdownRenderer } from \"@/features/markdown/MarkdownRenderer\";\nimport { GetStaticPaths, GetStaticPropsContext } from \"next\";\n\nconst backendURL = \"http://localhost:5005\";\n\nexport default function Article({ article }: any) {\n  return (\n    <div className=\"w-full bg-violet-bg\">\n      <div className=\"mx-auto px-5 max-w-[750px] pb-24 sm:px-9\">\n        <div className=\"flex flex-row justify-end pt-8\">\n          <Button href=\"/\">Go Back</Button>\n        </div>\n\n        <ArticleHeader\n          title={article.title}\n          date={article.release_date}\n          keywords={article.keywords}\n        />\n        <MarkdownRenderer markdownText={article.text}></MarkdownRenderer>\n      </div>\n    </div>\n  );\n}\n\nexport async function getStaticProps(context: GetStaticPropsContext) {\n  const response = await fetch(\n    `${backendURL}/api/articles/${context.params?.id}`\n  );\n  const data = await response.json();\n  return {\n    props: {\n      article: data,\n    },\n    revalidate: 60 * 60,\n  };\n}\n\nexport const getStaticPaths: GetStaticPaths = async () => {\n  const response = await fetch(`${backendURL}/api/articles`);\n  const data = await response.json();\n\n  const paths = data.map((item: any) => {\n    return {\n      params: { id: `${item.id}`, title: item.title.split(\" \").join(\"-\") }, // we define the params for which next js should build this page at build time\n    };\n  });\n  console.log(paths);\n  return {\n    paths,\n    fallback: \"blocking\",\n  };\n};\n```\nEt voilà! The page you are reading right now is the result of using the `MarkdownRenderer`. Well, almost. Just one thing is missing: the highlighted code.\n\n## Using syntax-highlighter to use highlighted code\n\nreact-markdown will display code in a very plain format, without all the fancy colors we are used to see in our favorite code editor. \n\nFor that, we can use another awesome library called react-syntax-highlighter together with react-markdown.\n            \n\n\n## Resources ','2023-03-05','#markdown #react #syntax-highlighting',1);
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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tags`
--

LOCK TABLES `tags` WRITE;
/*!40000 ALTER TABLE `tags` DISABLE KEYS */;
INSERT INTO `tags` VALUES (1,'tutorial'),(2,'history'),(3,'CSS'),(4,'code chronicles');
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

-- Dump completed on 2023-03-20 23:13:45
