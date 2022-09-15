import Hero from "../components/Hero";
import Posts from "../components/Posts";
import Button from "../components/Button";
import UserRanking from "../components/UserRanking";
import Link from "next/link";
import {server} from "../config";
import styles from "../styles/home.module.css";

export default function home({heroPostData}) {
  return (
    <>
      <Hero postData={heroPostData} />
      <h1 className={styles.header}>Recent posts</h1>
      <Posts />
      <Link href="/posts">
        <a className={styles.viewMore}>
          <Button variant="secondary" text="View more" />
        </a>
      </Link>
      <h1 className={styles.header}>Top users</h1>
      <UserRanking top={3} />
      <Link href="/users">
        <a className={styles.viewMore}>
          <Button variant="secondary" text="View more" />
        </a>
      </Link>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${server}/data/posts.json`);
  const posts = await res.json();
  const heroPostData = posts[Math.floor(Math.random() * posts.length)];
  return {
    props: {
      heroPostData,
    },
  };
}
