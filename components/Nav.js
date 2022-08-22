import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/Nav.module.css";

export default function Nav() {
  const [hovered, setHovered] = useState(null);
  const router = useRouter();
  return (
    <nav>
      <ul className={styles.pages}>
        <li>
          <div className={`${styles.bullet} ${hovered === "about" ? styles.hovered : styles.unhovered} ${router.pathname === "/about" ? styles.active : ""}`}></div>
          <Link href="/about">
            <a onMouseEnter={() => setHovered("about")} onMouseLeave={() => setHovered(null)}>About</a>
          </Link>
        </li>

        <li>
          <div className={`${styles.bullet} ${hovered === "posts" ? styles.hovered : styles.unhovered} ${router.pathname === "/posts" ? styles.active : ""}`}></div>
          <Link href="/posts">
            <a onMouseEnter={() => setHovered("posts")} onMouseLeave={() => setHovered(null)}>Posts</a>
          </Link>
        </li>

        <li>
          <div className={`${styles.bullet} ${hovered === "users" ? styles.hovered : styles.unhovered} ${router.pathname === "/users" ? styles.active : ""}`}></div>
          <Link href="/users">
            <a onMouseEnter={() => setHovered("users")} onMouseLeave={() => setHovered(null)}>Users</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
