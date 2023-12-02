"use client";

import {useEffect, useState} from "react";
import Podium from "components/Podium";
import Select from "components/Select";
import Points from "components/Points";
import Avatar from "components/Avatar";
import Link from "next/link";
import styles from "styles/UserRanking.module.css";
import {useMediaQuery} from "react-responsive";

export default function UserRanking({top}) {
  const timeframes = ["All time", "Past year", "Past month", "Past week"];

  const [timeframe, setTimeframe] = useState("All time");
  const [topUsers, setTopUsers] = useState();

  const showPodium = useMediaQuery({minWidth: 900});

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
        initial="All time"
        onChange={(val) => setTimeframe(val)}
        className={styles.timeframe}
      />
      {topUsers && topUsers.length == 0 && <p>There are no users yet.</p>}
      {topUsers && showPodium && topUsers.length >= 3 && (
        <Podium top1={topUsers[0]} top2={topUsers[1]} top3={topUsers[2]} />
      )}
      {topUsers &&
        ((showPodium && topUsers.length > 3) ||
          (!showPodium && topUsers.length > 0)) && (
          <ul className={styles.ranking}>
            {topUsers.slice(showPodium ? 3 : 0).map((u, i) => (
              <li key={u.id}>
                <span className={styles.position}>{showPodium ? i + 4 : i + 1}.</span>
                <Link href={`/users/${u.id}`}>
                  <Avatar img={u.avatar} size="big" className={styles.avatar} />
                </Link>
                <div className={styles.data}>
                  <Link href={`/users/${u.id}`}>
                    <h2>{u.name}</h2>
                  </Link>
                  <Points amount={u.points} />
                </div>
              </li>
            ))}
          </ul>
        )}
    </div>
  );
}
