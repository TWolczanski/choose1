import {useRef, useState} from "react";
import ResultsBar from "./ResultsBar";
import Image from "next/image";
import styles from "../styles/SliderPost.module.css";
import postStyles from "../styles/Post.module.css";

export default function SliderPost({
  orientation,
  images,
  results,
  choice,
  className,
  onImageClick,
}) {
  const [chosen, setChosen] = useState(choice);
  const [sliding, setSliding] = useState(false);
  const imageWrappers = useRef(null);
  const imageWrapper1 = useRef(null);
  const imageWrapper2 = useRef(null);

  return (
    <div className={`${postStyles.post} ${className ? className : ""}`}>
      <div
        className={`${styles.images} ${styles[orientation]}`}
        ref={imageWrappers}
        onMouseMove={
          sliding
            ? (event) => {
                const rect = imageWrappers.current.getBoundingClientRect();
                const x = event.clientX - rect.left;
                const y = event.clientY - rect.top;
                if (orientation === "vertical") {
                  imageWrapper1.current.style.flex = x;
                  imageWrapper2.current.style.flex =
                    imageWrappers.current.clientWidth - x;
                } else if (orientation === "horizontal") {
                  imageWrapper1.current.style.flex = y;
                  imageWrapper2.current.style.flex =
                    imageWrappers.current.clientHeight - y;
                }
              }
            : undefined
        }
      >
        <div
          className={`
            ${styles.imageWrapper}
            ${!chosen ? postStyles.clickable : ""}
          `}
          onClick={() => {
            if (onImageClick) onImageClick(1);
            else if (!chosen) setChosen(1);
          }}
          ref={imageWrapper1}
        >
          <Image
            src={images[0]}
            alt="post image 1"
            fill={true}
            className={styles.image1}
          />
          <div
            className={`${postStyles.overlay} ${
              chosen === 1 ? postStyles.secondary : postStyles.primary
            }`}
          ></div>
        </div>

        <div
          className={`${styles.slider} ${styles[orientation]} ${
            styles[orientation + "Cursor"]
          }`}
          onMouseDown={(event) => {
            event.preventDefault();
            document.addEventListener("mouseup", () => setSliding(false), {
              once: true,
            });
            setSliding(true);
          }}
        >
          <div className={styles.sliderPrimary}></div>
          <div className={styles.sliderBg}></div>
          <div className={styles[orientation + "ClickableArea"]}></div>
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
          ref={imageWrapper2}
        >
          <Image
            src={images[1]}
            alt="post image 2"
            fill={true}
            className={styles.image2}
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
    </div>
  );
}
