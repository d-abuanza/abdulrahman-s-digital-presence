import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Mic, GraduationCap, ArrowLeft } from "lucide-react";
import coralCircle from "@/assets/coral-circle.png";
import concentricCircles from "@/assets/concentric-circles.png";

const services = [
  {
    icon: MessageSquare,
    title: "الاستشارات المهنية",
    description:
      "جلسات استشارية متخصصة لتطوير استراتيجيات الموارد البشرية وبناء ثقافة العمل المؤسسية",
    features: ["تحليل الوضع الراهن", "خطة تطوير شاملة", "متابعة التنفيذ"],
  },
  {
    icon: Mic,
    title: "المحاضرات والفعاليات",
    description:
      "محاضرات ملهمة وتفاعلية في المؤتمرات والفعاليات حول القيادة وإدارة الموارد البشرية",
    features: ["محتوى مخصص", "أسلوب تفاعلي", "رؤى عملية"],
  },
  {
    icon: GraduationCap,
    title: "ورش العمل والتدريب",
    description:
      "برامج تدريبية متكاملة لتطوير مهارات فرق العمل والقيادات في مجال الموارد البشرية",
    features: ["تدريب عملي", "أدوات قابلة للتطبيق", "شهادات معتمدة"],
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
          <span className="text-accent text-lg font-medium mb-4 block">ماذا أقدم</span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">الخدمات</h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              className="group bg-background rounded-3xl p-8 shadow-lg card-hover relative overflow-hidden"
            >
              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-accent" />
                </div>
                
                <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent font-semibold group-hover:gap-4 transition-all duration-300"
                >
                  احجز الآن
                  <ArrowLeft className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
