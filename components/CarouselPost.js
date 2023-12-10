"use client";

import {useRef, useState} from "react";
import ResultsBar from "components/ResultsBar";
import Image from "next/image";
import styles from "styles/CarouselPost.module.css";
import postStyles from "styles/Post.module.css";
import {InView} from "react-intersection-observer";

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
  const imageRefs = useRef([]);
  const imageListRef = useRef(null);

  return (
    <div className={`${postStyles.post} ${className ? className : ""}`}>
      <ul className={styles.images} ref={imageListRef}>
        {images.map((img, i) => (
          <InView
            root={imageListRef.current}
            threshold={0.5}
            onChange={(inView, entry) => inView && setActive(i + 1)}
            as="li"
            key={i}
            className={`
              ${styles.imageWrapper}
              ${clickable && !chosen ? postStyles.clickable : ""}
              ${roundedCorners ? postStyles.rounded : ""}
            `}
            onClick={() => {
              if (clickable) {
                if (onImageClick) onImageClick(i);
                else if (!chosen) setChosen(i);
              }
            }}
          >
            <Image
              src={img}
              alt="post image"
              fill={true}
              className={styles.image}
              ref={(el) => (imageRefs.current[i] = el)}
            />
            {clickable && (
              <div
                className={`${postStyles.overlay} ${
                  i === chosen ? postStyles.secondary : postStyles.primary
                }`}
              ></div>
            )}
          </InView>
        ))}
      </ul>

      <ResultsBar
        results={
          (chosen || !clickable) &&
          results.map((r, i) => (i + 1 === chosen ? r + 1 : r))
        }
        onClicks={images.map((img, i) => () => {
          imageRefs.current[i].scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "start",
          });
        })}
        highlighted={active}
        showPercentage={showPercentage}
      />
    </div>
  );
}
