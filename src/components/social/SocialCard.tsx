import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";

const platformConfig = {
  facebook: { icon: Facebook, color: "hover:bg-blue-600 hover:text-white hover:border-blue-600" },
  instagram: { icon: Instagram, color: "hover:bg-pink-600 hover:text-white hover:border-pink-600" },
  youtube: { icon: Youtube, color: "hover:bg-red-600 hover:text-white hover:border-red-600" },
  twitter: { icon: Twitter, color: "hover:bg-sky-500 hover:text-white hover:border-sky-500" },
};

interface SocialCardProps {
  platform: keyof typeof platformConfig;
  label: string;
  followers: string;
  url: string;
}

const SocialCard = ({ platform, label, followers, url }: SocialCardProps) => {
  const { icon: Icon, color } = platformConfig[platform];
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Card className="text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <CardContent className="flex flex-col items-center gap-3 p-6">
          <div
            className={`flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary text-primary transition-all duration-300 ${color}`}
          >
            <Icon size={28} />
          </div>
          <h3 className="text-lg font-semibold text-foreground">{label}</h3>
          <p className="text-sm text-muted-foreground">{followers} Followers</p>
        </CardContent>
      </Card>
    </a>
  );
};

export default SocialCard;
