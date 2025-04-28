import React, { HTMLAttributes } from "react";

const KeyboardKey = (props: HTMLAttributes<HTMLDivElement>) => {
  const { className, children, ...rest } = props;
  return (
    <div className={`size-14 bg-neutral-300 inline-flex items-center justify-center rounded-2xl text-xl text-neutral-950 font-medium ${className}`} {...rest}>
        {children}
    </div>
  );
};

export default KeyboardKey;
