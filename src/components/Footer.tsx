
import { Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";


const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "الرئيسية", href: "/" },
    { label: "من أنا", href: "/about" },
    { label: "الخدمات", href: "/services" },
    { label: "المكتبة الرقمية", href: "/library" },
    { label: "تواصل معنا", href: "/contact" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/in/abdulrahman-alalwani", label: "LinkedIn" },
    { icon: Mail, href: "mailto:contact@abdulrahman-alwani.com", label: "Email" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 items-center mb-12 border-b border-primary-foreground/10 pb-12">

          {/* Logo & Bio */}
          {/* Name & Title */}
          <div className="text-center md:text-right">
            <h2 className="text-3xl font-bold text-accent mb-2">عبدالرحمن العلوني</h2>
            <p className="text-primary-foreground/70 max-w-sm mx-auto md:mx-0 leading-relaxed">
              مستشار موارد بشرية وخبير في تطوير ثقافة وبيئة العمل. أساعد المنظمات على بناء بيئات عمل محفزة ومنتجة.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-lg mb-6 text-accent">روابط سريعة</h3>
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & CTA */}
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <a
              href="/contact"
              className="bg-accent hover:bg-accent/90 text-white px-6 py-2 rounded-full font-semibold transition-colors duration-300"
            >
              احجز استشارتك الآن
            </a>
          </div>
        </div>

        {/* Copyright & Scroll Top */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} عبدالرحمن العلوني. جميع الحقوق محفوظة.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-accent transition-colors group"
          >
            <span>العودة للأعلى</span>
            <div className="w-8 h-8 bg-primary-foreground/10 rounded-full flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-30" />
    </footer>
  );
};

export default Footer;
