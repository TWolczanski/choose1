import styles from "styles/Podium.module.css";
import Points from "components/Points";
import Avatar from "components/Avatar";
import Link from "next/link";

export default function Podium({top1, top2, top3}) {
  return (
    <ul className={styles.podium}>
      <li className={styles.top2}>
        <Points amount={top2.points} />
        <Link href={`/users/${top2.id}`}>
          <Avatar img={top2.avatar} size="big" className={styles.avatar} />
        </Link>
        <div className={styles.bottom}>
          <Link href={`/users/${top2.id}`}>
            <h2>{top2.name}</h2>
          </Link>
          <p>{top2.about}</p>
        </div>
      </li>
      <li className={styles.top1}>
        <Points amount={top1.points} />
        <Link href={`/users/${top1.id}`}>
          <Avatar img={top1.avatar} size="big" className={styles.avatar} />
        </Link>
        <div className={styles.bottom}>
          <Link href={`/users/${top1.id}`}>
            <h2>{top1.name}</h2>
          </Link>
          <p>{top1.about}</p>
        </div>
      </li>
      <li className={styles.top3}>
        <Points amount={top3.points} />
        <Link href={`/users/${top3.id}`}>
          <Avatar img={top3.avatar} size="big" className={styles.avatar} />
        </Link>
        <div className={styles.bottom}>
          <Link href={`/users/${top3.id}`}>
            <h2>{top3.name}</h2>
          </Link>
          <p>{top3.about}</p>
        </div>
      </li>
    </ul>
  );
}
