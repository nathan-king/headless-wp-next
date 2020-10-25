import { Config } from "../../config";
import parse from "html-react-parser";

export default function Post({ post }) {
  const content = parse(post.content.rendered);

  return (
    <div>
      <h1>{post.title.rendered}</h1>
      {content}
    </div>
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
