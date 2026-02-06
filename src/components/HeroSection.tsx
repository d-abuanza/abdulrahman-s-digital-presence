import { motion } from "framer-motion";
import abdulrahmanPhoto from "@/assets/abdulrahman-photo.png";
import concentricCircles from "@/assets/concentric-circles.png";
import coralCircle from "@/assets/coral-circle.png";
import { CheckCircle, Users, Award, Calendar } from "lucide-react";

const trustIndicators = [
  { icon: Users, label: "+500 عميل راضٍ" },
  { icon: Award, label: "+15 سنة خبرة" },
  { icon: CheckCircle, label: "نتائج مضمونة" },
];

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <img
          src={concentricCircles}
          alt=""
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] max-w-none opacity-40 animate-spin-slow"
          style={{ animationDuration: "120s" }}
        />
      </div>

      {/* Decorative Coral Circles */}
      <motion.img
        src={coralCircle}
        alt=""
        className="absolute top-20 left-10 w-24 h-24 opacity-60"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src={coralCircle}
        alt=""
        className="absolute bottom-32 right-20 w-16 h-16 opacity-40"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-right"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Value Proposition Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Calendar className="w-5 h-5" />
              <span className="font-semibold">احجز استشارتك الأولى اليوم</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              حوّل منظمتك إلى
              <span className="text-accent block mt-2">بيئة عمل استثنائية</span>
            </motion.h1>

            <motion.p
              className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              استراتيجيات مجربة لبناء ثقافة عمل تجذب أفضل الكفاءات، وتحقق نتائج 
              ملموسة في أقل من 90 يوماً
            </motion.p>

            {/* Trust Indicators */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {trustIndicators.map((item, index) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <item.icon className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </motion.div>

            {/* Primary CTA */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <a
                href="#booking"
                className="btn-hero group relative overflow-hidden"
              >
                <span className="relative z-10">احجز جلسة استشارية مجانية</span>
                <span className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
              <a href="#services" className="btn-hero-outline">
                اكتشف الخدمات
              </a>
            </motion.div>

            {/* Urgency/Scarcity */}
            <motion.p
              className="text-sm text-muted-foreground mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              ⚡ المواعيد المتاحة هذا الأسبوع محدودة
            </motion.p>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="flex-1 flex justify-center lg:justify-start"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Decorative ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-accent/30"
                style={{ transform: "scale(1.1)" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              <img
                src={abdulrahmanPhoto}
                alt="عبدالرحمن العلوني"
                className="w-72 h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] object-cover rounded-full shadow-2xl"
              />
              {/* Accent dot with CTA hint */}
              <motion.div
                className="absolute -bottom-2 -right-2 w-24 h-24 bg-accent rounded-full flex items-center justify-center cursor-pointer"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="text-accent-foreground text-xs font-bold text-center leading-tight">
                  احجز<br />الآن
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
