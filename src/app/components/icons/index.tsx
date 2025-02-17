import Image from "next/image";
import { TypedCode } from "./typed-code";

export type iconName =
  | "arrow-up"
  | "arrow-right"
  | "code"
  | "menu"
  | "close"
  | "abacus"
  | "microsoft"
  | "harvard"
  | "react"
  | "next"
  | "javascript"
  | "html"
  | "css"
  | "tailwind"
  | "bootstrap"
  | "node"
  | "angular"
  | "sql"
  | "typescript"
  | "photoshop"
  | "premiere"
  | "after-effects"
  | "new"
  | "contact";

interface IconProps {
  name: iconName;
  className?: string;
  text?: string;
  isMenuOpen?: boolean;
  size?: number;
  startTypedCounter?: boolean;
  isTyped?: boolean;
}

export default function Icon({
  name,
  className,
  text,
  isMenuOpen,
  size = 25,
  startTypedCounter,
  isTyped,
}: IconProps) {
  const backgroundColor = isMenuOpen ? "bg-zinc-500" : "bg-gray-900";

  switch (name) {
    case "arrow-up":
      return (
        <svg x="0px" y="0px" width={size} height={size} viewBox="0 0 20 20">
          <path
            fill="#ffffff"
            d="M18.008,7.667L16.606,9,11,3.627V20H9V3.627L3.392,9l-1.4-1.336L10-.012Z"
          ></path>
        </svg>
      );
    case "arrow-right":
      return (
        <svg
          className="rotate-90"
          x="0px"
          y="0px"
          width={size}
          height={size}
          viewBox="0 0 20 20"
        >
          <path
            fill="#ffffff"
            d="M18.008,7.667L16.606,9,11,3.627V20H9V3.627L3.392,9l-1.4-1.336L10-.012Z"
          ></path>
        </svg>
      );
    case "code":
      return (
        <h2
          className={`${
            className ?? ""
          } transition-colors duration-200 ease-linear  font-extrabold tracking-tighter flex items-center`}
        >
          <TypedCode
            text={text ?? ""}
            startCounter={startTypedCounter}
            isTyped={isTyped}
          />
        </h2>
      );
    case "menu":
      return (
        <>
          <i
            className={`top-0.5 absolute ${backgroundColor} block w-6 h-1 left-0 transition-all duration-200 ease-linear translate3d-0`}
          />
          <i
            className={`top-2.5 absolute ${backgroundColor} block w-6 h-1 left-0 transition-all duration-200 ease-linear translate3d-0`}
          />
          <i
            className={`bottom-0.5 absolute ${backgroundColor} block w-6 h-1 left-0 transition-all duration-200 ease-linear translate3d-0`}
          />
        </>
      );
    case "close":
      return (
        <>
          <i
            className={`top-0 left-0.5 rotate-45 origin-[0_100%] absolute block w-7 h-1 ${backgroundColor}`}
          />
          <i
            className={`bottom-0 left-0.5 -rotate-45 origin-[0_0] absolute block w-7 h-1 ${backgroundColor}`}
          />
        </>
      );
    case "abacus":
      return (
        <Image
          className={className}
          src="/abacus/icon.png"
          alt="abacus icon"
          width={190}
          height={190}
        />
      );
    case "microsoft":
      return (
        <Image
          className={className}
          src="/microsoft.png"
          alt="microsoft icon"
          width={720}
          height={720}
        />
      );
    case "harvard":
      return (
        <Image
          className={className}
          src="/harvard.png"
          alt="harvard icon"
          width={226}
          height={267}
        />
      );
    case "react":
      return (
        <svg
          className={className}
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          height={size}
          width={size}
        >
          <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"></path>
        </svg>
      );
    case "next":
      return (
        <svg
          className={className}
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          role="img"
          viewBox="0 0 24 24"
          height={size}
          width={size}
        >
          <title></title>
          <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z"></path>
        </svg>
      );
    case "javascript":
      return (
        <svg
          className={className}
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          role="img"
          viewBox="0 0 24 24"
          height={size}
          width={size}
        >
          <title></title>
          <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"></path>
        </svg>
      );
    case "html":
      return (
        <svg
          className={className}
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 384 512"
          height={size}
          width={size}
        >
          <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"></path>
        </svg>
      );
    case "css":
      return (
        <svg
          className={className}
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 384 512"
          height={size}
          width={size}
        >
          <path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"></path>
        </svg>
      );
    case "tailwind":
      return (
        <svg
          className={className}
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          role="img"
          viewBox="0 0 24 24"
          height={size}
          width={size}
        >
          <title></title>
          <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path>
        </svg>
      );
    case "bootstrap":
      return (
        <svg
          className={className}
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 576 512"
          height={size}
          width={size}
        >
          <path d="M333.5,201.4c0-22.1-15.6-34.3-43-34.3h-50.4v71.2h42.5C315.4,238.2,333.5,225,333.5,201.4z M517,188.6 c-9.5-30.9-10.9-68.8-9.8-98.1c1.1-30.5-22.7-58.5-54.7-58.5H123.7c-32.1,0-55.8,28.1-54.7,58.5c1,29.3-0.3,67.2-9.8,98.1 c-9.6,31-25.7,50.6-52.2,53.1v28.5c26.4,2.5,42.6,22.1,52.2,53.1c9.5,30.9,10.9,68.8,9.8,98.1c-1.1,30.5,22.7,58.5,54.7,58.5h328.7 c32.1,0,55.8-28.1,54.7-58.5c-1-29.3,0.3-67.2,9.8-98.1c9.6-31,25.7-50.6,52.1-53.1v-28.5C542.7,239.2,526.5,219.6,517,188.6z M300.2,375.1h-97.9V136.8h97.4c43.3,0,71.7,23.4,71.7,59.4c0,25.3-19.1,47.9-43.5,51.8v1.3c33.2,3.6,55.5,26.6,55.5,58.3 C383.4,349.7,352.1,375.1,300.2,375.1z M290.2,266.4h-50.1v78.4h52.3c34.2,0,52.3-13.7,52.3-39.5 C344.7,279.6,326.1,266.4,290.2,266.4z"></path>
        </svg>
      );
    case "node":
      return (
        <svg
          className={className}
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 448 512"
          height={size}
          width={size}
        >
          <path d="M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z"></path>
        </svg>
      );
    case "angular":
      return (
        <svg
          className={className}
          fill="#000000"
          width={size}
          height={size}
          viewBox="0 0 512 512"
        >
          <title>ionicons-v5_logos</title>
          <polygon points="213.57 256 298.42 256 255.99 166.64 213.57 256" />
          <path d="M256,32,32,112,78.12,384,256,480l177.75-96L480,112Zm88,320-26.59-56H194.58L168,352H128L256,72,384,352Z" />
        </svg>
      );
    case "sql":
      return (
        <svg
          className={className}
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 448 512"
          height={size}
          width={size}
        >
          <path d="M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z"></path>
        </svg>
      );
    case "typescript":
      return (
        <svg
          className={className}
          x="0px"
          y="0px"
          viewBox="0 0 24 24"
          width={size}
          height={size}
        >
          <g>
            <path d="M21.656,0H2.344C1.05,0,0,1.05,0,2.344v19.312C0,22.95,1.05,24,2.344,24h19.312C22.95,24,24,22.95,24,21.656V2.344   C24,1.05,22.95,0,21.656,0z M13.922,13.316h-3.01v8.574H8.527v-8.574H5.531v-1.926h8.391V13.316z M21.698,20.37   c-0.467,0.835-1.325,1.305-2.238,1.5c-1.06,0.226-2.187,0.214-3.25,0.015c-0.521-0.098-0.972-0.244-1.353-0.44v-2.347   c0.426,0.357,0.888,0.625,1.387,0.803c0.499,0.179,1.003,0.268,1.511,0.268c0.45,0,0.951-0.056,1.339-0.304   c0.266-0.17,0.444-0.438,0.444-0.759c0-0.437-0.316-0.767-0.657-0.997c-0.499-0.336-1.072-0.555-1.625-0.785   c-0.822-0.342-1.434-0.76-1.838-1.254c-0.702-0.859-0.817-2.231-0.275-3.201c0.463-0.828,1.316-1.316,2.216-1.533   c0.981-0.236,2.046-0.236,3.041-0.081c0.423,0.066,0.813,0.167,1.17,0.304v2.193c-0.176-0.122-0.368-0.23-0.576-0.322   c-0.41-0.183-0.853-0.307-1.298-0.367c-0.445-0.06-0.914-0.07-1.353,0.033c-0.346,0.08-0.71,0.241-0.91,0.55   c-0.083,0.13-0.125,0.275-0.125,0.436c0,0.176,0.046,0.334,0.139,0.473c0.235,0.353,0.649,0.58,1.02,0.763   c0.652,0.32,1.336,0.56,1.962,0.931c0.608,0.359,1.148,0.859,1.412,1.525c0.127,0.32,0.191,0.693,0.191,1.118   C22.031,19.479,21.92,19.972,21.698,20.37z" />
          </g>
        </svg>
      );
    case "photoshop":
      return (
        <svg
          className={className}
          height={size}
          width={size}
          version="1.1"
          viewBox="0 0 17.469 17.469"
        >
          <g>
            <g>
              <path
                d="M5.925,4.982c-0.442,0-0.742,0.043-0.898,0.087v2.841C5.213,7.952,5.44,7.966,5.754,7.966
                  c1.157,0,1.871-0.585,1.871-1.571C7.624,5.511,7.01,4.982,5.925,4.982z"
              />
              <path
                d="M16.4,0.002H1.07C0.479,0.002,0,0.48,0,1.069v15.329c0,0.59,0.479,1.069,1.07,1.069H16.4
                  c0.59,0,1.069-0.479,1.069-1.069V1.07C17.469,0.48,16.99,0.002,16.4,0.002z M8.894,8.624c-0.741,0.7-1.842,1.014-3.125,1.014
                  c-0.287,0-0.543-0.014-0.743-0.043v3.442H2.869V3.541C3.54,3.428,4.482,3.342,5.811,3.342c1.341,0,2.299,0.256,2.94,0.771
                  c0.617,0.486,1.03,1.286,1.03,2.228S9.466,8.08,8.894,8.624z M12.145,13.179c-0.916,0-1.729-0.198-2.258-0.485l0.385-1.556
                  c0.4,0.241,1.229,0.527,1.873,0.527c0.655,0,0.927-0.228,0.927-0.586c0-0.356-0.214-0.527-1.027-0.799
                  c-1.442-0.485-2-1.271-1.986-2.099c0-1.298,1.114-2.286,2.842-2.286c0.814,0,1.542,0.187,1.97,0.4l-0.385,1.5
                  c-0.314-0.172-0.913-0.399-1.514-0.399c-0.527,0-0.826,0.214-0.826,0.571c0,0.328,0.269,0.499,1.126,0.8
                  c1.328,0.456,1.886,1.128,1.899,2.154C15.171,12.222,14.141,13.179,12.145,13.179z"
              />
            </g>
          </g>
        </svg>
      );
    case "premiere":
      return (
        <svg
          className={className}
          fill="#000000"
          version="1.1"
          width={size}
          height={size}
          viewBox="0 0 512 512"
          enableBackground="new 0 0 512 512"
        >
          <g>
            <path
              display="inline"
              d="M227.955,208.761c0,28.596-20.273,44.887-53.575,44.887c-9.053,0-16.289-0.364-21.72-1.811v-82.532 c4.708-1.087,13.395-2.173,25.7-2.173C209.133,167.132,227.955,181.612,227.955,208.761z M511.5,85.667v340.667 c0,46.842-38.325,85.167-85.167,85.167H85.667C38.825,511.5,0.5,473.175,0.5,426.333V85.667C0.5,38.825,38.825,0.5,85.667,0.5 h340.667C473.175,0.5,511.5,38.825,511.5,85.667z M272.477,206.95c0-22.803-9.407-41.989-23.887-53.934 c-15.569-13.033-39.456-19.911-72.038-19.911c-30.045,0-52.127,2.173-68.054,5.069v240.718h44.164v-91.944 c5.793,1.089,13.395,1.451,21.72,1.451c31.493,0,59.363-8.33,77.104-26.062C265.24,249.303,272.477,230.117,272.477,206.95z M403.503,199.712c-3.622-0.726-6.154-1.087-10.5-1.087c-18.826,0-39.456,12.671-48.144,37.647h-1.447l-1.447-33.666h-38.732 c1.081,15.927,1.447,32.942,1.447,56.833v119.453h44.521v-91.222c0-5.064,0.724-9.772,1.447-13.752 c3.983-19.909,18.464-33.665,39.821-33.665c5.432,0,9.411,0.724,13.033,1.447V199.712z"
            ></path>
          </g>
        </svg>
      );
    case "after-effects":
      return (
        <svg
          className={className}
          fill="#000000"
          version="1.1"
          width={size}
          height={size}
          viewBox="0 0 512 512"
          enableBackground="new 0 0 512 512"
        >
          <g>
            <path
              display="inline"
              d="M177.275,213.286l19.188,60.088h-62.624l18.822-60.088c4.346-14.48,7.963-31.493,11.585-45.611h0.724 C168.588,181.793,172.572,198.444,177.275,213.286z M373.819,226.316c-27.513,0-39.095,24.978-40.907,43.074h77.465 C410.743,253.104,403.503,226.316,373.819,226.316z M511.5,85.667v340.667c0,46.842-38.325,85.167-85.167,85.167H85.667 C38.825,511.5,0.5,473.175,0.5,426.333V85.667C0.5,38.825,38.825,0.5,85.667,0.5h340.667C473.175,0.5,511.5,38.825,511.5,85.667z M273.928,376.182l-79.274-243.981h-56.834L59.63,376.182h45.973l20.997-69.14h77.465l22.082,69.14H273.928z M452.37,281.699 c0-38.73-18.826-85.79-76.019-85.79c-56.469,0-86.151,45.973-86.151,94.84c0,53.936,33.663,89.051,90.859,89.051 c25.338,0,46.334-4.708,61.538-10.862l-6.517-30.765c-13.395,5.064-28.236,7.959-48.871,7.959 c-28.232,0-53.208-13.752-54.298-45.61h118.011C451.646,296.541,452.37,290.025,452.37,281.699z"
            ></path>
          </g>
        </svg>
      );
    case "new":
      return (
        <span
          className={`${
            className ?? ""
          } w-14 h-14 pointer-events-none text-white flex items-center justify-center text-2xs font-extrabold tracking-widest uppercase border-2 border-gray-950 rounded-full transition-all duration-200 ease-linear group-hover:border-white bg-gray-900`}
        >
          New
        </span>
      );
    case "contact":
      return (
        <svg
          className={className}
          x="0px"
          y="0px"
          width="20px"
          height="20px"
          viewBox="0 0 20 20"
          enableBackground="new 0 0 20 20"
        >
          <path
            fill="#ffffff"
            d="M16,17H4a2,2,0,0,1-2-2V5A2,2,0,0,1,4,3H16a2,2,0,0,1,2,2V15A2,2,0,0,1,16,17Zm0-2V7.619l-6,4.242L4,7.619V15H16ZM4,5V5.705l6,3.429,6-3.429V5H4Z"
          ></path>
        </svg>
      );
    default:
      return <span />;
  }
}
