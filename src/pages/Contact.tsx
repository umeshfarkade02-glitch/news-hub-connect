import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";

const FORM_ACTION = "https://formspree.io/f/mpqjdwpv"; // Set your form action URL here
const FORM_METHOD = "POST"; // Set your form method here

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("सभी ज़रूरी फ़ील्ड भरें");
      return;
    }
    toast.success("आपका संदेश भेज दिया गया है!");
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="mb-8 text-center text-3xl font-bold text-foreground">संपर्क करें</h1>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Left - Info Cards */}
        <div className="space-y-4">
          <Card>
            <CardContent className="flex items-start gap-4 p-5">
              <div className="rounded-full bg-destructive/10 p-3">
                <MapPin className="h-6 w-6 text-destructive" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">पता</h3>
                <p className="text-sm text-muted-foreground">123, प्रेस एरिया</p>
                <p className="text-sm text-muted-foreground">नई दिल्ली - 110001</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-start gap-4 p-5">
              <div className="rounded-full bg-destructive/10 p-3">
                <Phone className="h-6 w-6 text-destructive" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">फ़ोन</h3>
                <p className="text-sm text-muted-foreground">+91 98765 43210</p>
                <p className="text-sm text-muted-foreground">+91 11 2345 6789</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-start gap-4 p-5">
              <div className="rounded-full bg-destructive/10 p-3">
                <Mail className="h-6 w-6 text-destructive" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">ईमेल</h3>
                <p className="text-sm text-muted-foreground">contact@dainiksamachar.com</p>
                <p className="text-sm text-muted-foreground">editor@dainiksamachar.com</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-start gap-4 p-5">
              <div className="rounded-full bg-destructive/10 p-3">
                <Clock className="h-6 w-6 text-destructive" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">कार्य समय</h3>
                <p className="text-sm text-muted-foreground">सोमवार - शनिवार</p>
                <p className="text-sm text-muted-foreground">सुबह 9:00 - शाम 6:00</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right - Form */}
        <div>
          <h2 className="mb-6 text-2xl font-bold text-foreground">हमें संदेश भेजें</h2>
          <form action={FORM_ACTION || undefined} method={FORM_ACTION ? FORM_METHOD : undefined} onSubmit={FORM_ACTION ? undefined : handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label>नाम *</Label>
                <Input name="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="आपका नाम" required />
              </div>
              <div>
                <Label>ईमेल *</Label>
                <Input name="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="आपका ईमेल" required />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label>फ़ोन नंबर</Label>
                <Input name="phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="फ़ोन नंबर" />
              </div>
              <div>
                <Label>विषय</Label>
                <Input name="subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} placeholder="संदेश का विषय" />
              </div>
            </div>
            <div>
              <Label>संदेश *</Label>
              <Textarea name="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="अपना संदेश लिखें..." rows={6} required />
            </div>
            <Button type="submit" variant="destructive" className="w-full">संदेश भेजें</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
