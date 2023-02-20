export default function PostTypeIcon({type, ...props}) {
  switch (type) {
    case "side by side horizontal":
      return (
        <svg
          width={40}
          height={31}
          viewBox="0 0 40 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <rect width={40} height={13.878} rx={5} fill="currentColor" />
          <rect
            y={16.326}
            width={40}
            height={13.878}
            rx={5}
            fill="currentColor"
          />
        </svg>
      );
    case "side by side vertical":
      return (
        <svg
          width={40}
          height={31}
          viewBox="0 0 40 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <rect
            x={22}
            y={0.898}
            width={18}
            height={30.204}
            rx={5}
            fill="currentColor"
          />
          <rect
            y={0.898}
            width={19}
            height={30.204}
            rx={5}
            fill="currentColor"
          />
        </svg>
      );
    case "slider horizontal":
      return (
        <svg
          width={40}
          height={31}
          viewBox="0 0 40 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5 0a5 5 0 0 0-5 5v9h40V5a5 5 0 0 0-5-5H5Zm35 17H0v8.204a5 5 0 0 0 5 5h30a5 5 0 0 0 5-5V17Z"
            fill="currentColor"
          />
        </svg>
      );
    case "slider vertical":
      return (
        <svg
          width={40}
          height={31}
          viewBox="0 0 40 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19 0H5a5 5 0 0 0-5 5v20.204a5 5 0 0 0 5 5h14V0Zm3 30.204h13a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5H22v30.204Z"
            fill="currentColor"
          />
        </svg>
      );
    case "carousel":
      return (
        <svg
          width={40}
          height={31}
          viewBox="0 0 40 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <rect width={40} height={30.204} rx={5} fill="currentColor" />
        </svg>
      );
  }
}
