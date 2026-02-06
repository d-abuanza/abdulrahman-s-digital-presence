import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, ArrowLeft, BookOpen } from "lucide-react";
import coralCircle from "@/assets/coral-circle.png";

const articles = [
  {
    title: "كيف تبني ثقافة عمل إيجابية في منظمتك",
    excerpt:
      "اكتشف الخطوات العملية لبناء بيئة عمل محفزة تعزز الإنتاجية وتحافظ على الكفاءات",
    date: "15 يناير 2026",
    category: "ثقافة العمل",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
    relatedService: "استشارات المنظمات",
    ctaText: "تريد بناء ثقافة عمل قوية؟",
  },
  {
    title: "مستقبل الموارد البشرية في ظل التحول الرقمي",
    excerpt:
      "كيف يمكن للتقنية أن تحول إدارة الموارد البشرية وتجعلها أكثر كفاءة وفعالية",
    date: "8 يناير 2026",
    category: "التحول الرقمي",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
    relatedService: "ورش العمل",
    ctaText: "درّب فريقك على التحول الرقمي",
  },
  {
    title: "القيادة الفعالة في عصر التغيير",
    excerpt:
      "تعلم كيف تكون قائداً ملهماً يستطيع قيادة فريقه خلال التحديات والتغييرات",
    date: "1 يناير 2026",
    category: "القيادة",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
    relatedService: "التدريب التنفيذي",
    ctaText: "طوّر مهاراتك القيادية",
  },
];

const BlogSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="blog"
      ref={ref}
      className="relative py-24 lg:py-32 section-white overflow-hidden"
    >
      {/* Decorative elements */}
      <motion.img
        src={coralCircle}
        alt=""
        className="absolute top-20 left-20 w-16 h-16 opacity-40"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src={coralCircle}
        alt=""
        className="absolute bottom-40 right-10 w-24 h-24 opacity-30"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-lg font-medium mb-4 block">أفكار ورؤى عملية</span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">المقالات</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            مقالات متخصصة تساعدك على فهم تحديات الموارد البشرية والقيادة بشكل أعمق
          </p>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              className="group bg-card rounded-3xl overflow-hidden shadow-lg card-hover flex flex-col"
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-sm font-medium">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                  <Calendar className="w-4 h-4" />
                  {article.date}
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-3 line-clamp-2 group-hover:text-accent transition-colors duration-300">
                  {article.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-3 flex-1">
                  {article.excerpt}
                </p>
                
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-accent font-semibold group-hover:gap-4 transition-all duration-300 mb-4"
                >
                  اقرأ المزيد
                  <ArrowLeft className="w-5 h-5" />
                </a>

                {/* Contextual CTA */}
                <div className="pt-4 border-t border-border">
                  <a
                    href="#booking"
                    className="flex items-center justify-between text-sm bg-accent/5 hover:bg-accent/10 rounded-lg p-3 transition-colors duration-300"
                  >
                    <span className="text-foreground font-medium">{article.ctaText}</span>
                    <ArrowLeft className="w-4 h-4 text-accent" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a href="#" className="btn-hero-outline inline-flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            جميع المقالات
          </a>
        </motion.div>

        {/* Lead Magnet */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-16 bg-gradient-to-l from-primary to-primary/90 rounded-3xl p-8 md:p-12 text-primary-foreground"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-2xl md:text-3xl font-bold mb-2">
                احصل على دليل بناء ثقافة العمل مجاناً
              </h4>
              <p className="text-primary-foreground/80">
                كتاب إلكتروني شامل مع خطوات عملية قابلة للتطبيق فوراً
              </p>
            </div>
            <a
              href="#products"
              className="bg-accent text-accent-foreground px-8 py-4 rounded-full font-bold hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 whitespace-nowrap"
            >
              حمّل الآن مجاناً
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
