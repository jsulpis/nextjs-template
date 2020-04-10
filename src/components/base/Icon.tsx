import React from "react";

interface IconProps {
  icon: {
    name: string;
    file: string;
  };
}

const Icon = (props: IconProps & React.HTMLAttributes<HTMLDivElement>) => {
  const { name, file } = props.icon;
  return (
    <div className="flex flex-col items-center">
      <div
        className={
          "rounded-full bg-white shadow-md h-12 w-12 sm:h-16 sm:w-16 flex items-center justify-center " +
          props.className
        }
      >
        <img
          src={"/static/icons/" + file}
          alt={name}
          className="h-6 w-6 sm:h-8 sm:w-8"
          title={name + "logo"}
        />
      </div>
      <p className="text-xs opacity-75">{name}</p>
    </div>
  );
};

export default Icon;
