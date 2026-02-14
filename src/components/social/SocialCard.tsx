import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";

const platformConfig = {
  facebook: {
    icon: Facebook,
    gradient: "from-blue-500 to-blue-700",
    shadow: "hover:shadow-blue-500/30",
    ring: "group-hover:ring-blue-500/40",
    iconBg: "group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600",
  },
  instagram: {
    icon: Instagram,
    gradient: "from-pink-500 via-purple-500 to-orange-400",
    shadow: "hover:shadow-pink-500/30",
    ring: "group-hover:ring-pink-500/40",
    iconBg: "group-hover:bg-gradient-to-br group-hover:from-pink-500 group-hover:via-purple-500 group-hover:to-orange-400 group-hover:text-white group-hover:border-pink-500",
  },
  youtube: {
    icon: Youtube,
    gradient: "from-red-500 to-red-700",
    shadow: "hover:shadow-red-500/30",
    ring: "group-hover:ring-red-500/40",
    iconBg: "group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600",
  },
  twitter: {
    icon: Twitter,
    gradient: "from-sky-400 to-sky-600",
    shadow: "hover:shadow-sky-500/30",
    ring: "group-hover:ring-sky-500/40",
    iconBg: "group-hover:bg-sky-500 group-hover:text-white group-hover:border-sky-500",
  },
};

interface SocialCardProps {
  platform: keyof typeof platformConfig;
  label: string;
  followers: string;
  url: string;
}

const SocialCard = ({ platform, label, followers, url }: SocialCardProps) => {
  const { icon: Icon, shadow, ring, iconBg, gradient } = platformConfig[platform];
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="group">
      <Card className={`text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${shadow} overflow-hidden relative`}>
        {/* Gradient top bar */}
        <div className={`h-1 w-full bg-gradient-to-r ${gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
        <CardContent className="flex flex-col items-center gap-4 p-8">
          {/* Icon circle with pulse ring */}
          <div className="relative">
            <div
              className={`absolute inset-0 rounded-full ring-4 ring-transparent transition-all duration-500 ${ring} scale-110 opacity-0 group-hover:opacity-60`}
            />
            <div
              className={`relative flex h-20 w-20 items-center justify-center rounded-full border-2 border-primary/30 text-primary transition-all duration-500 ${iconBg} group-hover:scale-110 group-hover:rotate-6`}
            >
              <Icon size={32} className="transition-transform duration-300 group-hover:scale-110" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground transition-colors duration-300">{label}</h3>
            <p className="mt-1 text-sm font-medium text-muted-foreground">{followers} Followers</p>
          </div>
          {/* Follow button */}
          <span className={`inline-block rounded-full bg-gradient-to-r ${gradient} px-5 py-1.5 text-xs font-semibold text-white opacity-0 transition-all duration-300 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0`}>
            Follow
          </span>
        </CardContent>
      </Card>
    </a>
  );
};

export default SocialCard;
