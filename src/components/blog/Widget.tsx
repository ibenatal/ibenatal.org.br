export function Widget() {
  return (
    <div className="bg-white rounded-lg p-4">
      <MostPopularWidget />
    </div>
  );
}

export function MostPopularWidget() {
  return (
    <div className="bg-white rounded-lg">
      <h3>Most Popular</h3>
      <div className="flex flex-col gap-4 divide-y divide-gray-200 py-4">
        <ArticleWidget />
        <ArticleWidget />
        <ArticleWidget />
        <ArticleWidget />
      </div>
    </div>
  );
}

function ArticleWidget() {
  return (
    <div className="pb-4 last-of-type:pb-0">
      <h3 className="text-xl font-medium">Article</h3>
      <div className="text-sm text-gray-500">01/01/2021</div>
    </div>
  );
}
