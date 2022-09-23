import {server} from "../../config";
import styles from "../../styles/UserPage.module.css";
import Avatar from "../../components/Avatar";
import Paragraph from "../../components/Paragraph";
import Points from "../../components/Points";
import Image from "next/image";
import Posts from "../../components/Posts";
import Comments from "../../components/Comments";

export default function UserPage({
  id,
  name,
  about,
  avatar,
  points,
  links,
  comments,
}) {
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
                    <div className={styles.icon}>
                      <Image
                        src={"/img/" + website + "-icon.svg"}
                        alt="website icon"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </a>
                </li>
              )
          )}
        </ul>
      )}
      <h1 className="header">Recent posts</h1>
      <Posts author={id} />
      <h1 className="header">Recent comments</h1>
      {comments.length > 0 ? (
        <Comments comments={comments} className={styles.comments} />
      ) : (
        <span className={styles.noComments}>
          Looks like the user hasn't written any comments yet.
        </span>
      )}
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
  const pres = await fetch(`${server}/data/posts.json`);
  const posts = await pres.json();

  const comments =
    posts &&
    posts
      .map((p) =>
        (p.comments || [])
          .filter((c) => c.authorId === uid)
          .map((c) => ({source: p, body: c.body, timestamp: c.timestamp}))
      )
      .flat();

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
      comments: comments || null,
    },
  };
}
