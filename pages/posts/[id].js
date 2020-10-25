import { Config } from "../../config";
import parse from "html-react-parser";
import Layout from "../../components/Layout";

export default function Post({ post }) {
  const title = parse(post.title.rendered);
  const content = parse(post.content.rendered);

  return (
    <Layout>
      <h2>{title}</h2>
      <p>{content}</p>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${Config.apiUrl}/wp-json/wp/v2/posts`);
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`${Config.apiUrl}/wp-json/wp/v2/posts/${params.id}`);
  const post = await res.json();
  return {
    props: {
      post,
    },
  };
}
