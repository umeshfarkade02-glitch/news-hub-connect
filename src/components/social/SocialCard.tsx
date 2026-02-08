import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";

const icons = { facebook: Facebook, instagram: Instagram, youtube: Youtube, twitter: Twitter };

interface SocialCardProps {
  platform: keyof typeof icons;
  label: string;
  followers: string;
  url: string;
}

const SocialCard = ({ platform, label, followers, url }: SocialCardProps) => {
  const Icon = icons[platform];
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Card className="text-center transition-transform hover:-translate-y-1 hover:shadow-lg">
        <CardContent className="flex flex-col items-center gap-2 p-6">
          <Icon size={36} className="text-primary" />
          <h3 className="text-lg font-semibold text-foreground">{label}</h3>
          <p className="text-sm text-muted-foreground">{followers} Followers</p>
        </CardContent>
      </Card>
    </a>
  );
};

export default SocialCard;
