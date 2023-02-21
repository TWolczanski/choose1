import {useState} from "react";
import ResultsBar from "./ResultsBar";
import Image from "next/image";
import styles from "../styles/CarouselPost.module.css";
import postStyles from "../styles/Post.module.css";

export default function CarouselPost({
  images,
  results,
  choice,
  animation,
  showPercentage,
  clickable,
  roundedCorners,
  className,
  onImageClick,
}) {
  const [active, setActive] = useState(1);
  const [chosen, setChosen] = useState(choice);

  return (
    <div className={`${postStyles.post} ${className ? className : ""}`}>
      <div
        className={`
          ${styles.imageWrapper}
          ${clickable && !chosen ? postStyles.clickable : ""}
          ${roundedCorners ? postStyles.rounded : ""}
        `}
        onClick={() => {
          if (clickable) {
            if (onImageClick) onImageClick(active);
            else if (!chosen) setChosen(active);
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
            className={`${postStyles.overlay} ${
              active === chosen ? postStyles.secondary : postStyles.primary
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
    </div>
  );
}
