import {useState} from "react";
import ResultsBar from "./ResultsBar";
import Image from "next/image";
import styles from "../styles/SideBySidePost.module.css";
import postStyles from "../styles/Post.module.css";

export default function SideBySidePost({
  title,
  orientation,
  images,
  results,
  choice,
  className,
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
            if (!chosen) {
              setChosen(1);
            }
          }}
        >
          <Image
            src={images[0]}
            layout="fill"
            objectFit="contain"
            priority={true}
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
            if (!chosen) {
              setChosen(2);
            }
          }}
        >
          <Image
            src={images[1]}
            layout="fill"
            objectFit="contain"
            priority={true}
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
          chosen && results.map((r, i) => (i + 1 === chosen ? r + 1 : r))
        }
        highlighted={chosen}
      />
      <span className={postStyles.title}>{title}</span>
    </div>
  );
}
