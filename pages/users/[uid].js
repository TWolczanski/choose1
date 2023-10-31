import {server} from "../../config";
import styles from "../../styles/UserPage.module.css";
import Avatar from "../../components/Avatar";
import Paragraph from "../../components/Paragraph";
import Points from "../../components/Points";
import Image from "next/image";
import Posts from "../../components/Posts";
import Comments from "../../components/Comments";

export default function UserPage({id, name, about, avatar, points, links}) {
  return (
    <div className={styles.container}>
      <Avatar img={avatar} size="big" className={styles.avatar} />
      <h2 className={styles.name}>{name}</h2>
      {about && <Paragraph text={about} className={styles.about} />}
      <Points amount={points} className={styles.points} />
      {Object.entries(links).find(([website, link]) => link !== null) && (
        <ul className={styles.links}>
          {Object.entries(links).map(
            ([website, link]) =>
              link && (
                <li key={website}>
                  <a href={link}>
                    <div className={styles.iconWrapper}>
                      <Image
                        src={"/img/" + website + "-icon.svg"}
                        alt="website icon"
                        fill={true}
                        className={styles.icon}
                      />
                    </div>
                  </a>
                </li>
              )
          )}
        </ul>
      )}
      <h1 className="header">Recent posts</h1>
      <Posts authorId={id} />
      <h1 className="header">Recent comments</h1>
      <Comments authorId={id} className={styles.comments} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const uid = parseInt(context.params.uid);
  const ures = await fetch(`${server}/data/users.json`);
  const users = await ures.json();
  const user = users && users.find((u) => u.id === uid);
  if (!user) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      id: uid,
      name: user.name,
      about: user.about || null,
      avatar: user.avatar,
      points: user.points.allTime,
      links: {
        website: user.website || null,
        facebook: user.facebook
          ? "https://www.facebook.com/" + user.facebook
          : null,
        instagram: user.instagram
          ? "https://www.instagram.com/" + user.instagram
          : null,
        twitter: user.twitter ? "https://twitter.com/" + user.twitter : null,
        behance: user.behance
          ? "https://www.behance.net/" + user.behance
          : null,
        dribbble: user.dribbble
          ? "https://dribbble.com/" + user.dribbble
          : null,
      },
    },
  };
}
