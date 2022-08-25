import styles from "../styles/ResultsBar.module.css";

export default function ResultsBar({
  results,
  onClicks,
  highlighted,
  showPercentage,
  className,
}) {
  let fragments = null;
  if (!results && highlighted && onClicks) {
    fragments = onClicks.map((f, i) => (
      <li
        className={`
          ${i + 1 === highlighted ? styles.secondary : styles.primary}
          ${onClicks[i] ? styles.clickable : ""}
        `}
        onClick={f}
      ></li>
    ));
  } else if (results && highlighted) {
    fragments = results.map((r, i) => (
      <li
        className={`
          ${
            i + 1 === highlighted
              ? styles.secondary + " " + styles.highlighted
              : styles.primary
          }
          ${onClicks[i] ? styles.clickable : ""}
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
        ${fragments === null ? styles.light : ""}
        ${className}
      `}
    >
      {fragments}
    </ul>
  );
}
