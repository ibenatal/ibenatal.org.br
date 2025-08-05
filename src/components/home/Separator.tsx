import Image from 'next/image';

export const Separator = () => {
  return (
    <div className="w-full flex flex-row items-center justify-center gap-4 sm:gap-8 px-4 sm:px-8">
      <div className="h-[2px] w-full bg-secondary/50"></div>
      <Image
        src="/images/icons/separator-symbol.svg"
        alt="Separator"
        width={80}
        height={80}
        className="opacity-50 w-10 h-10 sm:w-20 sm:h-20"
      />
      <div className="h-[2px] w-full bg-secondary/50"></div>
    </div>
  );
};
