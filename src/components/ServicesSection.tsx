import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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

        {/* Services Grid – text-only, typography-driven */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.12 + index * 0.07 }}
                className="group relative rounded-2xl bg-background border border-primary/8 shadow-sm hover:shadow-lg hover:border-primary/15 transition-all duration-300 overflow-hidden"
              >
                <div className="relative p-8 lg:p-10 text-right">
                  <h3 className="text-xl md:text-2xl font-bold text-accent leading-tight mb-3">
                    {service.title}
                  </h3>
                  {/* Accent underline – grows on hover */}
                  <div
                    className="h-0.5 w-12 bg-accent rounded-full mb-5 opacity-80 group-hover:w-20 transition-all duration-300"
                    aria-hidden
                  />
                  <p className="text-foreground leading-relaxed text-base">
                    {service.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Footer Prompt */}

      </div>
    </section>
  );
};

export default ServicesSection;
