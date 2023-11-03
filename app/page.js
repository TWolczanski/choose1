import Hero from "components/Hero";
import Posts from "components/Posts";
import Button from "components/Button";
import UserRanking from "components/UserRanking";
import Link from "next/link";
import {server} from "config";
import styles from "styles/HomePage.module.css";

async function getExamplePost() {
  const res = await fetch(`${server}/data/posts.json`, {cache: "no-store"});
  const posts = await res.json();
  return posts[Math.floor(Math.random() * posts.length)];
}

export default async function Page() {
  const examplePost = await getExamplePost();
  return (
    <>
      <Hero examplePost={examplePost} />
      <h1 className="header">Recent posts</h1>
      <Posts />
      <Link href="/posts" className={styles.viewMore}>
        <Button variant="secondary" text="View more" />
      </Link>
      <h1 className="header">Top users</h1>
      <UserRanking top={3} />
      <Link href="/users" className={styles.viewMore}>
        <Button variant="secondary" text="View more" />
      </Link>
    </>
  );
}
