import Head from "next/head";
import ArticlesList from "../components/ArticlesList";

export default function Home({ articles }) {
  console.log("articles: ", articles);
  return (
    <div>
      <Head>
        <title>Developer News</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1>Welcome to Developer News</h1>
      </div>

      <ArticlesList articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=6"
  );
  const articles = await res.json();

  return {
    props: { articles },
  };
};
