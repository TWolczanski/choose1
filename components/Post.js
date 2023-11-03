import Link from "next/link";
import CarouselPost from "components/CarouselPost";
import SideBySidePost from "components/SideBySidePost";
import SliderPost from "components/SliderPost";
import styles from "styles/Post.module.css";

export default function Post({
  id,
  title,
  type,
  images,
  results,
  choice,
  className,
  onImageClick,
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
          onImageClick={onImageClick}
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
          onImageClick={onImageClick}
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
          onImageClick={onImageClick}
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
          onImageClick={onImageClick}
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
          onImageClick={onImageClick}
        />
      );
      break;
  }

  return (
    <div className={`${styles.postWrapper} ${className ? className : ""}`}>
      {post}
      {title && (
        <Link href={`/posts/${id}`} className={styles.title}>
          {title}
        </Link>
      )}
    </div>
  );
}
