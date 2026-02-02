import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, FileText, Video, Download } from "lucide-react";
import concentricCircles from "@/assets/concentric-circles.png";
import coralCircle from "@/assets/coral-circle.png";

const products = [
  {
    icon: BookOpen,
    type: "كتاب إلكتروني",
    title: "دليل بناء ثقافة العمل",
    description: "دليل شامل لبناء ثقافة عمل إيجابية ومستدامة في منظمتك",
    price: "مجاني",
    isFree: true,
  },
  {
    icon: FileText,
    type: "قالب",
    title: "حقيبة الموارد البشرية",
    description: "مجموعة من القوالب والأدوات الجاهزة لإدارة الموارد البشرية",
    price: "99 ر.س",
    isFree: false,
  },
  {
    icon: Video,
    type: "دورة مسجلة",
    title: "أساسيات إدارة الفريق",
    description: "دورة مكثفة في أساسيات القيادة وإدارة الفرق بفعالية",
    price: "199 ر.س",
    isFree: false,
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
      
      <motion.img
        src={coralCircle}
        alt=""
        className="absolute top-32 right-20 w-20 h-20 opacity-40"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-lg font-medium mb-4 block">
            موارد تعليمية
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            المنتجات الرقمية
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              className="group bg-background rounded-3xl p-8 shadow-lg card-hover relative overflow-hidden"
            >
              {/* Free badge */}
              {product.isFree && (
                <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-bold">
                  مجاني
                </div>
              )}

              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                <product.icon className="w-8 h-8 text-accent" />
              </div>

              <span className="text-sm text-muted-foreground font-medium">
                {product.type}
              </span>
              
              <h3 className="text-2xl font-bold text-primary mt-2 mb-4">
                {product.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {product.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary">
                  {product.price}
                </span>
                <button className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-accent/30 transition-all duration-300">
                  <Download className="w-5 h-5" />
                  {product.isFree ? "تحميل" : "شراء"}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
