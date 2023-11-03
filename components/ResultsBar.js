import styles from "styles/ResultsBar.module.css";

export default function ResultsBar({
  results,
  onClicks,
  highlighted,
  showPercentage,
  className,
}) {
  let fragments = <li className={styles.empty}></li>;
  if (!results && highlighted && onClicks) {
    fragments = onClicks.map((f, i) => (
      <li
        key={i}
        className={`
          ${i + 1 === highlighted ? styles.secondary : styles.primary}
          ${styles.clickable}
        `}
        onClick={f}
      ></li>
    ));
  } else if (results && highlighted) {
    fragments = results.map((r, i) => (
      <li
        key={i}
        className={`
          ${i + 1 === highlighted ? styles.secondary : styles.primary}
          ${onClicks && onClicks[i] ? styles.clickable : ""}
        `}
        style={{flex: r}}
        onClick={onClicks && onClicks[i]}
      >
        {showPercentage && i + 1 === highlighted && (
          <span className={styles.percentage}>
            {Math.round((r / results.reduce((sum, r) => sum + r, 0)) * 100)}%
          </span>
        )}
      </li>
    ));
  }
  return (
    <ul
      className={`
        ${styles.resultsBar}
        ${className ? className : ""}
      `}
    >
      {fragments}
    </ul>
  );
}
