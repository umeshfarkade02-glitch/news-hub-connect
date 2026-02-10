import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";

const DateBar = () => {
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const hindiDate = today.toLocaleDateString("hi-IN", options);

  return (
    <div className="bg-primary text-primary-foreground">
      <div className="container mx-auto flex items-center justify-between px-4 py-1.5 text-sm">
        <span>आज की तारीख: {hindiDate}</span>
        <div className="flex items-center gap-2">
          <a href="#" className="p-1 opacity-80 hover:opacity-100"><Facebook size={16} /></a>
          <a href="#" className="p-1 opacity-80 hover:opacity-100"><Instagram size={16} /></a>
          <a href="#" className="p-1 opacity-80 hover:opacity-100"><Youtube size={16} /></a>
          <a href="#" className="p-1 opacity-80 hover:opacity-100"><Twitter size={16} /></a>
        </div>
      </div>
    </div>
  );
};

export default DateBar;
