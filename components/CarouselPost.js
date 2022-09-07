import {useState} from "react";
import ResultsBar from "./ResultsBar";
import Image from "next/image";
import styles from "../styles/CarouselPost.module.css";
import postStyles from "../styles/Post.module.css";

export default function CarouselPost({
  title,
  images,
  results,
  choice,
  animation,
  showPercentage,
  clickable,
  roundedCorners,
  className,
}) {
  const [active, setActive] = useState(0);

  return (
    <div className={`${postStyles.post} ${className ? className : ""}`}>
      <div
        className={`
          ${styles.imageWrapper}
          ${clickable ? styles.clickable : ""}
          ${roundedCorners ? styles.rounded : ""}
        `}
      >
        <Image
          src={images[active]}
          layout="fill"
          objectFit="contain"
          priority
        ></Image>
      </div>
      <ResultsBar
        results={(choice || !clickable) && results}
        onClicks={images.map((img, i) => () => setActive(i))}
        highlighted={active + 1}
        showPercentage={showPercentage}
      />
      <span className={postStyles.title}>{title}</span>
    </div>
  );
}
