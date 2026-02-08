import { useState } from "react";
import MemberCard from "@/components/members/MemberCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const allMembers = [
  { name: "अमित कुमार", post: "रिपोर्टर", imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300", facebook: "#", instagram: "#", twitter: "#" },
  { name: "सुनीता देवी", post: "संवाददाता", imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300", facebook: "#", instagram: "#" },
  { name: "विकास सिंह", post: "कैमरामैन", imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300", twitter: "#", instagram: "#" },
  { name: "नेहा गुप्ता", post: "संपादक", imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300", facebook: "#", instagram: "#" },
  { name: "रोहित यादव", post: "रिपोर्टर", imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300", facebook: "#", twitter: "#" },
  { name: "काजल शर्मा", post: "संवाददाता", imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300", instagram: "#" },
];

const posts = [...new Set(allMembers.map((m) => m.post))];

const Members = () => {
  const [search, setSearch] = useState("");
  const [filterPost, setFilterPost] = useState<string | null>(null);

  const filtered = allMembers.filter((m) => {
    const matchesSearch = m.name.includes(search) || m.post.includes(search);
    const matchesPost = !filterPost || m.post === filterPost;
    return matchesSearch && matchesPost;
  });

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="mb-6 text-center text-3xl font-bold text-foreground">हमारे सदस्य</h1>
      <div className="mx-auto mb-8 flex max-w-xl flex-wrap items-center gap-3">
        <Input
          placeholder="नाम या पद खोजें..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1"
        />
        <Button variant={!filterPost ? "default" : "outline"} size="sm" onClick={() => setFilterPost(null)}>
          सभी
        </Button>
        {posts.map((p) => (
          <Button key={p} variant={filterPost === p ? "default" : "outline"} size="sm" onClick={() => setFilterPost(p)}>
            {p}
          </Button>
        ))}
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((m) => (
          <MemberCard key={m.name} {...m} />
        ))}
      </div>
      {filtered.length === 0 && <p className="mt-8 text-center text-muted-foreground">कोई सदस्य नहीं मिला</p>}
    </div>
  );
};

export default Members;
