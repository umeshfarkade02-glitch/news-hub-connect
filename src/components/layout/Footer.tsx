import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="container mx-auto grid gap-8 px-4 py-10 md:grid-cols-3">
      <div>
        <h3 className="mb-3 text-lg font-bold text-primary">📰 हिंदी समाचार</h3>
        <p className="text-sm text-muted-foreground">
          विश्वसनीय और निष्पक्ष हिंदी समाचार पत्र। हर खबर सबसे पहले, सबसे सटीक।
        </p>
      </div>
      <div>
        <h4 className="mb-3 font-semibold text-foreground">त्वरित लिंक</h4>
        <ul className="space-y-1 text-sm">
          {[
            { label: "होम", path: "/" },
            { label: "हमारे बारे में", path: "/about" },
            { label: "सदस्य", path: "/members" },
            { label: "कानूनी विभाग", path: "/legal" },
            { label: "संपर्क करें", path: "/contact" },
            { label: "न्यूज़ प्रबंधन", path: "/admin" },
          ].map((l) => (
            <li key={l.path}>
              <Link to={l.path} className="text-muted-foreground hover:text-primary">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="mb-3 font-semibold text-foreground">संपर्क</h4>
        <p className="text-sm text-muted-foreground">ईमेल: info@hindisamachar.com</p>
        <p className="text-sm text-muted-foreground">फोन: +91 98765 43210</p>
        <p className="text-sm text-muted-foreground">पता: नई दिल्ली, भारत</p>
      </div>
    </div>
    <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
      © {new Date().getFullYear()} हिंदी समाचार। सभी अधिकार सुरक्षित।
    </div>
  </footer>
);

export default Footer;
