import {useEffect, useState} from "react";
import Button from "./Button";
import Post from "./Post";
import styles from "../styles/Posts.module.css";

export default function Posts() {
  const categories = [
    "All",
    "Branding",
    "UI/UX",
    "Illustration",
    "3D",
    "Photography",
    "Other",
  ];

  const [category, setCategory] = useState("All");
  const [posts, setPosts] = useState();

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await fetch("/data/posts.json");
      const posts = await data.json();
      setPosts(
        posts.filter((p) => p.category === category || category === "All")
      );
    };
    fetchPosts();
  }, [category]);

  return (
    <section className={styles.container}>
      <ul className={styles.categories}>
        {categories.map((c, i) => (
          <li key={i}>
            <Button
              variant={c === category ? "primary" : "light"}
              text={c}
              onClick={() => setCategory(c)}
            />
          </li>
        ))}
      </ul>
      {posts &&
        (posts.length > 0 ? (
          <ul className={styles.posts}>
            {posts.map((p) => (
              <li key={p.id}>
                <Post
                  title={p.title}
                  type={p.type}
                  images={p.images}
                  results={p.results}
                  choice={p.choice}
                />
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.info}>
            It looks like there are no posts matching this category.
          </p>
        ))}
    </section>
  );
}
