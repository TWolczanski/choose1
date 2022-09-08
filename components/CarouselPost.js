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
  const [active, setActive] = useState(1);
  const [chosen, setChosen] = useState(choice);

  return (
    <div className={`${postStyles.post} ${className ? className : ""}`}>
      <div
        className={`
          ${styles.imageWrapper}
          ${clickable && !chosen ? styles.clickable : ""}
          ${roundedCorners ? styles.rounded : ""}
        `}
        onClick={() => {
          if (!chosen) {
            setChosen(active);
          }
        }}
      >
        <Image
          src={images[active - 1]}
          layout="fill"
          objectFit="contain"
          priority={true}
        />
        {clickable && (
          <div
            className={`${styles.overlay} ${
              active === chosen ? styles.secondary : styles.primary
            }`}
          ></div>
        )}
      </div>
      <ResultsBar
        results={
          (chosen || !clickable) &&
          results.map((r, i) => (i + 1 === chosen ? r + 1 : r))
        }
        onClicks={images.map((img, i) => () => setActive(i + 1))}
        highlighted={active}
        showPercentage={showPercentage}
      />
      <span className={postStyles.title}>{title}</span>
    </div>
  );
}
