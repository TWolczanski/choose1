import styles from "../styles/Author.module.css";
import Link from "next/link";
import Avatar from "./Avatar";

export default function Author({id, name, avatar, className}) {
  return (
    <Link href={`/users/${id}`}>
      <a className={`${styles.author} ${className}`}>
        <Avatar img={avatar} size="small" />
        <span>{name}</span>
      </a>
    </Link>
  );
}
