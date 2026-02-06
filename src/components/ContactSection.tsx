import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, Linkedin, MessageCircle } from "lucide-react";
import concentricCircles from "@/assets/concentric-circles.png";
import coralCircle from "@/assets/coral-circle.png";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "الاسم مطلوب").max(100, "الاسم طويل جداً"),
  email: z.string().trim().email("البريد الإلكتروني غير صحيح").max(255, "البريد طويل جداً"),
  phone: z.string().trim().optional(),
  interest: z.string().min(1, "يرجى اختيار موضوع الاهتمام"),
  message: z.string().trim().min(1, "الرسالة مطلوبة").max(1000, "الرسالة طويلة جداً"),
});

const interestOptions = [
  { value: "", label: "اختر موضوع الاهتمام" },
  { value: "individual", label: "استشارة شخصية" },
  { value: "corporate", label: "خدمات للشركات" },
  { value: "training", label: "ورش عمل وتدريب" },
  { value: "speaking", label: "محاضرة أو فعالية" },
  { value: "other", label: "أخرى" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((error) => {
        if (error.path[0]) {
          fieldErrors[error.path[0] as string] = error.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", phone: "", interest: "", message: "" });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
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
          <span className="text-accent text-lg font-medium mb-4 block">لديك سؤال؟</span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            تواصل معي
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            أجيب على جميع الاستفسارات خلال 24 ساعة
          </p>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-background rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-primary mb-6">طرق التواصل</h3>
              
              <div className="space-y-4">
                <a
                  href="mailto:info@abdulrahman.sa"
                  className="flex items-center gap-4 text-foreground hover:text-accent transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <span className="block font-medium">البريد الإلكتروني</span>
                    <span className="text-muted-foreground text-sm">info@abdulrahman.sa</span>
                  </div>
                </a>

                <a
                  href="https://wa.me/966500000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-foreground hover:text-accent transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                    <MessageCircle className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <span className="block font-medium">واتساب</span>
                    <span className="text-muted-foreground text-sm" dir="ltr">+966 50 000 0000</span>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-foreground">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <span className="block font-medium">الموقع</span>
                    <span className="text-muted-foreground text-sm">الرياض، المملكة العربية السعودية</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-background rounded-3xl p-8 shadow-lg">
              <h4 className="text-lg font-bold text-primary mb-4">تابعني على</h4>
              <div className="flex gap-4">
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
            </div>

            {/* Quick Note */}
            <div className="bg-accent/10 rounded-2xl p-6 border border-accent/20">
              <p className="text-foreground text-sm">
                <span className="font-bold text-accent">💡 نصيحة:</span> للحصول على رد أسرع، 
                تواصل عبر واتساب أو احجز مباشرة من{" "}
                <a href="#booking" className="text-accent underline font-medium">
                  صفحة الحجز
                </a>
              </p>
            </div>
          </motion.div>

          {/* Contact Form with Lead Qualification */}
          <motion.form
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="bg-background rounded-3xl p-8 lg:p-10 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-primary mb-2">أرسل رسالة</h3>
            <p className="text-muted-foreground mb-6 text-sm">
              أجيب على جميع الرسائل خلال 24 ساعة
            </p>

            {isSubmitted && (
              <div className="bg-accent/10 border border-accent/30 rounded-xl p-4 mb-6">
                <p className="text-accent font-medium">
                  ✓ تم إرسال رسالتك بنجاح! سأتواصل معك قريباً
                </p>
              </div>
            )}

            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-foreground font-medium mb-2">
                  الاسم <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-destructive' : 'border-border'} bg-background focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 outline-none`}
                  placeholder="اكتب اسمك"
                />
                {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-foreground font-medium mb-2">
                    البريد الإلكتروني <span className="text-accent">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-destructive' : 'border-border'} bg-background focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 outline-none`}
                    placeholder="example@email.com"
                    dir="ltr"
                  />
                  {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-foreground font-medium mb-2">
                    رقم الجوال (اختياري)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 outline-none"
                    placeholder="+966 5XX XXX XXXX"
                    dir="ltr"
                  />
                </div>
              </div>

              {/* Lead Qualification */}
              <div>
                <label htmlFor="interest" className="block text-foreground font-medium mb-2">
                  ما الذي يهمك؟ <span className="text-accent">*</span>
                </label>
                <select
                  id="interest"
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl border ${errors.interest ? 'border-destructive' : 'border-border'} bg-background focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 outline-none`}
                >
                  {interestOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.interest && <p className="text-destructive text-sm mt-1">{errors.interest}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-foreground font-medium mb-2">
                  الرسالة <span className="text-accent">*</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl border ${errors.message ? 'border-destructive' : 'border-border'} bg-background focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 outline-none resize-none`}
                  placeholder="كيف يمكنني مساعدتك؟"
                />
                {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-hero flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span>جاري الإرسال...</span>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    إرسال الرسالة
                  </>
                )}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
