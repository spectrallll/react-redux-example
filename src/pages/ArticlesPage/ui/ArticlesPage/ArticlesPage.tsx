import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import { Article, ArticleList, ArticleView } from "entities/Article";
import { ArticleBlockType, ArticleType } from "entities/Article/model/types/article";
import styles from "./ArticlesPage.module.scss";

interface ArticlesPageProps {
    className?: string;
}

const article = {
  id: "1",
  title: "Javascript news",
  subtitle: "Что нового в JS за 2022 год?",
  img: "https://teknotower.com/wp-content/uploads/2020/11/js.png",
  views: 1022,
  createdAt: "26.02.2022",
  user: {
    id: "1",
    username: "rezonvns",
    avatar: "data:image/jpeg;base64,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",
  },
  type: [
    ArticleType.IT,
  ],
  blocks: [
    {
      id: "1",
      type: ArticleBlockType.TEXT,
      title: "Заголовок этого блока",
      paragraphs: [
        "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
        "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
        "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:",
      ],
    },
    {
      id: "4",
      type: ArticleBlockType.CODE,
      code: "<!DOCTYPE html>\n<html>\n  <body>\n    <p id=\"hello\"></p>\n\n    <script>\n      document.getElementById(\"hello\").innerHTML = \"Hello, world!\";\n    </script>\n  </body>\n</html>;",
    },
    {
      id: "5",
      type: ArticleBlockType.TEXT,
      title: "Заголовок этого блока",
      paragraphs: [
        "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
        "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:",
      ],
    },
    {
      id: "2",
      type: ArticleBlockType.IMAGE,
      src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
      title: "Рисунок 1 - скриншот сайта",
    },
    {
      id: "3",
      type: ArticleBlockType.CODE,
      code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
    },
    {
      id: "7",
      type: ArticleBlockType.TEXT,
      title: "Заголовок этого блока",
      paragraphs: [
        "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
        "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:",
      ],
    },
    {
      id: "8",
      type: ArticleBlockType.IMAGE,
      src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
      title: "Рисунок 1 - скриншот сайта",
    },
    {
      id: "9",
      type: ArticleBlockType.TEXT,
      title: "Заголовок этого блока",
      paragraphs: [
        "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
      ],
    },
  ],
} as Article;

const ArticlesPage = (props: ArticlesPageProps) => {
  const {
    className,
  } = props;

  return (
    <div
      className={classNames(styles.ArticlesPage, {}, [className])}
    >
      <ArticleList
        isLoading
        articles={new Array(16).fill(0).map((item, index) => ({
          ...article,
          id: `${index}`,
        }))}
        view={ArticleView.LIST}
      />
    </div>
  );
};

export default memo(ArticlesPage);
