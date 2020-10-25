import Link from "next/link";

export default function Header() {
  return (
    <div>
      <Link href="/">
        <a>
          <h1>Wordpress Blog</h1>
        </a>
      </Link>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
      </nav>
    </div>
  );
}
