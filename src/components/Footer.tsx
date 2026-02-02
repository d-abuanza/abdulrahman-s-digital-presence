import { motion } from "framer-motion";
import { Linkedin, MessageCircle, Mail, ArrowUp } from "lucide-react";

const footerLinks = {
  quickLinks: [
    { label: "الرئيسية", href: "#hero" },
    { label: "من أنا", href: "#about" },
    { label: "الخدمات", href: "#services" },
    { label: "المقالات", href: "#blog" },
  ],
  services: [
    { label: "الاستشارات المهنية", href: "#services" },
    { label: "المحاضرات والفعاليات", href: "#services" },
    { label: "ورش العمل", href: "#services" },
    { label: "المنتجات الرقمية", href: "#products" },
  ],
};

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-primary text-primary-foreground pt-20 pb-8 overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full border border-current" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full border border-current" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold mb-4">عبدالرحمن العلوني</h3>
            <p className="text-primary-foreground/70 mb-6 leading-relaxed max-w-md">
              خبير استراتيجي في الموارد البشرية وبناء ثقافة العمل المؤسسية.
              أساعد المنظمات على تحقيق التميز من خلال تطوير رأس المال البشري.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/966500000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="mailto:info@abdulrahman.sa"
                className="w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">الخدمات</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} عبدالرحمن العلوني. جميع الحقوق محفوظة.
          </p>
          
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center shadow-lg hover:shadow-accent/30 transition-shadow duration-300"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
