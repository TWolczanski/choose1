import CarouselPost from "./CarouselPost";
import SideBySidePost from "./SideBySidePost";
import SliderPost from "./SliderPost";

export default function Post({title, type, images, results, choice}) {
  let post;
  switch (type) {
    case "side by side horizontal":
      post = (
        <SideBySidePost
          title={title}
          orientation="horizontal"
          images={images}
          results={results}
          choice={choice}
        />
      );
      break;
    case "side by side vertical":
      post = (
        <SideBySidePost
          title={title}
          orientation="vertical"
          images={images}
          results={results}
          choice={choice}
        />
      );
      break;
    case "slider horizontal":
      post = (
        <SliderPost
          title={title}
          orientation="horizontal"
          images={images}
          results={results}
          choice={choice}
        />
      );
      break;
    case "slider vertical":
      post = (
        <SliderPost
          title={title}
          orientation="vertical"
          images={images}
          results={results}
          choice={choice}
        />
      );
      break;
    case "carousel":
      post = (
        <CarouselPost
          title={title}
          images={images}
          results={results}
          choice={choice}
          clickable
          roundedCorners
        />
      );
      break;
  }

  return post;
}
