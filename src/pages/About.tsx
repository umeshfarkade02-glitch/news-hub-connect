import MemberCard from "@/components/members/MemberCard";

const founders = [
  {
    name: "राजेश शर्मा",
    post: "संस्थापक / मुख्य संपादक",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300",
    facebook: "#",
    instagram: "#",
  },
  {
    name: "प्रिया वर्मा",
    post: "सह-संस्थापक / प्रबंध संपादक",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300",
    facebook: "#",
    instagram: "#",
  },
];

const About = () => (
  <div className="container mx-auto px-4 py-10">
    <h1 className="mb-2 text-center text-3xl font-bold text-foreground">हमारे बारे में</h1>
    <p className="mx-auto mb-10 max-w-2xl text-center text-muted-foreground">
      हिंदी समाचार एक विश्वसनीय और निष्पक्ष हिंदी समाचार पत्र है। हमारा उद्देश्य जनता तक सही और सटीक खबरें पहुँचाना है।
    </p>
    <div className="mx-auto grid max-w-2xl gap-6 sm:grid-cols-2">
      {founders.map((f) => (
        <MemberCard key={f.name} {...f} />
      ))}
    </div>
  </div>
);

export default About;
