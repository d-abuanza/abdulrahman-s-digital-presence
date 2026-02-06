import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Users, Clock, Award, ArrowLeft } from "lucide-react";
import coralCircle from "@/assets/coral-circle.png";

const results = [
  {
    metric: "40%",
    label: "تحسن في رضا الموظفين",
    description: "متوسط الزيادة في استبيانات رضا الموظفين بعد تطبيق استراتيجياتنا",
    icon: Users,
  },
  {
    metric: "60%",
    label: "انخفاض في معدل الدوران",
    description: "تقليل ملموس في نسبة استقالات الموظفين خلال السنة الأولى",
    icon: TrendingUp,
  },
  {
    metric: "90 يوم",
    label: "لنتائج ملموسة",
    description: "الإطار الزمني المتوقع لرؤية تحسينات واضحة في بيئة العمل",
    icon: Clock,
  },
  {
    metric: "95%",
    label: "رضا العملاء",
    description: "نسبة العملاء الذين يوصون بخدماتنا للآخرين",
    icon: Award,
  },
];

const caseStudies = [
  {
    company: "شركة تقنية ناشئة",
    challenge: "معدل دوران 45% وصعوبة في جذب الكفاءات",
    result: "انخفض الدوران إلى 12% وتضاعف عدد المتقدمين المؤهلين",
    timeline: "6 أشهر",
  },
  {
    company: "منظمة غير ربحية",
    challenge: "ضعف التنسيق بين الفرق وانخفاض الروح المعنوية",
    result: "تحسن رضا الموظفين بنسبة 55% وزيادة الإنتاجية 30%",
    timeline: "4 أشهر",
  },
  {
    company: "شركة صناعية كبرى",
    challenge: "مقاومة التغيير وغياب ثقافة مؤسسية واضحة",
    result: "تحول ثقافي شامل مع انخراط 85% من القيادات",
    timeline: "12 شهر",
  },
];

const ResultsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="results"
      ref={ref}
      className="relative py-24 lg:py-32 section-white overflow-hidden"
    >
      {/* Decorative elements */}
      <motion.img
        src={coralCircle}
        alt=""
        className="absolute top-32 left-20 w-20 h-20 opacity-30"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src={coralCircle}
        alt=""
        className="absolute bottom-20 right-10 w-28 h-28 opacity-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-lg font-medium mb-4 block">نتائج حقيقية، ليست وعوداً</span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">التحولات التي نحققها معاً</h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {results.map((result, index) => (
            <motion.div
              key={result.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-lg text-center card-hover"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <result.icon className="w-7 h-7 text-accent" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                {result.metric}
              </div>
              <div className="text-lg font-bold text-primary mb-2">{result.label}</div>
              <p className="text-sm text-muted-foreground">{result.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Case Studies */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-primary text-center mb-10">
            قصص نجاح من عملائنا
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.company}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.15 }}
                className="bg-card rounded-2xl p-6 shadow-lg border-r-4 border-accent"
              >
                <h4 className="font-bold text-primary mb-3">{study.company}</h4>
                
                <div className="space-y-3">
                  <div>
                    <span className="text-xs text-accent font-semibold uppercase tracking-wide">التحدي</span>
                    <p className="text-sm text-muted-foreground">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <span className="text-xs text-accent font-semibold uppercase tracking-wide">النتيجة</span>
                    <p className="text-sm text-foreground font-medium">{study.result}</p>
                  </div>
                  
                  <div className="pt-2 border-t border-border">
                    <span className="text-xs text-muted-foreground">المدة: {study.timeline}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="text-center"
        >
          <p className="text-lg text-muted-foreground mb-6">
            هل ترغب في تحقيق نتائج مماثلة لمنظمتك؟
          </p>
          <a
            href="#booking"
            className="btn-hero inline-flex items-center gap-2"
          >
            ابدأ رحلة التحول
            <ArrowLeft className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsSection;
