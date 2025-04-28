import { HTMLAttributes } from "react";

const Tag = (props: { title: string } & HTMLAttributes<HTMLDivElement>) => {
  const { title, ...rest } = props;
  return (
    <div
      className="inline-flex text-lime-400 text-center items-center gap-2 border border-lime-400 uppercase rounded-full py-1 px-3"
      {...rest}
    >
      <span className="text-sm">&#10038;</span>
      <span>{title}</span>
    </div>
  );
};

export default Tag;
