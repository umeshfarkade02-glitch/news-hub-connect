import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Briefcase, GraduationCap, User, Wrench, FileText, CalendarDays } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const FORM_ACTION = "https://formspree.io/f/mpqjdwpv"; // Set your form action URL here
const FORM_METHOD = "POST"; // Set your form method here

const Career = () => {
  const { toast } = useToast();
  const [experience, setExperience] = useState("fresher");
  const [declared, setDeclared] = useState(false);
  const [willingToTravel, setWillingToTravel] = useState("yes");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!declared) {
      toast({ title: "कृपया घोषणा पर टिक करें", variant: "destructive" });
      return;
    }
    toast({ title: "आवेदन सफलतापूर्वक जमा हो गया!", description: "हम जल्द ही आपसे संपर्क करेंगे।" });
  };

  const handleReset = () => {
    (document.getElementById("career-form") as HTMLFormElement)?.reset();
    setExperience("fresher");
    setDeclared(false);
    setWillingToTravel("yes");
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-foreground md:text-4xl">📰 करियर - हमसे जुड़ें</h1>
        <p className="mt-2 text-muted-foreground">हिंदी समाचार टीम में शामिल होने के लिए नीचे फॉर्म भरें</p>
      </div>

      <form id="career-form" action={FORM_ACTION || undefined} method={FORM_ACTION ? FORM_METHOD : undefined} onSubmit={FORM_ACTION ? undefined : handleSubmit} className="mx-auto max-w-4xl space-y-8">
        {/* 1. Personal Details */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <User size={20} /> व्यक्तिगत जानकारी
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="fullName">पूरा नाम *</Label>
              <Input id="fullName" required placeholder="अपना पूरा नाम लिखें" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="parentName">पिता/माता का नाम *</Label>
              <Input id="parentName" required placeholder="पिता/माता का नाम" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dob">जन्म तिथि *</Label>
              <Input id="dob" type="date" required />
            </div>
            <div className="space-y-2">
              <Label>लिंग *</Label>
              <Select required>
                <SelectTrigger><SelectValue placeholder="चुनें" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">पुरुष</SelectItem>
                  <SelectItem value="female">महिला</SelectItem>
                  <SelectItem value="other">अन्य</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="mobile">मोबाइल नंबर *</Label>
              <Input id="mobile" type="tel" required placeholder="10 अंकों का मोबाइल नंबर" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">ईमेल *</Label>
              <Input id="email" type="email" required placeholder="example@email.com" />
            </div>
            <div className="col-span-full space-y-2">
              <Label htmlFor="currentAddress">वर्तमान पता *</Label>
              <Textarea id="currentAddress" required placeholder="वर्तमान पता लिखें" />
            </div>
            <div className="col-span-full space-y-2">
              <Label htmlFor="permanentAddress">स्थायी पता</Label>
              <Textarea id="permanentAddress" placeholder="स्थायी पता लिखें" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="photo">पासपोर्ट साइज़ फोटो</Label>
              <Input id="photo" type="file" accept="image/*" />
            </div>
          </CardContent>
        </Card>

        {/* 2. Post Selection */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Briefcase size={20} /> पद चयन
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label>आवेदन पद *</Label>
              <Select required>
                <SelectTrigger><SelectValue placeholder="पद चुनें" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="reporter">रिपोर्टर</SelectItem>
                  <SelectItem value="sub_editor">उप संपादक</SelectItem>
                  <SelectItem value="anchor">न्यूज़ एंकर</SelectItem>
                  <SelectItem value="photographer">फोटोग्राफर</SelectItem>
                  <SelectItem value="video_editor">वीडियो एडिटर</SelectItem>
                  <SelectItem value="social_media">सोशल मीडिया मैनेजर</SelectItem>
                  <SelectItem value="legal">कानूनी विभाग</SelectItem>
                  <SelectItem value="marketing">मार्केटिंग एग्जीक्यूटिव</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="preferredCity">पसंदीदा स्थान (शहर)</Label>
              <Input id="preferredCity" placeholder="शहर का नाम" />
            </div>
          </CardContent>
        </Card>

        {/* 3. Education */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <GraduationCap size={20} /> शैक्षणिक योग्यता
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="qualification">उच्चतम योग्यता *</Label>
              <Input id="qualification" required placeholder="जैसे: स्नातक, परास्नातक" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="degree">डिग्री / कोर्स का नाम</Label>
              <Input id="degree" placeholder="जैसे: B.A., M.A. Journalism" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="university">विश्वविद्यालय / कॉलेज</Label>
              <Input id="university" placeholder="विश्वविद्यालय का नाम" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="passingYear">उत्तीर्ण वर्ष</Label>
              <Input id="passingYear" type="number" placeholder="जैसे: 2023" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="percentage">प्रतिशत / ग्रेड</Label>
              <Input id="percentage" placeholder="जैसे: 75% या A+" />
            </div>
          </CardContent>
        </Card>

        {/* 4. Work Experience */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Briefcase size={20} /> कार्य अनुभव
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>अनुभव *</Label>
              <RadioGroup value={experience} onValueChange={setExperience} className="flex gap-4">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="fresher" id="fresher" />
                  <Label htmlFor="fresher">फ्रेशर</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="experienced" id="experienced" />
                  <Label htmlFor="experienced">अनुभवी</Label>
                </div>
              </RadioGroup>
            </div>
            {experience === "experienced" && (
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="orgName">संगठन का नाम</Label>
                  <Input id="orgName" placeholder="पिछली कंपनी" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="designation">पद नाम</Label>
                  <Input id="designation" placeholder="जैसे: रिपोर्टर" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="expYears">अनुभव (वर्ष/महीने)</Label>
                  <Input id="expYears" placeholder="जैसे: 2 वर्ष" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="prevSalary">पिछला वेतन (वैकल्पिक)</Label>
                  <Input id="prevSalary" placeholder="जैसे: ₹25,000" />
                </div>
                <div className="col-span-full space-y-2">
                  <Label htmlFor="leavingReason">छोड़ने का कारण</Label>
                  <Textarea id="leavingReason" placeholder="कारण बताएं" />
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* 5. Skills */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Wrench size={20} /> कौशल
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="writingSkill">लेखन कौशल (हिंदी/अंग्रेज़ी/क्षेत्रीय)</Label>
              <Input id="writingSkill" placeholder="जैसे: हिंदी, अंग्रेज़ी" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="computerSkills">कंप्यूटर कौशल</Label>
              <Input id="computerSkills" placeholder="MS Office, Photoshop, Video Editing" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="reportingExp">रिपोर्टिंग / एंकरिंग अनुभव</Label>
              <Input id="reportingExp" placeholder="अनुभव बताएं" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="socialMediaExp">सोशल मीडिया हैंडलिंग अनुभव</Label>
              <Input id="socialMediaExp" placeholder="अनुभव बताएं" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="typingSpeed">टाइपिंग स्पीड</Label>
              <Input id="typingSpeed" placeholder="जैसे: 40 WPM" />
            </div>
          </CardContent>
        </Card>

        {/* 6. Document Upload */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <FileText size={20} /> दस्तावेज़ अपलोड
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="resume">रिज़्यूमे / CV (PDF)</Label>
              <Input id="resume" type="file" accept=".pdf,.doc,.docx" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="idProof">पहचान पत्र (आधार/पैन)</Label>
              <Input id="idProof" type="file" accept=".pdf,.jpg,.png" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="expCert">अनुभव प्रमाणपत्र (यदि कोई हो)</Label>
              <Input id="expCert" type="file" accept=".pdf,.jpg,.png" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="portfolio">पोर्टफोलियो / लेखन नमूना</Label>
              <Input id="portfolio" type="file" accept=".pdf,.doc,.docx" />
            </div>
          </CardContent>
        </Card>

        {/* 7. Availability & Declaration */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <CalendarDays size={20} /> उपलब्धता और घोषणा
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="joinDate">कब से जुड़ सकते हैं *</Label>
                <Input id="joinDate" type="date" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="expectedSalary">अपेक्षित वेतन</Label>
                <Input id="expectedSalary" placeholder="जैसे: ₹20,000" />
              </div>
            </div>
            <div className="space-y-2">
              <Label>क्या आप यात्रा करने को तैयार हैं? *</Label>
              <RadioGroup value={willingToTravel} onValueChange={setWillingToTravel} className="flex gap-4">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="yes" id="travel-yes" />
                  <Label htmlFor="travel-yes">हाँ</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="no" id="travel-no" />
                  <Label htmlFor="travel-no">नहीं</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="flex items-start gap-2 rounded-md border border-border p-4">
              <Checkbox
                id="declaration"
                checked={declared}
                onCheckedChange={(v) => setDeclared(v === true)}
              />
              <Label htmlFor="declaration" className="text-sm leading-relaxed">
                मैं घोषणा करता/करती हूँ कि ऊपर दी गई सभी जानकारी सत्य है। किसी भी गलत जानकारी के लिए मैं स्वयं जिम्मेदार हूँ।
              </Label>
            </div>
          </CardContent>
        </Card>

        {/* 8. Submit */}
        <div className="flex justify-center gap-4 pb-8">
          <Button type="submit" size="lg">
            आवेदन जमा करें
          </Button>
          <Button type="button" variant="outline" size="lg" onClick={handleReset}>
            रीसेट करें
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Career;
