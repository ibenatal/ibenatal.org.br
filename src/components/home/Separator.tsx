import Image from 'next/image';

export const Separator = () => {
  return (
    <div className="flex w-full flex-row items-center justify-center gap-4 px-4 sm:gap-8 sm:px-8">
      <div className="h-[2px] w-full bg-secondary/50"></div>
      <Image
        src="/images/icons/separator-symbol.svg"
        alt="Separator"
        width={80}
        height={80}
        className="h-10 w-10 opacity-50 sm:h-20 sm:w-20"
      />
      <div className="h-[2px] w-full bg-secondary/50"></div>
    </div>
  );
};
