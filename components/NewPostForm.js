import {useState, useRef} from "react";
import Button from "./Button";
import TextArea from "./TextArea";
import Select from "./Select";
import PostTypeIcon from "./PostTypeIcon";
import Post from "./Post";
import Points from "./Points";
import styles from "../styles/NewPostForm.module.css";

export default function NewPostForm() {
  const categories = [
    "Branding",
    "UI/UX",
    "Illustration",
    "3D",
    "Photography",
    "Other",
  ];
  const [category, setCategory] = useState();

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
  const [type, setType] = useState("carousel");

  const maxImageCount = {
    carousel: 6,
    "slider horizontal": 2,
    "side by side horizontal": 2,
    "slider vertical": 2,
    "side by side vertical": 2,
  };
  const defaultImageRef = useRef(
    new File([""], "/img/posts/default-image.png")
  );
  const defaultImage = defaultImageRef.current;
  const [images, setImages] = useState([defaultImage, defaultImage]);
  const previews = images.map((img) =>
    img === defaultImage ? img.name : URL.createObjectURL(img)
  );
  let clickedPreviewIndex;

  const cost = 3 * images.filter((img) => img !== defaultImage).length;
  const [error, setError] = useState();
  const fileInput = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    setError("Adding new posts is currently not supported");
  }

  function handleNewImage() {
    setImages((images) => {
      const newImages = images.map((img, i) =>
        i === clickedPreviewIndex ? fileInput.current.files[0] : img
      );
      const imageCount = newImages.filter((img) => img !== defaultImage).length;
      if (imageCount < maxImageCount[type] && imageCount === images.length)
        newImages.push(defaultImage);
      return newImages;
    });
  }

  function handlePreviewClick(i) {
    clickedPreviewIndex = i - 1;
    if (images[clickedPreviewIndex] === defaultImage) fileInput.current.click();
    else
      setImages((images) => {
        if (images.length <= 2)
          return images.map((img, i) =>
            i === clickedPreviewIndex ? defaultImage : img
          );
        else return images.filter((img, i) => i !== clickedPreviewIndex);
      });
  }

  function handleTypeChange(t) {
    setType(t);
    setImages((images) => {
      const newImages = images.filter((img, i) => i < maxImageCount[t]);
      const imageCount = newImages.filter((img) => img !== defaultImage).length;
      if (imageCount < maxImageCount[t] && imageCount === images.length)
        newImages.push(defaultImage);
      return newImages;
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      onChange={() => setError()}
      className={styles.form}
    >
      <h1>New post</h1>

      <div className={styles.container}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" />
      </div>

      <div className={styles.container}>
        <label htmlFor="description">Description</label>
        <TextArea
          id="description"
          name="description"
          rows={3}
          spellCheck={false}
          className={styles.textarea}
        />
      </div>

      <div className={styles.container}>
        <Select
          options={categories}
          initial="Category"
          onChange={setCategory}
          className={styles.category}
        />
      </div>

      <div className={styles.container}>
        <label htmlFor="type">Type</label>
        <ul className={styles.types}>
          {types.map((t, i) => (
            <li
              key={i}
              className={`${styles.type} ${
                t === type ? styles.selectedType : ""
              }`}
              onClick={() => handleTypeChange(t)}
            >
              <PostTypeIcon type={t} className={styles.typeIcon} />
            </li>
          ))}
        </ul>
        <p className={styles.typeInfo}>{typeInfo[type]}</p>
      </div>

      <div className={styles.container}>
        <Post type={type} images={previews} onImageClick={handlePreviewClick} />
        <input
          type="file"
          name="images"
          accept="image/png, image/jpeg, image/webp"
          onChange={handleNewImage}
          ref={fileInput}
        />
      </div>

      <div className={styles.container}>
        <label htmlFor="cost">Cost</label>
        <Points amount={cost} />
      </div>

      {error ? (
        <span className={styles.error}>{error}</span>
      ) : (
        <Button variant="secondary" text="Submit" />
      )}
    </form>
  );
}
