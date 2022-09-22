import styles from "../styles/Podium.module.css";
import Points from "./Points";
import Avatar from "./Avatar";

export default function Podium({top1, top2, top3}) {
  return (
    <ul className={styles.podium}>
      <li className={styles.top2}>
        <Points amount={top2.points} />
        <Avatar img={top2.avatar} size="big" className={styles.avatar} />
        <div className={styles.bottom}>
          <h2>{top2.name}</h2>
          <p>{top2.about}</p>
        </div>
      </li>
      <li className={styles.top1}>
        <Points amount={top1.points} />
        <Avatar img={top1.avatar} size="big" className={styles.avatar} />
        <div className={styles.bottom}>
          <h2>{top1.name}</h2>
          <p>{top1.about}</p>
        </div>
      </li>
      <li className={styles.top3}>
        <Points amount={top3.points} />
        <Avatar img={top3.avatar} size="big" className={styles.avatar} />
        <div className={styles.bottom}>
          <h2>{top3.name}</h2>
          <p>{top3.about}</p>
        </div>
      </li>
    </ul>
  );
}
