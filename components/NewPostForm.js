import {useState, useRef} from "react";
import Button from "./Button";
import TextArea from "./TextArea";
import Select from "./Select";
import PostTypeIcon from "./PostTypeIcon";
import Post from "./Post";
import styles from "../styles/NewPostForm.module.css";

export default function NewPostForm() {
  const [error, setError] = useState();
  const [category, setCategory] = useState();
  const [type, setType] = useState("carousel");
  const [images, setImages] = useState();
  const [previews, setPreviews] = useState([defaultImage, defaultImage]);
  const fileInput = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.title.value);
    console.log(event.target.description.value);
    console.log(event.target.category.value);
    console.log(event.target.type.value);
  }

  function handleImagesChanged() {
    const newImages = [];
    for (const file of fileInput.current.files) {
      newImages.push(URL.createObjectURL(file));
    }
    newImages.push(defaultImage);
    setImages(newImages);
  }

  return (
    <form
      onSubmit={handleSubmit}
      onChange={() => setError()}
      className={styles.form}
    >
      <h1>New post</h1>

      <div className={styles.inputContainer}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" />
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="description">Description</label>
        <TextArea
          id="description"
          name="description"
          rows={3}
          spellCheck={false}
          className={styles.textarea}
        />
      </div>

      <div className={styles.inputContainer}>
        <Select
          options={categories}
          initial="Category"
          onChange={setCategory}
          className={styles.category}
        />
        <select name="category" value={category} readOnly>
          {categories.map((c, i) => (
            <option key={i} value={c}></option>
          ))}
        </select>
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="type">Type</label>
        <ul className={styles.types}>
          {types.map((t, i) => (
            <li
              key={i}
              className={`${styles.type} ${
                t === type ? styles.selectedType : ""
              }`}
              onClick={() => setType(t)}
            >
              <PostTypeIcon type={t} className={styles.typeIcon} />
            </li>
          ))}
        </ul>
        <p className={styles.typeInfo}>{typeInfo[type]}</p>
        <div className={styles.typesRadio}>
          {types.map((t, i) => (
            <input
              key={i}
              type="radio"
              name="type"
              value={t}
              checked={t === type}
              readOnly
            />
          ))}
        </div>
      </div>

      <div className={styles.inputContainer}>
        <Post type={type} images={previews} />
        <input
          type="file"
          name="images"
          accept="image/png, image/jpeg, image/webp"
          onChange={handleImagesChanged}
          ref={fileInput}
        />
      </div>

      {error ? (
        <span className={styles.error}>{error}</span>
      ) : (
        <Button variant="secondary" text="Submit" />
      )}
    </form>
  );
}

const categories = [
  "Branding",
  "UI/UX",
  "Illustration",
  "3D",
  "Photography",
  "Other",
];
const types = [
  "carousel",
  "slider horizontal",
  "side by side horizontal",
  "slider vertical",
  "side by side vertical",
];
const typeInfo = {
  carousel: "png, jpg, webp, 4:3 (1600 x 1200 or higher recommended)",
  "slider horizontal":
    "png, jpg, webp, 4:3 (1600 x 1200 or higher recommended)",
  "side by side horizontal":
    "png, jpg, webp, 8:3 (1600 x 600 or higher recommended)",
  "slider vertical":
    "png, jpg, webp, 4:3 (1600 x 1200 or higher recommended)",
  "side by side vertical":
    "png, jpg, webp, 2:3 (800 x 1200 or higher recommended)",
};
const defaultImage = "/img/posts/default-image.png";