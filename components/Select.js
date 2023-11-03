import {useState} from "react";
import styles from "styles/Select.module.css";
import Image from "next/image";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "components/Dropdown";

export default function Select({options, initial, onChange, ...props}) {
  const [selected, setSelected] = useState(initial);
  const chevronUp = "/img/chevron-up.svg";
  const chevronDown = "/img/chevron-down.svg";
  const [icon, setIcon] = useState(chevronDown);

  return (
    <Dropdown
      {...props}
      onOpen={() => setIcon(chevronUp)}
      onClose={() => setIcon(chevronDown)}
    >
      <DropdownToggle className={styles.toggle}>
        <span>{selected}</span>
        <div className={styles.chevron}>
          <Image
            src={icon}
            alt="chevron icon"
            fill={true}
            className={styles.icon}
          />
        </div>
        <div className={styles.clickableArea}></div>
      </DropdownToggle>
      <DropdownMenu>
        {options.map((option, i) => (
          <DropdownItem
            key={i}
            onClick={() => {
              setSelected(option);
              if (onChange) onChange(option);
            }}
            className={option === selected ? styles.selected : ""}
          >
            {option}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
