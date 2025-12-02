import React, { ReactNode, HTMLAttributes } from "react";

type GridProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

function Grid({ children, className = "", ...props }: GridProps) {
  return (
    <div
      className={`px-20 max-w-[1510px] w-full mx-auto ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default Grid;
