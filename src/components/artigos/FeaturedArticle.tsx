import Image from 'next/image';

export function FeaturedArticle() {
  return (
    <div className="bg-white rounded-lg">
      <div className="relative w-full pb-[40%]">
        <Image
          src="/images/articles/blog-1.png"
          alt="Blog"
          fill
          className="object-cover rounded-t-lg"
        />
      </div>
      <div className="p-4 lg:p-10 flex flex-col gap-8">
        <h3 className="text-2xl lg:text-4xl font-bold">
          Using RichTextEditor in Your .NET MAUI Apps
        </h3>
        <p className="text-base lg:text-lg text-gray-500">
          When designing your own digital products, you need to decide if
          multifactor authentication is needed and, if so, how to execute it.
        </p>
        <div className="flex flex-row gap-4 text-xs lg:text-base">
          <span>by John Doe</span>
          <span>12/12/2021</span>
          <span>12 min read</span>
        </div>
      </div>
    </div>
  );
}
