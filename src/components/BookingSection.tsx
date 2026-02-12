import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { Calendar, Clock, CheckCircle, Shield, ArrowLeft } from "lucide-react";
import concentricCircles from "@/assets/concentric-circles.png";

const bookingOptions = [
  {
    title: "مكالمة استكشافية مجانية",
    duration: "15 دقيقة",
    price: "مجاناً",
    description: "لتحديد احتياجاتك والخدمة المناسبة",
    calendlyUrl: "https://calendly.com/diaaabuanza7/15min",
    isPrimary: false,
  },
  {
    title: "جلسة استشارية كاملة",
    duration: "60 دقيقة",
    price: "500 ر.س",
    description: "تحليل شامل + خطة عمل مخصصة",
    calendlyUrl: "https://calendly.com/diaaabuanza7/60min",
    isPrimary: true,
  },
  {
    title: "جلسة تقييم المنظمة",
    duration: "90 دقيقة",
    price: "1,500 ر.س",
    description: "للشركات: تشخيص + توصيات + خارطة طريق",
    calendlyUrl: "https://calendly.com/diaaabuanza7/90min",
    isPrimary: false,
  },
];

const guarantees = [
  "ضمان استرداد المبلغ خلال 24 ساعة إذا لم تكن راضياً",
  "محتوى مخصص 100% لاحتياجاتك",
  "ملخص مكتوب بعد كل جلسة",
  "متابعة مجانية لمدة أسبوع",
];

const BookingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  const openCalendly = (url: string) => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url });
    }
  };

  return (
    <section
      id="booking"
      ref={ref}
      className="relative py-24 lg:py-32 bg-primary overflow-hidden"
    >
      {/* Background decoration */}
      <img
        src={concentricCircles}
        alt=""
        className="absolute top-0 right-0 w-full opacity-10 pointer-events-none translate-x-1/4 -translate-y-1/4"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-lg font-medium mb-4 block">الخطوة التالية</span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            احجز جلستك الآن
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            اختر نوع الجلسة المناسب لاحتياجاتك وابدأ رحلة التحول
          </p>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Booking Options */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {bookingOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              className={`rounded-3xl p-8 relative overflow-hidden ${
                option.isPrimary 
                  ? 'bg-accent text-accent-foreground ring-4 ring-accent/50 scale-105' 
                  : 'bg-primary-foreground/10 text-primary-foreground'
              }`}
            >
              {option.isPrimary && (
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
                  الأكثر طلباً
                </div>
              )}

              <div className="flex items-center gap-2 mb-4 mt-4">
                <Clock className={`w-5 h-5 ${option.isPrimary ? 'text-accent-foreground' : 'text-accent'}`} />
                <span className="font-medium">{option.duration}</span>
              </div>

              <h3 className="text-2xl font-bold mb-3">{option.title}</h3>
              
              <p className={`mb-6 ${option.isPrimary ? 'text-accent-foreground/90' : 'text-primary-foreground/70'}`}>
                {option.description}
              </p>

              <div className="text-3xl font-bold mb-6">{option.price}</div>

              <button
                onClick={() => openCalendly(option.calendlyUrl)}
                className={`w-full py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all duration-300 ${
                  option.isPrimary
                    ? 'bg-primary text-primary-foreground hover:shadow-lg'
                    : 'bg-accent text-accent-foreground hover:shadow-lg hover:shadow-accent/30'
                }`}
              >
                <Calendar className="w-5 h-5" />
                احجز الآن
              </button>
            </motion.div>
          ))}
        </div>

        {/* Guarantees */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-primary-foreground/5 rounded-3xl p-8 md:p-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-8 h-8 text-accent" />
            <h4 className="text-2xl font-bold text-primary-foreground">ضماناتنا لك</h4>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="flex items-center gap-3 text-primary-foreground/90">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span>{guarantee}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Urgency */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-primary-foreground/70 mb-4">
            ⚡ المواعيد المتاحة هذا الأسبوع محدودة جداً
          </p>
          <p className="text-accent font-semibold">
            لا تؤجل بداية التحول - كل يوم تأخير له ثمنه
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// Add Calendly type to window
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export default BookingSection;
