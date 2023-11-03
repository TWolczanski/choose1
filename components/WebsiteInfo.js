import styles from "styles/WebsiteInfo.module.css";
import Paragraph from "components/Paragraph";

export default function WebsiteInfo() {
  const info =
    "The website has been prepopulated with data taken from dribbble.com. This is solely for presentational purposes; all rights to designs posted here belong to their respective authors. The project is non-commercial and is hosted on GitHub (TWolczanski/choose1).\n\nThe backend hasn't been implemented yet. To view the page as a logged in user, try signing in with a username of 'admin' and a password of 'pass'.";
  return (
    <div className={styles.websiteInfo}>
      <h1>Info</h1>
      <Paragraph text={info} />
    </div>
  );
}
