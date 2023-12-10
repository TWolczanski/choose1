import {useRef, useState, createContext, useContext} from "react";
import {Manager, Popper, Reference} from "react-popper";
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
    <Manager>
      <DropdownContext.Provider value={{open, updateOpen}}>
        <div
          {...props}
          className={`${styles.dropdown} ${className || ""}`}
          ref={ref}
        >
          {children}
        </div>
      </DropdownContext.Provider>
    </Manager>
  );
}

export function DropdownToggle({children, ...props}) {
  const {open, updateOpen} = useDropdown();
  return (
    <Reference>
      {({ref}) => (
        <div {...props} onClick={() => updateOpen(!open)} ref={ref}>
          {children}
        </div>
      )}
    </Reference>
  );
}

export function DropdownMenu({children, className, ...props}) {
  const {open, updateOpen} = useDropdown();
  return (
    <Popper placement="bottom-start">
      {({ref, style, placement}) =>
        open && (
          <ul
            {...props}
            onClick={() => updateOpen(false)}
            className={`${styles.menu} ${
              placement === "bottom-end" || placement === "top-end"
                ? styles.textAlignRight
                : ""
            } ${className || ""}`}
            ref={ref}
            style={style}
          >
            {children}
          </ul>
        )
      }
    </Popper>
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
