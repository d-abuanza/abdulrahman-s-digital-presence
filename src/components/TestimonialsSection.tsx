import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star, ArrowLeft } from "lucide-react";
import concentricCircles from "@/assets/concentric-circles.png";

const testimonials = [
  {
    name: "أحمد الغامدي",
    role: "مدير الموارد البشرية",
    company: "شركة تقنية رائدة",
    text: "عبدالرحمن قدم لنا رؤية استراتيجية غيرت طريقة تفكيرنا في إدارة رأس المال البشري. انخفض معدل الدوران لدينا بنسبة 35% خلال 6 أشهر فقط.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    result: "انخفاض 35% في معدل الدوران",
    service: "استشارات المنظمات",
  },
  {
    name: "سارة المحمد",
    role: "الرئيس التنفيذي",
    company: "منظمة غير ربحية",
    text: "ورش العمل التي قدمها كانت نقطة تحول لفريقنا. أسلوبه التفاعلي وخبرته العميقة جعلت التعلم ممتعاً وفعالاً. نتائج ملموسة من اليوم الأول.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    result: "تحسن 55% في رضا الفريق",
    service: "ورش العمل",
  },
  {
    name: "خالد العتيبي",
    role: "مؤسس ومدير تنفيذي",
    company: "شركة ناشئة",
    text: "بفضل استشارات عبدالرحمن، تمكنا من بناء ثقافة عمل تجذب أفضل الكفاءات. استثمار يستحق كل ريال. تضاعف عدد المتقدمين المؤهلين.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    result: "تضاعف المتقدمين المؤهلين",
    service: "الاستشارة الشخصية",
  },
  {
    name: "نورة الشمري",
    role: "مديرة التطوير المؤسسي",
    company: "شركة صناعية كبرى",
    text: "محاضراته ملهمة ومليئة بالأمثلة العملية. قدرته على ربط النظريات بالواقع تجعله متحدثاً استثنائياً. فريقنا متحمس للتغيير الآن.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    result: "انخراط 90% من الفريق",
    service: "المحاضرات والفعاليات",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative py-24 lg:py-32 section-white overflow-hidden"
    >
      {/* Background decoration */}
      <img
        src={concentricCircles}
        alt=""
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full opacity-20 pointer-events-none"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-lg font-medium mb-4 block">
            قصص نجاح حقيقية
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            ماذا يقول عملاؤنا
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            نتائج ملموسة حققها عملاؤنا بعد العمل معنا
          </p>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-card rounded-3xl p-8 shadow-lg card-hover relative"
            >
              <Quote className="absolute top-6 left-6 w-12 h-12 text-accent/20" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              
              <p className="text-lg text-foreground leading-relaxed mb-4 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Result Highlight */}
              <div className="bg-accent/10 rounded-lg px-4 py-2 inline-block mb-6">
                <span className="text-accent font-bold text-sm">✓ {testimonial.result}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-accent"
                  />
                  <div>
                    <h4 className="font-bold text-primary">{testimonial.name}</h4>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                    <p className="text-muted-foreground text-xs">{testimonial.company}</p>
                  </div>
                </div>
                <span className="text-xs text-accent font-medium bg-accent/5 px-3 py-1 rounded-full">
                  {testimonial.service}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card rounded-3xl p-8 shadow-lg relative"
          >
            <Quote className="absolute top-6 left-6 w-12 h-12 text-accent/20" />
            
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            
            <p className="text-lg text-foreground leading-relaxed mb-4 relative z-10">
              "{testimonials[currentIndex].text}"
            </p>

            <div className="bg-accent/10 rounded-lg px-4 py-2 inline-block mb-6">
              <span className="text-accent font-bold text-sm">✓ {testimonials[currentIndex].result}</span>
            </div>
            
            <div className="flex items-center gap-4">
              <img
                src={testimonials[currentIndex].avatar}
                alt={testimonials[currentIndex].name}
                className="w-14 h-14 rounded-full object-cover border-2 border-accent"
              />
              <div>
                <h4 className="font-bold text-primary">{testimonials[currentIndex].name}</h4>
                <p className="text-muted-foreground text-sm">{testimonials[currentIndex].role}</p>
                <p className="text-muted-foreground text-xs">{testimonials[currentIndex].company}</p>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-card shadow-md flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-card shadow-md flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          
          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? "bg-accent" : "bg-border"
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            انضم إلى +500 عميل حققوا نتائج استثنائية
          </p>
          <a
            href="#booking"
            className="btn-hero inline-flex items-center gap-2"
          >
            ابدأ قصة نجاحك
            <ArrowLeft className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
