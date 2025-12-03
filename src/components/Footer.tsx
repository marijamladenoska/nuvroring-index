import { Sparkles } from "lucide-react";

const Footer = () => {
  const links = {
    Product: ["Features", "Pricing", "Integrations", "Changelog"],
    Company: ["About", "Blog", "Careers", "Press"],
    Resources: ["Help Center", "Contact", "API Docs", "Status"],
    Legal: ["Privacy", "Terms", "Cookies", "Licenses"],
  };

  return (
    <footer className="py-16 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-primary flex items-center justify-center">
                <Sparkles size={18} className="text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">
                Follow<span className="text-primary">Track</span>
              </span>
            </a>
            <p className="text-muted-foreground mb-6 max-w-xs">
              The simplest way to track your followers across all social media
              platforms.
            </p>
          </div>

          {/* Links */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="font-semibold text-foreground mb-4">{title}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2024 FollowTrack. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Twitter", "Instagram", "LinkedIn"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
