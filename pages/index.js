import Link from "next/link";
import { Config } from "../config";

export default function Home({ posts }) {
  return (
    <div>
      <h1>Home Page</h1>
      <h2>Posts</h2>
      <ul>
        {posts.slice(0, 2).map((post) => (
          <li>
            <Link href={`/posts/${post.id}`}>
              <a>{post.title.rendered}</a>
            </Link>
          </li>
        ))}
        <Link href="/posts">
          <a>See more...</a>
        </Link>
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
