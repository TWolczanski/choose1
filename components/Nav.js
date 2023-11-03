import Link from "next/link";
import {useState} from "react";
import styles from "styles/Nav.module.css";
import {usePathname} from "next/navigation";

export default function Nav(props) {
  const pages = ["about", "posts", "users"];
  const [hovered, setHovered] = useState(null);
  const pathname = usePathname();

  return (
    <nav {...props}>
      <ul className={styles.pages}>
        {pages.map((p) => (
          <li key={p}>
            <div
              className={`${styles.bullet} ${
                hovered === p ? styles.hovered : styles.notHovered
              } ${pathname === "/" + p ? styles.active : ""}`}
            ></div>
            <Link
              href={"/" + p}
              onMouseEnter={() => setHovered(p)}
              onMouseLeave={() => setHovered(null)}
            >
              {p}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
