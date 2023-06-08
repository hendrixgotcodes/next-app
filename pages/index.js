import Head from "next/head";
import ArticlesList from "../components/ArticlesList";
import {server} from "../config"

export default function Home({ articles }) {
  console.log("articles: ", articles);
  return (
    <div>
      <div>
        <h1>Welcome to Developer News</h1>
      </div>

      <ArticlesList articles={articles} />
    </div>
  );
}

// export const getStaticProps = async () => {
//   const res = await fetch(
//     "https://jsonplaceholder.typicode.com/posts?_limit=6"
//   );
//   const articles = await res.json();

//   return {
//     props: { articles },
//   };
// };

export const getStaticProps = async () => {
  const res = await fetch(
    `${server}/api/articles`
  );
  const articles = await res.json();

  return {
    props: { articles },
  };
};
