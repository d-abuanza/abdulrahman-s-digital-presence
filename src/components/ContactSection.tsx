import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Calendar, Mail, Phone, MapPin, Send, Linkedin, MessageCircle } from "lucide-react";
import concentricCircles from "@/assets/concentric-circles.png";
import coralCircle from "@/assets/coral-circle.png";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-24 lg:py-32 section-cream overflow-hidden"
    >
      {/* Background decoration */}
      <img
        src={concentricCircles}
        alt=""
        className="absolute top-0 right-0 w-full opacity-20 pointer-events-none translate-x-1/4 -translate-y-1/4"
      />

      <motion.img
        src={coralCircle}
        alt=""
        className="absolute bottom-20 right-20 w-28 h-28 opacity-30"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-lg font-medium mb-4 block">لنتواصل</span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            تواصل معي
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info & Booking */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="calendly-inline-widget" data-url="https://calendly.com/diaaabuanza7/30min" style={{ minWidth: '320px', height: '700px' }}></div>

            <div className="space-y-4 pt-8 border-t border-border">
              <h4 className="text-lg font-bold text-primary mb-6">أو تواصل مباشرة</h4>

              <a
                href="mailto:info@abdulrahman.sa"
                className="flex items-center gap-4 text-foreground hover:text-accent transition-colors duration-300 group"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <span>info@abdulrahman.sa</span>
              </a>

              <a
                href="tel:+966500000000"
                className="flex items-center gap-4 text-foreground hover:text-accent transition-colors duration-300 group"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <span dir="ltr">+966 50 000 0000</span>
              </a>

              <div className="flex items-center gap-4 text-foreground">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <span>الرياض، المملكة العربية السعودية</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-accent hover:shadow-lg hover:shadow-accent/30 transition-all duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://wa.me/966500000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-accent hover:shadow-lg hover:shadow-accent/30 transition-all duration-300"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
              <a
                href="mailto:info@abdulrahman.sa"
                className="w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-accent hover:shadow-lg hover:shadow-accent/30 transition-all duration-300"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="bg-background rounded-3xl p-8 lg:p-10 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-primary mb-6">أرسل رسالة</h3>

            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-foreground font-medium mb-2">
                  الاسم
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-4 rounded-xl border border-border bg-background focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 outline-none"
                  placeholder="اكتب اسمك"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-foreground font-medium mb-2">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-4 rounded-xl border border-border bg-background focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 outline-none"
                  placeholder="example@email.com"
                  dir="ltr"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-foreground font-medium mb-2">
                  الرسالة
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-4 rounded-xl border border-border bg-background focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 outline-none resize-none"
                  placeholder="كيف يمكنني مساعدتك؟"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full btn-hero flex items-center justify-center gap-3"
              >
                <Send className="w-5 h-5" />
                إرسال الرسالة
              </button>
            </div>
          </motion.form>
        </div>
      </div >
    </section >
  );
};

export default ContactSection;
