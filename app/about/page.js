import styles from "styles/AboutPage.module.css";

export default function Page() {
  return (
    <>
      <section className={styles.about}>
        <h1 className="header">About</h1>
        <p>
          Every graphic designer knows how hard it can be to choose the best
          design out of the ton they&lsquo;ve prepared. If you specialize in branding,
          you probably spend a lot of time on deciding which logo would catch
          the eye of the greatest number of people and which therefore should be
          presented to the client. Similarly, UI/UX designers often rack their
          brains over things like color, fonts and spacing. No matter what
          you&lsquo;re working on, it&lsquo;s valuable to hear other people&lsquo;s opinions, even
          on small details. choose1 is a place where graphic designers help each
          other in making decisions regarding their current work. The website
          was designed to be as simple as possible: users create posts
          containing multiple designs or variations of one design, and others
          provide feedback by simply choosing the best option or sharing their
          thoughts in comments.
        </p>
      </section>
      <section className={styles.howItWorks}>
        <h1 className="header">How it works</h1>
        <ul className={styles.explanation}>
          <li>
            <div className={styles.text}>
              <h2>Help other designers</h2>
              <p>
                It is often a matter of one click - just choose the best design
                out of the ones provided in the post. You can then see how other
                users voted. If you want to give a thorough feedback, you can do
                so by writing a comment. Voting is worth 1 point, commenting
                gives you 1 extra point.
              </p>
            </div>
            <img src="/img/explanation-1.svg" />
          </li>
          <li>
            <div className={styles.text}>
              <h2>Get help from other designers</h2>
              <p>
                Points can be spent on creating new posts. To add a new post,
                upload your designs, specify a title, and provide a description
                that will give other users some context and help them understand
                what you&lsquo;re puzzling over. Make sure to use the appropriate post
                type too.
              </p>
            </div>
            <img src="/img/explanation-2.svg" />
          </li>
          <li>
            <div className={styles.text}>
              <h2>Gain exposure</h2>
              <p>
                Collecting points increases your position in the user ranking.
                If you stay engaged enough, you can become a top user and appear
                in the Users page. This can give you a lot of exposure if you
                provide links to your social media or portfolio in your profile.
              </p>
            </div>
            <img src="/img/explanation-3.svg" />
          </li>
        </ul>
      </section>
    </>
  );
}
