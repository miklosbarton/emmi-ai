import { Button } from "@/components/ui/button";
import Link from "next/link";

const Footer = () => {
  const footerCategories = [
    {
      title: "CORE SDK",
      links: [
        { name: "Data Management", href: "/data/data-management" },
        { name: "Training", href: "/data/training" },
        { name: "Inference", href: "/data/inference" },
      ]
    },
    {
      title: "AI Models",
      links: [
        { name: "AERO Cars", href: "/models/aero-cars" },
        { name: "AERO Planes", href: "#" },
        { name: "AERO Drones", href: "#" },
        { name: "FLOW", href: "#" },
        { name: "THERMO", href: "#" },
        { name: "STRESS", href: "#" },
      ]
    },
    {
      title: "Solutions",
      links: [
        { name: "Energy", href: "/industry/energy" },
        { name: "Aerospace", href: "/industry/aerospace" },
        { name: "Automotive", href: "/industry/automotive" },
        { name: "Marine", href: "/industry/marine" },
        { name: "Life Science", href: "/industry/life-science" },
        { name: "Defense", href: "/industry/defense" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "About", href: "/about" },
        { name: "News", href: "/news" },
        { name: "Research", href: "/research" },
        { name: "Careers", href: "/careers" },
        { name: "Contact", href: "/contact" }
      ]
    }
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-screen-2xl mx-auto p-20">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {footerCategories.map((category) => (
            <div key={category.title} className="space-y-4">
              <h3 className="text-sm font-semibold text-foreground">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2025 Emmi AI GmbH
          </div>
          <div className="flex gap-4 items-center space-x-8 text-muted-foreground">
            <Link href="/imprint" className="text-sm">Imprint</Link>
            <Link href="/terms" className="text-sm">Terms and Conditions</Link>
            <Link href="/privacy" className="text-sm">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;