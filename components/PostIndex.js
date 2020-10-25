import { useEffect, useState } from "react";
import Link from "next/link";
import { Config } from "../config";

export default function PostIndex() {
  const [posts, setPosts] = useState();

  //Must use useEffect in non-page component

  useEffect(async () => {
    let res = await fetch(`${Config.apiUrl}/wp-json/wp/v2/posts`);
    res = await res.json();
    setPosts(res);
  }, []);

  return (
    <div>
      <h1>Post Archive</h1>
      <ul>
        {!!posts &&
          posts.map((post) => (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>
                <a>{post.title.rendered}</a>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
