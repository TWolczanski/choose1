import {server} from "config";
import styles from "styles/UserPage.module.css";
import Avatar from "components/Avatar";
import Paragraph from "components/Paragraph";
import Points from "components/Points";
import Image from "next/image";
import Posts from "components/Posts";
import Comments from "components/Comments";
import {notFound} from "next/navigation";

async function getUser(id) {
  const res = await fetch(`${server}/data/users.json`, {cache: "no-store"});
  const users = await res.json();
  const user = users && users.find((u) => u.id === parseInt(id));
  if (!user) notFound();

  return {
    id: user.id,
    name: user.name,
    about: user.about,
    avatar: user.avatar,
    points: user.points.allTime,
    links: {
      website: user.website,
      facebook: user.facebook && "https://www.facebook.com/" + user.facebook,
      instagram:
        user.instagram && "https://www.instagram.com/" + user.instagram,
      twitter: user.twitter && "https://twitter.com/" + user.twitter,
      behance: user.behance && "https://www.behance.net/" + user.behance,
      dribbble: user.dribbble && "https://dribbble.com/" + user.dribbble,
    },
  };
}

export default async function Page({params}) {
  const user = await getUser(params.id);
  return (
    <>
      <div className={styles.container}>
        <Avatar img={user.avatar} size="big" className={styles.avatar} />
        <h2 className={styles.name}>{user.name}</h2>
        {user.about && <Paragraph text={user.about} className={styles.about} />}
        <Points amount={user.points} className={styles.points} />
        {Object.entries(user.links).find(([website, link]) => link) && (
          <ul className={styles.links}>
            {Object.entries(user.links).map(
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
      </div>
      <h1 className="header">Recent posts</h1>
      <Posts authorId={user.id} />
      <h1 className="header">Recent comments</h1>
      <div className={styles.container}>
        <Comments authorId={user.id} className={styles.comments} />
      </div>
    </>
  );
}
