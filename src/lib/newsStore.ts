export interface NewsArticle {
  id: string;
  title: string;
  description: string;
  category: "politics" | "crime" | "sports" | "entertainment" | "local";
  imageUrl: string;
  date: string;
  isBreaking: boolean;
}

const STORAGE_KEY = "hindi-news-articles";

const defaultNews: NewsArticle[] = [
  {
    id: "1",
    title: "प्रधानमंत्री ने नई योजना की घोषणा की",
    description: "प्रधानमंत्री ने आज एक नई योजना की घोषणा की जिससे करोड़ों लोगों को फायदा होगा।",
    category: "politics",
    imageUrl: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600",
    date: new Date().toISOString().split("T")[0],
    isBreaking: true,
  },
  {
    id: "2",
    title: "क्रिकेट टीम ने जीता फाइनल मैच",
    description: "भारतीय क्रिकेट टीम ने शानदार प्रदर्शन करते हुए फाइनल मैच में जीत हासिल की।",
    category: "sports",
    imageUrl: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600",
    date: new Date().toISOString().split("T")[0],
    isBreaking: false,
  },
  {
    id: "3",
    title: "शहर में नई मेट्रो लाइन का उद्घाटन",
    description: "मुख्यमंत्री ने आज शहर की नई मेट्रो लाइन का उद्घाटन किया।",
    category: "local",
    imageUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600",
    date: new Date().toISOString().split("T")[0],
    isBreaking: false,
  },
  {
    id: "4",
    title: "बॉलीवुड की नई फिल्म ने तोड़े रिकॉर्ड",
    description: "इस हफ्ते रिलीज हुई नई बॉलीवुड फिल्म ने बॉक्स ऑफिस पर सभी रिकॉर्ड तोड़ दिए।",
    category: "entertainment",
    imageUrl: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600",
    date: new Date().toISOString().split("T")[0],
    isBreaking: false,
  },
  {
    id: "5",
    title: "पुलिस ने अंतरराज्यीय गिरोह का पर्दाफाश किया",
    description: "पुलिस ने एक बड़े अंतरराज्यीय गिरोह का पर्दाफाश करते हुए 5 आरोपियों को गिरफ्तार किया।",
    category: "crime",
    imageUrl: "https://images.unsplash.com/photo-1453873531674-2151bcd01707?w=600",
    date: new Date().toISOString().split("T")[0],
    isBreaking: true,
  },
];

export function getNews(): NewsArticle[] {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultNews));
    return defaultNews;
  }
  return JSON.parse(stored);
}

export function saveNews(articles: NewsArticle[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
}

export function addNews(article: Omit<NewsArticle, "id">) {
  const articles = getNews();
  const newArticle: NewsArticle = { ...article, id: Date.now().toString() };
  articles.unshift(newArticle);
  saveNews(articles);
  return newArticle;
}

export function updateNews(id: string, updates: Partial<NewsArticle>) {
  const articles = getNews();
  const idx = articles.findIndex((a) => a.id === id);
  if (idx !== -1) {
    articles[idx] = { ...articles[idx], ...updates };
    saveNews(articles);
  }
  return articles;
}

export function deleteNews(id: string) {
  const articles = getNews().filter((a) => a.id !== id);
  saveNews(articles);
  return articles;
}

export const categoryLabels: Record<NewsArticle["category"], string> = {
  politics: "राजनीति",
  crime: "अपराध",
  sports: "खेल",
  entertainment: "मनोरंजन",
  local: "स्थानीय समाचार",
};
