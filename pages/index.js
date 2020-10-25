import PostIndex from "../components/PostIndex";
import Layout from "../components/Layout";
import { Config } from "../config";

export default function Home({ posts }) {
  return (
    <Layout>
      <h2>Home Page</h2>
      <PostIndex limit={3} />
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${Config.apiUrl}/wp-json/wp/v2/posts?per_page=3`);
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}
