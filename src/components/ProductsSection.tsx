import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, FileText, Video, Download, ArrowLeft, Star } from "lucide-react";
import concentricCircles from "@/assets/concentric-circles.png";
const products = [
  {
    icon: BookOpen,
    type: "كتاب إلكتروني",
    title: "دليل بناء ثقافة العمل",
    description: "دليل شامل لبناء ثقافة عمل إيجابية ومستدامة في منظمتك مع أدوات وقوالب جاهزة",
    price: "مجاني",
    originalPrice: null,
    isFree: true,
    badge: "الأكثر تحميلاً",
    downloads: "+2,500",
    upsell: "ترغب في تطبيق هذه الاستراتيجيات؟ احجز استشارة",
  },
  {
    icon: FileText,
    type: "حقيبة أدوات",
    title: "حقيبة الموارد البشرية الشاملة",
    description: "مجموعة من +50 قالب وأداة جاهزة لإدارة الموارد البشرية: تقييم، توظيف، تطوير",
    price: "99 ر.س",
    originalPrice: "199 ر.س",
    isFree: false,
    badge: "خصم 50%",
    downloads: "+800",
    upsell: "تحتاج مساعدة في التطبيق؟ احجز ورشة مخصصة",
  },
  {
    icon: Video,
    type: "دورة مسجلة",
    title: "أساسيات إدارة الفريق الفعال",
    description: "دورة مكثفة في +8 ساعات تغطي أساسيات القيادة وإدارة الفرق مع تمارين عملية",
    price: "199 ر.س",
    originalPrice: "399 ر.س",
    isFree: false,
    badge: "الأعلى تقييماً",
    downloads: "+500",
    upsell: "تريد تدريباً مخصصاً لفريقك؟ تواصل معنا",
  },
];

const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="products"
      ref={ref}
      className="relative py-24 lg:py-32 section-cream overflow-hidden"
    >
      {/* Background decoration */}
      <img
        src={concentricCircles}
        alt=""
        className="absolute bottom-0 left-0 w-2/3 opacity-25 pointer-events-none -translate-x-1/3 translate-y-1/4"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-lg font-medium mb-4 block">
            ابدأ التعلم الآن
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            المنتجات الرقمية
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            موارد تعليمية عملية تساعدك على تطبيق أفضل الممارسات فوراً
          </p>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              className="group bg-background rounded-3xl p-8 shadow-lg card-hover relative overflow-hidden flex flex-col"
            >
              {/* Badge */}
              <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-bold">
                {product.badge}
              </div>

              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                <product.icon className="w-8 h-8 text-accent" />
              </div>

              <span className="text-sm text-muted-foreground font-medium">
                {product.type}
              </span>
              
              <h3 className="text-2xl font-bold text-primary mt-2 mb-4">
                {product.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed flex-1">
                {product.description}
              </p>

              {/* Social Proof */}
              <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Download className="w-4 h-4" />
                  {product.downloads} تحميل
                </span>
                <span className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-accent text-accent" />
                  4.9
                </span>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border mb-4">
                <div>
                  <span className="text-2xl font-bold text-primary">
                    {product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-muted-foreground line-through mr-2 text-sm">
                      {product.originalPrice}
                    </span>
                  )}
                </div>
                <button className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-accent/30 transition-all duration-300">
                  <Download className="w-5 h-5" />
                  {product.isFree ? "تحميل" : "شراء"}
                </button>
              </div>

              {/* Upsell */}
              <a
                href="#booking"
                className="text-sm text-center text-accent hover:underline transition-all duration-300"
              >
                {product.upsell} →
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bundle Offer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 bg-gradient-to-l from-accent to-accent/90 rounded-3xl p-8 md:p-12 text-accent-foreground"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="bg-white/20 px-4 py-1 rounded-full text-sm font-bold mb-4 inline-block">
                عرض خاص
              </span>
              <h4 className="text-2xl md:text-3xl font-bold mb-2">
                احصل على الحزمة الكاملة بخصم 40%
              </h4>
              <p className="text-accent-foreground/90">
                جميع المنتجات الرقمية + جلسة استشارية مجانية (60 دقيقة)
              </p>
            </div>
            <div className="text-center">
              <div className="text-sm line-through opacity-70 mb-1">598 ر.س</div>
              <div className="text-4xl font-bold mb-2">359 ر.س</div>
              <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold hover:shadow-lg transition-all duration-300 whitespace-nowrap">
                اشترِ الحزمة
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
