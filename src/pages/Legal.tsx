import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const Legal = () => {
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      toast.error("कृपया नियम और शर्तें स्वीकार करें");
      return;
    }
    toast.success("आपका फॉर्म सफलतापूर्वक जमा हो गया!");
  };

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Banner */}
      <div className="mb-8 rounded-lg bg-primary px-6 py-12 text-center text-primary-foreground">
        <h1 className="text-3xl font-bold">⚖️ कानूनी विभाग</h1>
        <p className="mt-2 opacity-90">अपनी समस्या दर्ज करें, हम मदद करेंगे</p>
      </div>

      <Card className="mx-auto max-w-2xl">
        <CardHeader><CardTitle>शिकायत फॉर्म</CardTitle></CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
            <div><Label>पहला नाम *</Label><Input required placeholder="पहला नाम" /></div>
            <div><Label>मध्य नाम</Label><Input placeholder="मध्य नाम" /></div>
            <div><Label>अंतिम नाम *</Label><Input required placeholder="अंतिम नाम" /></div>
            <div><Label>उम्र *</Label><Input type="number" required placeholder="उम्र" /></div>
            <div><Label>जन्म तिथि</Label><Input type="date" /></div>
            <div><Label>मोबाइल नंबर *</Label><Input type="tel" required placeholder="मोबाइल नंबर" /></div>
            <div><Label>वैकल्पिक मोबाइल</Label><Input type="tel" placeholder="वैकल्पिक नंबर" /></div>
            <div><Label>WhatsApp नंबर</Label><Input type="tel" placeholder="WhatsApp नंबर" /></div>
            <div className="md:col-span-2"><Label>पता *</Label><Textarea required placeholder="पूरा पता" rows={2} /></div>
            <div className="md:col-span-2"><Label>समस्या का विवरण *</Label><Textarea required placeholder="अपनी समस्या बताएं" rows={3} /></div>
            <div className="md:col-span-2"><Label>पहले से ली गई कार्रवाई</Label><Textarea placeholder="अगर कोई कार्रवाई पहले से की है तो बताएं" rows={2} /></div>
            <div className="md:col-span-2">
              <Label>प्रमाण अपलोड (इमेज/PDF)</Label>
              <Input type="file" accept="image/*,.pdf" />
            </div>
            <div className="flex items-center gap-2 md:col-span-2">
              <Checkbox checked={agreed} onCheckedChange={(v) => setAgreed(!!v)} />
              <Label className="cursor-pointer">मैं नियम और शर्तें स्वीकार करता/करती हूँ</Label>
            </div>
            <div className="md:col-span-2">
              <Button type="submit" className="w-full">फॉर्म जमा करें</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Legal;
