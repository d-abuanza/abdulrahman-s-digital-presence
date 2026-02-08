import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import coralCircle from "@/assets/coral-circle.png";
import concentricCircles from "@/assets/concentric-circles.png";

const services = [
  {
    title: "الاستشارات الاستراتيجية لإدارة الموارد البشرية",
    description: "تقديم حلول وخطط لتحسين أداء الموارد البشرية وفق أهداف العمل.",
  },
  {
    title: "تطوير ثقافة وبيئة العمل",
    description: "تحليل وتطوير ثقافة العمل لتحفيز الأداء المؤسسي.",
  },
  {
    title: "برامج تنمية القيادات والفرق",
    description: "ورش عمل لتطوير قيادات الفريق وأدائهم.",
  },
  {
    title: "إعادة هيكلة سياسات الموارد البشرية",
    description: "تحسين وضبط السياسات التنظيمية لضمان أفضل ممارسات.",
  },
  {
    title: "تحسين تجربة الموظفين",
    description: "طرق عملية لرفع ولاء الموظفين وتقليل معدل الاستقالات.",
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
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">الخدمات</h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        {/* Services Grid - Clean minimal design */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group bg-background rounded-2xl p-8 shadow-sm border border-primary/10 hover:border-accent/30 hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-xl md:text-2xl font-bold text-accent mb-4 leading-tight text-right">
                  {service.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed text-right">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer Prompt */}

      </div>
    </section>
  );
};

export default ServicesSection;
