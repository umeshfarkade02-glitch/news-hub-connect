import { Target, Eye, Flag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import MemberCard from "@/components/members/MemberCard";

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

const sections = [
  {
    icon: Target,
    title: "हमारा उद्देश्य (Objective)",
    description:
      "जनता तक सही, सटीक और निष्पक्ष समाचार पहुँचाना। हम हर खबर को तथ्यों और प्रमाणों के आधार पर प्रस्तुत करते हैं ताकि पाठकों को विश्वसनीय जानकारी मिल सके।",
  },
  {
    icon: Eye,
    title: "हमारा लक्ष्य (Goal)",
    description:
      "हिंदी पत्रकारिता को नई ऊँचाइयों पर ले जाना और डिजिटल मीडिया में हिंदी समाचार का सबसे भरोसेमंद स्रोत बनना। हम चाहते हैं कि हर हिंदी भाषी व्यक्ति तक गुणवत्तापूर्ण खबरें पहुँचें।",
  },
  {
    icon: Flag,
    title: "हमारा ध्येय (Aim)",
    description:
      "समाज में जागरूकता फैलाना, सच्चाई को सामने लाना और लोकतंत्र की मजबूती में योगदान देना। हम पत्रकारिता के उच्चतम मानकों का पालन करते हुए जन सेवा के लिए प्रतिबद्ध हैं।",
  },
];

const About = () => (
  <div className="container mx-auto px-4 py-10">
    <h1 className="mb-2 text-center text-3xl font-bold text-foreground">हमारे बारे में</h1>
    <p className="mx-auto mb-10 max-w-2xl text-center text-muted-foreground">
      हिंदी समाचार एक विश्वसनीय और निष्पक्ष हिंदी समाचार पत्र है। हमारा उद्देश्य जनता तक सही और सटीक खबरें पहुँचाना है।
    </p>

    {/* Objective, Goal, Aim */}
    <div className="mx-auto mb-12 grid max-w-5xl gap-6 md:grid-cols-3">
      {sections.map((s) => (
        <Card key={s.title} className="text-center">
          <CardContent className="flex flex-col items-center gap-3 p-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
              <s.icon className="h-7 w-7 text-primary" />
            </div>
            <h2 className="text-lg font-bold text-foreground">{s.title}</h2>
            <p className="text-sm text-muted-foreground">{s.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>

    {/* Founders */}
    <h2 className="mb-6 text-center text-2xl font-bold text-foreground">हमारी टीम</h2>
    <div className="mx-auto grid max-w-2xl gap-6 sm:grid-cols-2">
      {founders.map((f) => (
        <MemberCard key={f.name} {...f} />
      ))}
    </div>
  </div>
);

export default About;
