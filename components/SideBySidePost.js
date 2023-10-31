import {useState} from "react";
import ResultsBar from "./ResultsBar";
import Image from "next/image";
import styles from "../styles/SideBySidePost.module.css";
import postStyles from "../styles/Post.module.css";

export default function SideBySidePost({
  orientation,
  images,
  results,
  choice,
  className,
  onImageClick,
}) {
  const [chosen, setChosen] = useState(choice);

  return (
    <div className={`${postStyles.post} ${className ? className : ""}`}>
      <div className={`${styles.images} ${styles[orientation]}`}>
        <div
          className={`
            ${styles.imageWrapper}
            ${!chosen ? postStyles.clickable : ""}
          `}
          onClick={() => {
            if (onImageClick) onImageClick(1);
            else if (!chosen) setChosen(1);
          }}
        >
          <Image
            src={images[0]}
            alt="post image 1"
            fill={true}
            className={styles.image}
          />
          <div
            className={`${postStyles.overlay} ${
              chosen === 1 ? postStyles.secondary : postStyles.primary
            }`}
          ></div>
        </div>

        <div
          className={`
            ${styles.imageWrapper}
            ${!chosen ? postStyles.clickable : ""}
          `}
          onClick={() => {
            if (onImageClick) onImageClick(2);
            else if (!chosen) setChosen(2);
          }}
        >
          <Image
            src={images[1]}
            alt="post image 2"
            fill={true}
            className={styles.image}
          />
          <div
            className={`${postStyles.overlay} ${
              chosen === 2 ? postStyles.secondary : postStyles.primary
            }`}
          ></div>
        </div>
      </div>

      <ResultsBar
        results={
          results &&
          chosen &&
          results.map((r, i) => (i + 1 === chosen ? r + 1 : r))
        }
        highlighted={chosen}
      />
    </div>
  );
}
