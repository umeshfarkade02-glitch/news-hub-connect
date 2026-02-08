import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { NewsArticle, categoryLabels } from "@/lib/newsStore";

const NewsCard = ({ article }: { article: NewsArticle }) => (
  <Card className="overflow-hidden transition-shadow hover:shadow-lg">
    <img
      src={article.imageUrl}
      alt={article.title}
      className="h-48 w-full object-cover"
      loading="lazy"
    />
    <CardContent className="p-4">
      <div className="mb-2 flex items-center justify-between">
        <Badge variant="secondary" className="text-xs">
          {categoryLabels[article.category]}
        </Badge>
        <span className="text-xs text-muted-foreground">{article.date}</span>
      </div>
      <h3 className="mb-1 line-clamp-2 text-lg font-semibold text-foreground">
        {article.title}
      </h3>
      <p className="line-clamp-2 text-sm text-muted-foreground">
        {article.description}
      </p>
    </CardContent>
  </Card>
);

export default NewsCard;
