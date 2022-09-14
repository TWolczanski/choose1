import {useEffect, useRef, useState} from "react";
import styles from "../styles/Select.module.css";
import Image from "next/image";

export default function Select({options, selectedOption, onChange, className}) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(selectedOption);
  const ref = useRef(null);

  useEffect(() => {
    if (open) {
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
  }, [open]);

  useEffect(() => {
    if (onChange) {
      onChange(selected);
    }
  }, [selected]);

  return (
    <div
      className={`${styles.container} ${className}`}
      onClick={() => setOpen(!open)}
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
