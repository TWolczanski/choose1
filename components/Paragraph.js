import {Fragment} from "react";

export default function Paragraph({text, ...props}) {
  return (
    <p {...props}>
      {text.split("\n").map((t, i) => (
        <Fragment key={i}>
          {t}
          <br />
        </Fragment>
      ))}
    </p>
  );
}
