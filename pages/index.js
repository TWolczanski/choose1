import Hero from "../components/Hero";
import {server} from "../config";

export default function home({heroPostData}) {
  return (
    <Hero postData={heroPostData} />
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${server}/data/posts.json`);
  const posts = await res.json();
  const heroPostData = posts[Math.floor(Math.random() * posts.length)]; 
  return {
    props: {
      heroPostData
    }
  };
}