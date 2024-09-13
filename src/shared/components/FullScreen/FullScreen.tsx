import { css } from "@emotion/css";
import { clsx } from "clsx";
import { CSSProperties, FC, ReactNode } from "react";

export type FullScreenProps = {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
};

export const FullScreen: FC<FullScreenProps> = ({
  className,
  style,
  children,
}) => {
  const dynamicClassName = css({
    width: '100%',
    height: '100%',
    position: 'fixed',
    left: 0,
    top: 0,
    zIndex: 1,
  });

  return (
    <div
      className={clsx('FullScreen', dynamicClassName, className)}
      style={style}
    >
      { children }
    </div>
  );
};
