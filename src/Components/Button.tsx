import { MouseEventHandler } from "react";

export type Props = {
  text?: string;
  onClick?: MouseEventHandler;
  className?: string;
};

export default function Button(props: Props) {
  const { text, onClick, className } = props;
  return (
    <button
      onClick={(event) => (onClick ? onClick(event) : null)}
      className={className}
    >
      {text ?? ""}
    </button>
  );
}
