import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Users, TrendingUp, Award, CheckCircle, ArrowLeft } from "lucide-react";
import concentricCircles from "@/assets/concentric-circles.png";
import coralCircle from "@/assets/coral-circle.png";

const stats = [
  { icon: Users, value: "+500", label: "عميل راضٍ" },
  { icon: TrendingUp, value: "+15", label: "سنة خبرة" },
  { icon: Award, value: "+50", label: "ورشة عمل" },
  { icon: Target, value: "+100", label: "مشروع ناجح" },
];

const achievements = [
  "قدت تحولات ثقافية في +50 منظمة سعودية",
  "درّبت +2000 قائد ومدير موارد بشرية",
  "معتمد من جهات دولية رائدة في المجال",
  "متحدث في أكبر المؤتمرات المتخصصة",
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
          <span className="text-accent text-lg font-medium mb-4 block">لماذا تختارني</span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">خبرة موثوقة، نتائج مثبتة</h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content with Authority Building */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-primary leading-relaxed">
              المستشار الذي تحتاجه لتحويل تحديات الموارد البشرية إلى فرص نمو
            </h3>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              على مدى 15 عاماً، ساعدت المنظمات على تجاوز تحديات دوران الموظفين، 
              ضعف الإنتاجية، وغياب الثقافة المؤسسية. النتيجة؟ فرق أكثر التزاماً، 
              وبيئات عمل تنافسية تجذب أفضل الكفاءات.
            </p>

            {/* Achievement List */}
            <ul className="space-y-3">
              {achievements.map((achievement, index) => (
                <motion.li
                  key={achievement}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3 text-foreground"
                >
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  {achievement}
                </motion.li>
              ))}
            </ul>

            {/* CTA - Authority to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="pt-6"
            >
              <a
                href="#booking"
                className="btn-hero inline-flex items-center gap-2"
              >
                هل منظمتك جاهزة للتحول؟
                <ArrowLeft className="w-5 h-5" />
              </a>
              <p className="text-sm text-muted-foreground mt-3">
                اكتشف ذلك في جلسة تقييم مجانية (30 دقيقة)
              </p>
            </motion.div>
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
