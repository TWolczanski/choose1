import styles from "../styles/Podium.module.css";
import Points from "./Points";
import Image from "next/image";

export default function Podium({top1, top2, top3}) {
  return (
    <ul className={styles.podium}>
      <li className={styles.top2}>
        <Points amount={top2.points} />
        <div className={styles.avatarWrapper}>
          <Image
            src={top2.avatar}
            alt={top2.name + " avatar"}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className={styles.bottom}>
          <h2>{top2.name}</h2>
          <p>{top2.about}</p>
        </div>
      </li>
      <li className={styles.top1}>
        <Points amount={top1.points} />
        <div className={styles.avatarWrapper}>
          <Image
            src={top1.avatar}
            alt={top1.name + " avatar"}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className={styles.bottom}>
          <h2>{top1.name}</h2>
          <p>{top1.about}</p>
        </div>
      </li>
      <li className={styles.top3}>
        <Points amount={top3.points} />
        <div className={styles.avatarWrapper}>
          <Image
            src={top3.avatar}
            alt={top3.name + " avatar"}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className={styles.bottom}>
          <h2>{top3.name}</h2>
          <p>{top3.about}</p>
        </div>
      </li>
    </ul>
  );
}
