import {useRef, useState, createContext, useContext} from "react";
import styles from "styles/Dropdown.module.css";

const DropdownContext = createContext();

function useDropdown() {
  return useContext(DropdownContext);
}

export function Dropdown({children, onOpen, onClose, className, ...props}) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  function updateOpen(newOpen) {
    setOpen(newOpen);
    if (newOpen && onOpen) onOpen();
    if (!newOpen && onClose) onClose();
    if (newOpen) {
      document.addEventListener(
        "mousedown",
        (event) => {
          if (ref.current && !ref.current.contains(event.target))
            updateOpen(false);
        },
        {once: true}
      );
    }
  }

  return (
    <DropdownContext.Provider value={{open, updateOpen}}>
      <div
        {...props}
        className={`${styles.dropdown} ${className || ""}`}
        ref={ref}
      >
        {children}
      </div>
    </DropdownContext.Provider>
  );
}

export function DropdownToggle({children, ...props}) {
  const {open, updateOpen} = useDropdown();
  return (
    <div {...props} onClick={() => updateOpen(!open)}>
      {children}
    </div>
  );
}

export function DropdownMenu({children, className, ...props}) {
  const {open, updateOpen} = useDropdown();
  return (
    <>
      {open && (
        <ul
          {...props}
          onClick={() => updateOpen(false)}
          className={`${styles.menu} ${className || ""}`}
        >
          {children}
        </ul>
      )}
    </>
  );
}

export function DropdownItem({onClick, className, children, ...props}) {
  return (
    <li
      {...props}
      onClick={onClick}
      className={`${styles.item} ${className || ""}`}
    >
      {children}
    </li>
  );
}
