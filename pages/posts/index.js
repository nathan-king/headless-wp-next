// import Link from "next/link";
import { Config } from "../../config";
import PostIndex from "../../components/PostIndex";
import Layout from "../../components/Layout";

export default function Home({ posts }) {
  return (
    <Layout>
      <PostIndex />
    </Layout>
  );
}
