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
  <Card className="overflow-hidden text-center transition-transform hover:-translate-y-1 hover:shadow-lg">
    <img src={imageUrl} alt={name} className="mx-auto mt-6 h-28 w-28 rounded-full object-cover" />
    <CardContent className="p-4">
      <h3 className="text-lg font-semibold text-foreground">{name}</h3>
      <p className="mb-3 text-sm text-muted-foreground">{post}</p>
      <div className="flex justify-center gap-3">
        {facebook && <a href={facebook} className="text-muted-foreground hover:text-primary"><Facebook size={18} /></a>}
        {instagram && <a href={instagram} className="text-muted-foreground hover:text-primary"><Instagram size={18} /></a>}
        {twitter && <a href={twitter} className="text-muted-foreground hover:text-primary"><Twitter size={18} /></a>}
      </div>
    </CardContent>
  </Card>
);

export default MemberCard;
