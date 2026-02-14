import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";

const platformConfig = {
  facebook: {
    icon: Facebook,
    brandColor: "text-blue-600",
    borderColor: "border-blue-600",
    bg: "bg-blue-600",
    gradient: "from-blue-500 to-blue-700",
    shadow: "hover:shadow-blue-500/40",
    ring: "ring-blue-400/50",
  },
  instagram: {
    icon: Instagram,
    brandColor: "text-pink-600",
    borderColor: "border-pink-600",
    bg: "bg-pink-600",
    gradient: "from-pink-500 via-purple-500 to-orange-400",
    shadow: "hover:shadow-pink-500/40",
    ring: "ring-pink-400/50",
  },
  youtube: {
    icon: Youtube,
    brandColor: "text-red-600",
    borderColor: "border-red-600",
    bg: "bg-red-600",
    gradient: "from-red-500 to-red-700",
    shadow: "hover:shadow-red-500/40",
    ring: "ring-red-400/50",
  },
  twitter: {
    icon: Twitter,
    brandColor: "text-sky-500",
    borderColor: "border-sky-500",
    bg: "bg-sky-500",
    gradient: "from-sky-400 to-sky-600",
    shadow: "hover:shadow-sky-500/40",
    ring: "ring-sky-400/50",
  },
};

interface SocialCardProps {
  platform: keyof typeof platformConfig;
  label: string;
  followers: string;
  url: string;
}

const SocialCard = ({ platform, label, followers, url }: SocialCardProps) => {
  const { icon: Icon, brandColor, borderColor, gradient, shadow, ring } = platformConfig[platform];
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="group">
      <Card className={`text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${shadow} overflow-hidden relative`}>
        {/* Gradient top bar - always visible */}
        <div className={`h-1.5 w-full bg-gradient-to-r ${gradient}`} />
        <CardContent className="flex flex-col items-center gap-4 p-8">
          {/* Icon circle - brand color by default, animated on hover */}
          <div className="relative">
            {/* Pulse ring on hover */}
            <div
              className={`absolute inset-[-6px] rounded-full ring-4 ring-transparent transition-all duration-500 group-hover:${ring} opacity-0 group-hover:opacity-100 group-hover:animate-pulse`}
            />
            <div
              className={`relative flex h-20 w-20 items-center justify-center rounded-full border-2 ${borderColor} ${brandColor} transition-all duration-500 group-hover:bg-gradient-to-br group-hover:${gradient} group-hover:text-white group-hover:border-transparent group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg`}
            >
              <Icon size={32} className="transition-transform duration-300 group-hover:scale-110" />
            </div>
          </div>
          <div>
            <h3 className={`text-lg font-bold ${brandColor} transition-colors duration-300`}>{label}</h3>
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
