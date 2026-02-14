import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Instagram, Twitter } from "lucide-react";

interface MemberCardProps {
  name: string;
  post: string;
  imageUrl: string;
  instagram?: string;
  facebook?: string;
  twitter?: string;
}

const MemberCard = ({ name, post, imageUrl, instagram, facebook, twitter }: MemberCardProps) => (
  <Card className="overflow-hidden text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
    <div className="mx-auto mt-6 h-28 w-28">
      <img
        src={imageUrl}
        alt={name}
        className="h-28 w-28 rounded-full border-3 border-transparent object-cover ring-2 ring-primary/30 transition-all duration-300 hover:ring-4 hover:ring-primary"
      />
    </div>
    <CardContent className="p-4">
      <h3 className="text-lg font-semibold text-foreground">{name}</h3>
      <p className="mb-3 text-sm text-muted-foreground">{post}</p>
      <div className="flex justify-center gap-3">
        {facebook && (
          <a href={facebook} className="flex h-9 w-9 items-center justify-center rounded-full border border-blue-600/30 text-blue-600 transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white hover:scale-110">
            <Facebook size={16} />
          </a>
        )}
        {instagram && (
          <a href={instagram} className="flex h-9 w-9 items-center justify-center rounded-full border border-pink-600/30 text-pink-600 transition-all duration-300 hover:border-pink-600 hover:bg-pink-600 hover:text-white hover:scale-110">
            <Instagram size={16} />
          </a>
        )}
        {twitter && (
          <a href={twitter} className="flex h-9 w-9 items-center justify-center rounded-full border border-sky-500/30 text-sky-500 transition-all duration-300 hover:border-sky-500 hover:bg-sky-500 hover:text-white hover:scale-110">
            <Twitter size={16} />
          </a>
        )}
      </div>
    </CardContent>
  </Card>
);

export default MemberCard;
