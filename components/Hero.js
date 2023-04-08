import styles from "../styles/Hero.module.css";
import Button from "./Button";
import Link from "next/link";
import CarouselPost from "./CarouselPost";

export default function Hero({postData}) {
  return (
    <section className={styles.hero}>
      <div className={styles.main}>
        <h1>Help and get help with making design decisions.</h1>
        <p>
          Having trouble selecting the best logo concept or the proper color
          scheme in your UI project? Or maybe you can&lsquo;t decide on the camera
          angle in your 3D render? Post your work and see what others have to
          say about it.
        </p>
        <Link href="/about">
          <a>
            <Button variant="secondary" text="Learn more" />
          </a>
        </Link>
      </div>
      <CarouselPost
        images={postData.images}
        results={postData.results}
        animation
        showPercentage
        className={styles.post}
      />
    </section>
  );
}
