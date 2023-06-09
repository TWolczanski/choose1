import styles from "../styles/Podium.module.css";
import Points from "./Points";
import Avatar from "./Avatar";
import Link from "next/link";

export default function Podium({top1, top2, top3}) {
  return (
    <ul className={styles.podium}>
      <li className={styles.top2}>
        <Points amount={top2.points} />
        <Link href={`/users/${top2.id}`}>
          <a>
            <Avatar img={top2.avatar} size="big" className={styles.avatar} />
          </a>
        </Link>
        <div className={styles.bottom}>
          <Link href={`/users/${top2.id}`}>
            <a>
              <h2>{top2.name}</h2>
            </a>
          </Link>
          <p>{top2.about}</p>
        </div>
      </li>
      <li className={styles.top1}>
        <Points amount={top1.points} />
        <Link href={`/users/${top1.id}`}>
          <a>
            <Avatar img={top1.avatar} size="big" className={styles.avatar} />
          </a>
        </Link>
        <div className={styles.bottom}>
          <Link href={`/users/${top1.id}`}>
            <a>
              <h2>{top1.name}</h2>
            </a>
          </Link>
          <p>{top1.about}</p>
        </div>
      </li>
      <li className={styles.top3}>
        <Points amount={top3.points} />
        <Link href={`/users/${top3.id}`}>
          <a>
            <Avatar img={top3.avatar} size="big" className={styles.avatar} />
          </a>
        </Link>
        <div className={styles.bottom}>
          <Link href={`/users/${top3.id}`}>
            <a>
              <h2>{top3.name}</h2>
            </a>
          </Link>
          <p>{top3.about}</p>
        </div>
      </li>
    </ul>
  );
}
