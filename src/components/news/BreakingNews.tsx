import { NewsArticle } from "@/lib/newsStore";

const BreakingNews = ({ articles }: { articles: NewsArticle[] }) => {
  const breaking = articles.filter((a) => a.isBreaking);
  if (breaking.length === 0) return null;

  return (
    <div className="overflow-hidden border-b border-border bg-destructive text-destructive-foreground">
      <div className="container mx-auto flex items-center px-4 py-2">
        <span className="mr-4 flex shrink-0 items-center gap-1.5 rounded bg-card px-2 py-0.5 text-xs font-bold text-destructive">
          <span className="h-2 w-2 animate-pulse rounded-full bg-destructive" />
          ताज़ा खबर
        </span>
        <div className="relative flex-1 overflow-hidden whitespace-nowrap">
          <div className="animate-marquee inline-block">
            {breaking.map((a) => (
              <span key={a.id} className="mx-8 text-sm font-medium">
                ● {a.title}
              </span>
            ))}
            {breaking.map((a) => (
              <span key={a.id + "-dup"} className="mx-8 text-sm font-medium">
                ● {a.title}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakingNews;
