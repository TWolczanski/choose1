import Hero from "components/Hero";
import Posts from "components/Posts";
import Button from "components/Button";
import UserRanking from "components/UserRanking";
import Link from "next/link";
import styles from "styles/HomePage.module.css";

export default async function Page() {
  return (
    <>
      <Hero />
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
