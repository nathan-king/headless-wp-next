import React from "react";
import { Config } from "../config";

export default function PostIndex({ posts }) {
  return (
    <div>
      <h1>Post Index</h1>
      <ul>
        {posts.map((post) => (
          <li>{post.title.rendered}</li>
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
