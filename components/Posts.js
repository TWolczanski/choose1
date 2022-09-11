import {useEffect, useState} from "react";
import Button from "./Button";
import CarouselPost from "./CarouselPost";
import SideBySidePost from "./SideBySidePost";
import SliderPost from "./SliderPost";
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
      <ul className={styles.posts}>
        {posts &&
          posts.map((p) => {
            let post;
            switch (p.type) {
              case "side by side":
                post = (
                  <SideBySidePost
                    title={p.title}
                    orientation={p.orientation}
                    images={p.images}
                    results={p.results}
                    choice={p.choice}
                  />
                );
                break;
              case "slider":
                post = (
                  <SliderPost
                    title={p.title}
                    orientation={p.orientation}
                    images={p.images}
                    results={p.results}
                    choice={p.choice}
                  />
                );
                break;
              case "carousel":
                post = (
                  <CarouselPost
                    title={p.title}
                    images={p.images}
                    results={p.results}
                    choice={p.choice}
                    clickable
                    roundedCorners
                  />
                );
                break;
            }
            return <li key={p.id}>{post}</li>;
          })}
      </ul>
    </section>
  );
}
