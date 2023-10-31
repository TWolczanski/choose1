import Link from "next/link";
import {useRouter} from "next/router";
import {useState} from "react";
import styles from "../styles/Nav.module.css";

export default function Nav(props) {
  const pages = ["about", "posts", "users"];
  const [hovered, setHovered] = useState(null);
  const router = useRouter();

  return (
    <nav {...props}>
      <ul className={styles.pages}>
        {pages.map((p) => (
          <li key={p}>
            <div
              className={`${styles.bullet} ${
                hovered === p ? styles.hovered : styles.notHovered
              } ${router.pathname === "/" + p ? styles.active : ""}`}
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
