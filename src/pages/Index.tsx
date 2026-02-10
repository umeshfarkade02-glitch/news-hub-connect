import { useState } from "react";
import { getNews, categoryLabels, type NewsArticle } from "@/lib/newsStore";
import BreakingNews from "@/components/news/BreakingNews";
import NewsCard from "@/components/news/NewsCard";
import SocialCard from "@/components/social/SocialCard";
import MemberCard from "@/components/members/MemberCard";
import { Button } from "@/components/ui/button";

const categories = Object.keys(categoryLabels) as NewsArticle["category"][];

const founders = [
  {
    name: "राजेश शर्मा",
    post: "संपादक",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300",
    facebook: "#",
    instagram: "#",
  },
  {
    name: "अनीता वर्मा",
    post: "संस्थापक",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300",
    facebook: "#",
    instagram: "#",
  },
];

const Index = () => {
  const articles = getNews();
  const [activeCategory, setActiveCategory] = useState<NewsArticle["category"] | "all">("all");

  const filtered = activeCategory === "all" ? articles : articles.filter((a) => a.category === activeCategory);

  return (
    <>
      <BreakingNews articles={articles} />

      {/* Hero */}
      <section className="bg-primary px-4 py-16 text-center text-primary-foreground">
        <h1 className="text-4xl font-bold md:text-5xl">हिंदी समाचार</h1>
        <p className="mt-2 text-lg opacity-90">विश्वसनीय, निष्पक्ष, सबसे तेज़</p>
      </section>

      {/* Latest News */}
      <section className="container mx-auto px-4 py-10">
        <h2 className="mb-6 text-2xl font-bold text-foreground">ताज़ा ख़बरें</h2>

        {/* Category Filter */}
        <div className="mb-6 flex flex-wrap gap-2">
          <Button
            variant={activeCategory === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveCategory("all")}
          >
            सभी
          </Button>
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={activeCategory === cat ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(cat)}
            >
              {categoryLabels[cat]}
            </Button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="text-center text-muted-foreground">कोई समाचार उपलब्ध नहीं है।</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((a) => (
              <NewsCard key={a.id} article={a} />
            ))}
          </div>
        )}
      </section>

      {/* Ad Banner */}
      <div className="bg-accent py-4 text-center">
        <p className="text-sm font-medium text-accent-foreground">📢 विज्ञापन स्थान — संपर्क करें: ads@hindisamachar.com</p>
      </div>

      {/* Social Section */}
      <section className="container mx-auto px-4 py-10">
        <h2 className="mb-6 text-center text-2xl font-bold text-foreground">सोशल मीडिया</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <SocialCard platform="facebook" label="Facebook" followers="50K" url="#" />
          <SocialCard platform="instagram" label="Instagram" followers="30K" url="#" />
          <SocialCard platform="youtube" label="YouTube" followers="25K" url="#" />
          <SocialCard platform="twitter" label="Twitter" followers="15K" url="#" />
        </div>
      </section>
    </>
  );
};

export default Index;
