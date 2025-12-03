import { motion } from "framer-motion";

const Footer = () => {
  const footerLinks = {
    Product: ["Features", "Technology", "Pricing", "Compare"],
    Support: ["Help Center", "Contact", "Warranty", "Sizing Guide"],
    Company: ["About", "Careers", "Press", "Partners"],
    Legal: ["Privacy", "Terms", "Cookies", "Licenses"],
  };

  return (
    <footer className="py-16 md:py-20 border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="inline-block mb-6">
              <span className="font-display text-2xl font-semibold tracking-wider text-foreground">
                NUVRO<span className="text-primary">RING</span>
              </span>
            </a>
            <p className="text-muted-foreground mb-6 max-w-xs">
              Redefining wearable technology with luxury design and advanced
              health monitoring capabilities.
            </p>
            <div className="flex gap-4">
              {["Twitter", "Instagram", "LinkedIn"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-medium text-foreground mb-4 tracking-wide">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/30">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2024 NuvroRing. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-muted-foreground text-sm">
              Designed in California
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
