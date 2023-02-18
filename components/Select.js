import {useRef, useState} from "react";
import styles from "../styles/Select.module.css";
import Image from "next/image";

export default function Select({options, initial, onChange, className}) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(initial);
  const ref = useRef(null);

  function handleClick() {
    const newOpen = !open;
    setOpen(newOpen);
    if (newOpen) {
      document.addEventListener(
        "mousedown",
        (event) => {
          if (ref.current && !ref.current.contains(event.target)) {
            setOpen(false);
          }
        },
        {once: true}
      );
    }
  }

  return (
    <div
      className={`${styles.container} ${className || ""}`}
      onClick={handleClick}
      ref={ref}
    >
      <span className={styles.select}>
        {selected}
        {open && (
          <ul className={styles.menu}>
            {options &&
              options.map((option, i) => (
                <li
                  key={i}
                  onClick={() => {
                    setSelected(option);
                    setOpen(false);
                    if (onChange) onChange(option);
                  }}
                  className={option === selected ? styles.selected : ""}
                >
                  {option}
                </li>
              ))}
          </ul>
        )}
      </span>

      <div className={styles.chevron}>
        <div className={styles.imageWrapper}>
          <Image
            src={open ? "/img/chevron-up.svg" : "/img/chevron-down.svg"}
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>

      <div className={styles.clickableArea}></div>
    </div>
  );
}
