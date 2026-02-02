import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Users, TrendingUp, Award } from "lucide-react";
import concentricCircles from "@/assets/concentric-circles.png";
import coralCircle from "@/assets/coral-circle.png";

const stats = [
  { icon: Users, value: "+500", label: "عميل راضٍ" },
  { icon: TrendingUp, value: "+15", label: "سنة خبرة" },
  { icon: Award, value: "+50", label: "ورشة عمل" },
  { icon: Target, value: "+100", label: "مشروع ناجح" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 lg:py-32 section-white overflow-hidden"
    >
      {/* Background decoration */}
      <img
        src={concentricCircles}
        alt=""
        className="absolute -top-1/2 -left-1/4 w-full opacity-20 pointer-events-none"
      />
      
      <motion.img
        src={coralCircle}
        alt=""
        className="absolute top-20 right-10 w-20 h-20 opacity-40"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-lg font-medium mb-4 block">تعرف علي</span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">من أنا؟</h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-primary leading-relaxed">
              خبير استراتيجي في الموارد البشرية وبناء ثقافة العمل المؤسسية
            </h3>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              أعمل على تمكين المنظمات من تحقيق أهدافها الاستراتيجية من خلال تطوير رأس المال البشري
              وبناء بيئات عمل محفزة ومنتجة. أؤمن بأن الموظف السعيد هو أساس نجاح أي منظمة.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              خلال مسيرتي المهنية، ساهمت في تطوير استراتيجيات الموارد البشرية لعشرات المنظمات
              في القطاعين العام والخاص بالمملكة العربية السعودية، مع التركيز على التحول الرقمي
              وتطوير القيادات والكفاءات الوطنية.
            </p>

            <div className="pt-4">
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero inline-block"
              >
                دعنا نتحدث
              </a>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-card p-8 rounded-2xl shadow-lg card-hover text-center"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-accent" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
