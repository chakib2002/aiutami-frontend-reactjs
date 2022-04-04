import React from "react";

export const SearchHeader = ({
  title,
  text,
}: {
  title: string;
  text: string;
}) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mx-2 p-3 text-center mt-10 lg:text-left">
        {title}
      </h1>
      <p className="mx-5 text-sm tracking-wide text-center lg:text-left ">
        {text}
      </p>
    </div>
  );
};
