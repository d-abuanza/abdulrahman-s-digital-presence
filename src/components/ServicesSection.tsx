import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Mic, GraduationCap, ArrowLeft, CheckCircle, Building2, User } from "lucide-react";
import coralCircle from "@/assets/coral-circle.png";
import concentricCircles from "@/assets/concentric-circles.png";

const individualServices = [
  {
    icon: MessageSquare,
    title: "الاستشارة الشخصية",
    problem: "تشعر بالتشتت في مسيرتك المهنية؟ لا تعرف الخطوة التالية؟",
    outcome: "خطة واضحة لتطوير مسيرتك المهنية مع خارطة طريق قابلة للتنفيذ",
    features: ["تحليل شامل للوضع الحالي", "تحديد الأهداف والفجوات", "خطة تطوير شخصية"],
    price: "500 ر.س",
    duration: "60 دقيقة",
    cta: "احجز استشارتك",
  },
  {
    icon: GraduationCap,
    title: "التدريب التنفيذي",
    problem: "تحتاج لتطوير مهاراتك القيادية؟ فريقك لا يحقق إمكاناته الكاملة؟",
    outcome: "قائد أكثر ثقة وفريق أكثر إنتاجية والتزاماً",
    features: ["6 جلسات شهرية", "أدوات قيادية عملية", "متابعة مستمرة"],
    price: "2,500 ر.س",
    duration: "برنامج 3 أشهر",
    cta: "ابدأ التحول",
    featured: true,
  },
];

const corporateServices = [
  {
    icon: Building2,
    title: "استشارات المنظمات",
    problem: "معدل دوران عالي؟ ثقافة عمل سلبية؟ صعوبة في جذب الكفاءات؟",
    outcome: "بيئة عمل تنافسية تجذب وتحافظ على أفضل الكفاءات",
    features: ["تشخيص شامل للثقافة", "استراتيجية تحول مخصصة", "دعم التنفيذ"],
    price: "يبدأ من 15,000 ر.س",
    duration: "حسب حجم المنظمة",
    cta: "اطلب عرض سعر",
  },
  {
    icon: Mic,
    title: "المحاضرات والفعاليات",
    problem: "تبحث عن متحدث ملهم لمؤتمرك؟ تريد إلهام فريقك؟",
    outcome: "جمهور متحمس، رسائل تبقى، وتأثير يدوم",
    features: ["محتوى مخصص للجمهور", "أسلوب تفاعلي", "مواد داعمة"],
    price: "يبدأ من 5,000 ر.س",
    duration: "45-90 دقيقة",
    cta: "استفسر الآن",
  },
  {
    icon: GraduationCap,
    title: "ورش العمل المؤسسية",
    problem: "فريقك يحتاج لمهارات جديدة؟ تريد تحسين التعاون والإنتاجية؟",
    outcome: "فريق متمكن بأدوات ومهارات قابلة للتطبيق فوراً",
    features: ["تصميم مخصص", "تدريب عملي", "شهادات معتمدة"],
    price: "يبدأ من 8,000 ر.س",
    duration: "يوم أو يومان",
    cta: "صمم ورشتك",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-24 lg:py-32 section-cream overflow-hidden"
    >
      {/* Background decoration */}
      <img
        src={concentricCircles}
        alt=""
        className="absolute top-0 right-0 w-2/3 opacity-30 pointer-events-none translate-x-1/3 -translate-y-1/4"
      />
      
      <motion.img
        src={coralCircle}
        alt=""
        className="absolute bottom-20 left-10 w-32 h-32 opacity-30"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-lg font-medium mb-4 block">حلول مخصصة لاحتياجاتك</span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">الخدمات</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            سواء كنت فرداً يبحث عن التطور أو منظمة تسعى للتميز، لديّ الحل المناسب
          </p>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Individual Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <User className="w-6 h-6 text-accent" />
            <h3 className="text-2xl font-bold text-primary">للأفراد والقيادات</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {individualServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                className={`group bg-background rounded-3xl p-8 shadow-lg card-hover relative overflow-hidden ${
                  service.featured ? 'ring-2 ring-accent' : ''
                }`}
              >
                {service.featured && (
                  <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-bold">
                    الأكثر طلباً
                  </div>
                )}
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-accent" />
                  </div>
                  
                  <h4 className="text-2xl font-bold text-primary mb-3">{service.title}</h4>
                  
                  {/* Problem */}
                  <p className="text-muted-foreground mb-4 italic">
                    "{service.problem}"
                  </p>
                  
                  {/* Outcome */}
                  <div className="bg-accent/5 rounded-xl p-4 mb-6">
                    <p className="text-foreground font-medium">
                      <span className="text-accent">✓ النتيجة:</span> {service.outcome}
                    </p>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-foreground text-sm">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <div className="text-2xl font-bold text-primary">{service.price}</div>
                      <div className="text-sm text-muted-foreground">{service.duration}</div>
                    </div>
                    <a
                      href="#booking"
                      className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-accent/30 transition-all duration-300"
                    >
                      {service.cta}
                      <ArrowLeft className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Corporate Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Building2 className="w-6 h-6 text-accent" />
            <h3 className="text-2xl font-bold text-primary">للمنظمات والشركات</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {corporateServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.15 }}
                className="group bg-background rounded-3xl p-8 shadow-lg card-hover relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-accent" />
                  </div>
                  
                  <h4 className="text-xl font-bold text-primary mb-3">{service.title}</h4>
                  
                  <p className="text-muted-foreground text-sm mb-4 italic">
                    "{service.problem}"
                  </p>
                  
                  <div className="bg-accent/5 rounded-xl p-3 mb-4">
                    <p className="text-foreground text-sm font-medium">
                      <span className="text-accent">✓</span> {service.outcome}
                    </p>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-foreground text-sm">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-4 border-t border-border">
                    <div className="text-lg font-bold text-primary mb-1">{service.price}</div>
                    <div className="text-sm text-muted-foreground mb-4">{service.duration}</div>
                    <a
                      href="#booking"
                      className="inline-flex items-center gap-2 text-accent font-semibold group-hover:gap-4 transition-all duration-300"
                    >
                      {service.cta}
                      <ArrowLeft className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Not Sure CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-16 text-center"
        >
          <div className="bg-primary text-primary-foreground rounded-3xl p-8 md:p-12 max-w-3xl mx-auto">
            <h4 className="text-2xl md:text-3xl font-bold mb-4">
              لست متأكداً من الخدمة المناسبة؟
            </h4>
            <p className="text-primary-foreground/80 mb-6">
              احجز مكالمة استكشافية مجانية (15 دقيقة) لنحدد معاً أفضل طريقة لمساعدتك
            </p>
            <a
              href="#booking"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-accent/30 transition-all duration-300"
            >
              احجز مكالمتك المجانية
              <ArrowLeft className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
