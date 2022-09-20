import styles from "../styles/Author.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Author({id, name, avatar}) {
  return (
    <Link href={`/users/${id}`}>
      <a className={styles.author}>
        <div className={styles.avatarWrapper}>
          <Image
            src={avatar}
            alt="author's avatar"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <span>{name}</span>
      </a>
    </Link>
  );
}
