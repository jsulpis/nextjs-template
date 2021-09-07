import Image from "next/image";

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
        <div className="relative w-6 h-6 sm:h-8 sm:w-8">
          <Image
            src={"/static/icons/" + file}
            alt={name}
            title={name + "logo"}
            layout="fill"
          />
        </div>
      </div>
      <p className="text-xs opacity-75">{name}</p>
    </div>
  );
};

export default Icon;
