import {useEffect, useState} from "react";
import Podium from "./Podium";
import Select from "./Select";
import Points from "./Points";
import Avatar from "./Avatar";
import styles from "../styles/UserRanking.module.css";

export default function UserRanking({top}) {
  const timeframes = ["All time", "Past year", "Past month", "Past week"];

  const [timeframe, setTimeframe] = useState("All time");
  const [topUsers, setTopUsers] = useState();

  useEffect(() => {
    const fetchTopUsers = async () => {
      const data = await fetch("/data/users.json");
      const users = await data.json();
      let time;
      switch (timeframe) {
        case "All time":
          time = "allTime";
          break;
        case "Past year":
          time = "pastYear";
          break;
        case "Past month":
          time = "pastMonth";
          break;
        case "Past week":
          time = "pastWeek";
          break;
      }
      users.sort((a, b) => {
        if (a.points[time] > b.points[time]) {
          return -1;
        }
        if (a.points[time] < b.points[time]) {
          return 1;
        }
        return 0;
      });
      setTopUsers(
        users.slice(0, top).map((u) => {
          u.points = u.points[time];
          return u;
        })
      );
    };
    fetchTopUsers();
  }, [timeframe]);

  return (
    <div className={styles.container}>
      <Select
        options={timeframes}
        selectedOption="All time"
        onChange={(val) => setTimeframe(val)}
        className={styles.timeframe}
      />
      {topUsers && topUsers.length >= 3 && (
        <Podium top1={topUsers[0]} top2={topUsers[1]} top3={topUsers[2]} />
      )}
      {topUsers && topUsers.length > 3 && (
        <ul className={styles.ranking}>
          {topUsers.slice(3).map((u, i) => (
            <li key={u.id}>
              <Avatar img={u.avatar} size="big" className={styles.avatar} />
              <div className={styles.data}>
                <h2>{u.name}</h2>
                <Points amount={u.points} />
              </div>
              <span className={styles.position}>{i + 4}.</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
