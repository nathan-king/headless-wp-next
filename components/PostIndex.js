import { useEffect, useState } from "react";
import Link from "next/link";
import { Config } from "../config";

export default function PostIndex({ limit = 10, ...props }) {
  const [posts, setPosts] = useState();

  //Must use useEffect in non-page component

  useEffect(async () => {
    let res = await fetch(
      `${Config.apiUrl}/wp-json/wp/v2/posts?per_page=${limit}`
    );
    res = await res.json();
    setPosts(res);
  }, []);

  return (
    <div>
      <h3>Archive</h3>
      <ul>
        {!!posts &&
          posts.map((post) => (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>
                <a>{post.title.rendered}</a>
              </Link>
            </li>
          ))}
        {limit === 3 && !!posts ? (
          <Link href="/posts">
            <a>See more...</a>
          </Link>
        ) : null}
      </ul>
    </div>
  );
}
