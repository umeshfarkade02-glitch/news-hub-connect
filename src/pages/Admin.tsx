import { useState } from "react";
import {
  getNews,
  addNews,
  updateNews,
  deleteNews,
  categoryLabels,
  type NewsArticle,
} from "@/lib/newsStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Pencil, Trash2, Plus } from "lucide-react";
import { toast } from "sonner";

type FormData = {
  title: string;
  description: string;
  category: NewsArticle["category"];
  imageUrl: string;
  date: string;
  isBreaking: boolean;
};

const emptyForm: FormData = {
  title: "",
  description: "",
  category: "local",
  imageUrl: "",
  date: new Date().toISOString().split("T")[0],
  isBreaking: false,
};

const Admin = () => {
  const [articles, setArticles] = useState(getNews());
  const [form, setForm] = useState<FormData>(emptyForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title || !form.description) {
      toast.error("शीर्षक और विवरण भरना ज़रूरी है");
      return;
    }

    if (editingId) {
      const updated = updateNews(editingId, form);
      setArticles(updated);
      toast.success("समाचार अपडेट हो गया");
    } else {
      addNews(form);
      setArticles(getNews());
      toast.success("नया समाचार जोड़ दिया गया");
    }
    setForm(emptyForm);
    setEditingId(null);
    setShowForm(false);
  };

  const handleEdit = (article: NewsArticle) => {
    setForm({
      title: article.title,
      description: article.description,
      category: article.category,
      imageUrl: article.imageUrl,
      date: article.date,
      isBreaking: article.isBreaking,
    });
    setEditingId(article.id);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = (id: string) => {
    const updated = deleteNews(id);
    setArticles(updated);
    toast.success("समाचार हटा दिया गया");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">📰 न्यूज़ प्रबंधन (Admin)</h1>
        {!showForm && (
          <Button onClick={() => { setShowForm(true); setForm(emptyForm); setEditingId(null); }}>
            <Plus className="mr-2 h-4 w-4" /> नया समाचार
          </Button>
        )}
      </div>

      {/* Form */}
      {showForm && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>{editingId ? "समाचार संपादित करें" : "नया समाचार जोड़ें"}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
              <div className="md:col-span-2">
                <Label>शीर्षक *</Label>
                <Input
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  placeholder="समाचार का शीर्षक"
                />
              </div>
              <div className="md:col-span-2">
                <Label>विवरण *</Label>
                <Textarea
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  placeholder="समाचार का विवरण"
                  rows={3}
                />
              </div>
              <div>
                <Label>श्रेणी</Label>
                <Select
                  value={form.category}
                  onValueChange={(v) => setForm({ ...form, category: v as NewsArticle["category"] })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(categoryLabels).map(([key, label]) => (
                      <SelectItem key={key} value={key}>{label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>तारीख</Label>
                <Input
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                />
              </div>
              <div>
                <Label>इमेज URL</Label>
                <Input
                  value={form.imageUrl}
                  onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              <div className="flex items-center gap-3 pt-6">
                <Switch
                  checked={form.isBreaking}
                  onCheckedChange={(v) => setForm({ ...form, isBreaking: v })}
                />
                <Label>ब्रेकिंग न्यूज़</Label>
              </div>
              <div className="flex gap-3 md:col-span-2">
                <Button type="submit">{editingId ? "अपडेट करें" : "जोड़ें"}</Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => { setShowForm(false); setEditingId(null); setForm(emptyForm); }}
                >
                  रद्द करें
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* News List */}
      <div className="space-y-3">
        {articles.length === 0 && (
          <p className="py-10 text-center text-muted-foreground">कोई समाचार नहीं है। ऊपर "नया समाचार" बटन दबाएँ।</p>
        )}
        {articles.map((article) => (
          <Card key={article.id}>
            <CardContent className="flex items-center gap-4 p-4">
              {article.imageUrl && (
                <img src={article.imageUrl} alt="" className="h-16 w-24 shrink-0 rounded object-cover" />
              )}
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="truncate font-semibold text-foreground">{article.title}</h3>
                  {article.isBreaking && <Badge variant="destructive" className="shrink-0 text-xs">ब्रेकिंग</Badge>}
                </div>
                <div className="flex gap-2 text-xs text-muted-foreground">
                  <Badge variant="secondary" className="text-xs">{categoryLabels[article.category]}</Badge>
                  <span>{article.date}</span>
                </div>
              </div>
              <div className="flex shrink-0 gap-2">
                <Button variant="outline" size="icon" onClick={() => handleEdit(article)}>
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button variant="destructive" size="icon" onClick={() => handleDelete(article.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Admin;
