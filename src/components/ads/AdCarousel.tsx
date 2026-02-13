import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ads = [
  {
    id: 1,
    title: "विज्ञापन स्थान 1",
    description: "अपना विज्ञापन यहाँ दें — संपर्क करें",
    bgClass: "bg-primary",
    link: "#",
  },
  {
    id: 2,
    title: "विज्ञापन स्थान 2",
    description: "व्यापार को बढ़ाएं — हमसे जुड़ें",
    bgClass: "bg-destructive",
    link: "#",
  },
  {
    id: 3,
    title: "विज्ञापन स्थान 3",
    description: "आज ही अपना विज्ञापन बुक करें",
    bgClass: "bg-secondary",
    link: "#",
  },
];

const AdCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % ads.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + ads.length) % ads.length);
  const next = () => setCurrent((c) => (c + 1) % ads.length);

  const ad = ads[current];

  return (
    <div className="relative overflow-hidden">
      <div
        className={`${ad.bgClass} flex min-h-[250px] flex-col items-center justify-center px-4 py-14 text-center transition-all duration-500`}
      >
        <h3 className="text-2xl font-bold text-primary-foreground md:text-3xl">
          {ad.title}
        </h3>
        <p className="mt-2 text-lg text-primary-foreground/90">{ad.description}</p>
        <a href={ad.link}>
          <Button variant="secondary" className="mt-4">
            संपर्क करें
          </Button>
        </a>
      </div>

      {/* Navigation */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/70 p-2 text-foreground shadow-md hover:bg-background"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/70 p-2 text-foreground shadow-md hover:bg-background"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
        {ads.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2.5 w-2.5 rounded-full transition-all ${
              i === current ? "bg-primary-foreground scale-125" : "bg-primary-foreground/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AdCarousel;
