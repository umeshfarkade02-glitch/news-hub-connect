import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getNews, categoryLabels, type NewsArticle } from "@/lib/newsStore";
import BreakingNews from "@/components/news/BreakingNews";
import NewsCard from "@/components/news/NewsCard";
import SocialCard from "@/components/social/SocialCard";
import MemberCard from "@/components/members/MemberCard";
import AdCarousel from "@/components/ads/AdCarousel";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const heroSlides = [
  {
    id: 1,
    title: "हिंदी समाचार",
    subtitle: "विश्वसनीय, निष्पक्ष, सबसे तेज़",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168d6c?w=1600&q=80",
    buttonText: "और पढ़ें",
    link: "/about",
  },
  {
    id: 2,
    title: "ताज़ा खबरें पढ़ें",
    subtitle: "देश-विदेश की हर खबर सबसे पहले",
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1600&q=80",
    buttonText: "खबरें देखें",
    link: "#news",
  },
  {
    id: 3,
    title: "विज्ञापन स्थान उपलब्ध",
    subtitle: "अपने व्यापार को बढ़ाएं — हमसे जुड़ें",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&q=80",
    buttonText: "संपर्क करें",
    link: "/contact",
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[current];

  return (
    <section className="relative h-[350px] overflow-hidden md:h-[450px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${slide.image})` }}
      >
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      {/* Content */}
      <div className="relative flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl font-bold text-primary-foreground md:text-6xl drop-shadow-lg">
          {slide.title}
        </h1>
        <p className="mt-3 text-lg text-primary-foreground/90 md:text-xl drop-shadow">
          {slide.subtitle}
        </p>
        <Link to={slide.link}>
          <Button size="lg" className="mt-6">
            {slide.buttonText}
          </Button>
        </Link>
      </div>

      {/* Nav Arrows */}
      <button
        onClick={() => setCurrent((c) => (c - 1 + heroSlides.length) % heroSlides.length)}
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-background/60 p-2 text-foreground shadow hover:bg-background/80"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() => setCurrent((c) => (c + 1) % heroSlides.length)}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-background/60 p-2 text-foreground shadow hover:bg-background/80"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-3 w-3 rounded-full transition-all ${
              i === current ? "bg-primary-foreground scale-110" : "bg-primary-foreground/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

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

      {/* Hero - Image Ad Carousel */}
      <HeroCarousel />

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

      {/* Ad Carousel */}
      <AdCarousel />

      {/* Founders Section */}
      <section className="container mx-auto px-4 py-10">
        <h2 className="mb-6 text-center text-2xl font-bold text-foreground">हमारे बारे में</h2>
        <div className="mx-auto grid max-w-2xl gap-6 sm:grid-cols-2">
          {founders.map((f) => (
            <MemberCard key={f.name} {...f} />
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link to="/about">
            <Button variant="default" size="lg">और जानें →</Button>
          </Link>
        </div>
      </section>

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
