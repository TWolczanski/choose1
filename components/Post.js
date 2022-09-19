import Link from "next/link";
import CarouselPost from "./CarouselPost";
import SideBySidePost from "./SideBySidePost";
import SliderPost from "./SliderPost";
import styles from "../styles/Post.module.css";

export default function Post({
  id,
  title,
  type,
  images,
  results,
  choice,
  className,
}) {
  let post;
  switch (type) {
    case "side by side horizontal":
      post = (
        <SideBySidePost
          orientation="horizontal"
          images={images}
          results={results}
          choice={choice}
        />
      );
      break;
    case "side by side vertical":
      post = (
        <SideBySidePost
          orientation="vertical"
          images={images}
          results={results}
          choice={choice}
        />
      );
      break;
    case "slider horizontal":
      post = (
        <SliderPost
          orientation="horizontal"
          images={images}
          results={results}
          choice={choice}
        />
      );
      break;
    case "slider vertical":
      post = (
        <SliderPost
          orientation="vertical"
          images={images}
          results={results}
          choice={choice}
        />
      );
      break;
    case "carousel":
      post = (
        <CarouselPost
          images={images}
          results={results}
          choice={choice}
          clickable
          roundedCorners
        />
      );
      break;
  }

  return (
    <div className={`${styles.postWrapper} ${className ? className : ""}`}>
      {post}
      {title && (
        <Link href={`/posts/${id}`}>
          <a className={styles.title}>{title}</a>
        </Link>
      )}
    </div>
  );
}
