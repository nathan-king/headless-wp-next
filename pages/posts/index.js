import Link from "next/link";
import { Config } from "../../config";

export default function Home({ posts }) {
  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li>
            <Link href={`/posts/${post.id}`}>
              <a>{post.title.rendered}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${Config.apiUrl}/wp-json/wp/v2/posts`);
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}
