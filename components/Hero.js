import styles from "styles/Hero.module.css";
import Button from "components/Button";
import Link from "next/link";
import CarouselPost from "components/CarouselPost";
import {server} from "config";

async function getExamplePost() {
  const res = await fetch(`${server}/data/posts.json`, {cache: "no-store"});
  const posts = await res.json();
  return posts[Math.floor(Math.random() * posts.length)];
}

export default async function Hero() {
  const examplePost = await getExamplePost();
  return (
    <section className={styles.hero}>
      <div className={styles.main}>
        <h1>Help and get help with making design decisions.</h1>
        <p>
          Having trouble selecting the best logo concept or the proper color
          scheme in your UI project? Or maybe you can&lsquo;t decide on the
          camera angle in your 3D render? Post your work and see what others
          have to say about it.
        </p>
        <Link href="/about">
          <Button variant="secondary" text="Learn more" />
        </Link>
      </div>
      <CarouselPost
        images={examplePost.images}
        results={examplePost.results}
        animation
        showPercentage
        className={styles.post}
      />
    </section>
  );
}
