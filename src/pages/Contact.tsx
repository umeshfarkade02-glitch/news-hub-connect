import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("सभी फ़ील्ड भरना ज़रूरी है");
      return;
    }
    toast.success("आपका संदेश भेज दिया गया है!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="mb-6 text-center text-3xl font-bold text-foreground">संपर्क करें</h1>
      <Card className="mx-auto max-w-lg">
        <CardHeader>
          <CardTitle>हमें संदेश भेजें</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div><Label>नाम</Label><Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="आपका नाम" /></div>
            <div><Label>ईमेल</Label><Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="आपका ईमेल" /></div>
            <div><Label>संदेश</Label><Textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="आपका संदेश" rows={4} /></div>
            <Button type="submit" className="w-full">भेजें</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;
