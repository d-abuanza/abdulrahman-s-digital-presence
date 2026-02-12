import { motion } from "framer-motion";

import concentricCircles from "@/assets/concentric-circles.png";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative py-20 md:py-28 overflow-hidden scroll-mt-24"
    >
      {/* Background decoration */}
      <img
        src={concentricCircles}
        alt=""
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl opacity-20 pointer-events-none"
      />

      {/* Content Container */}
      <motion.div
        className="container mx-auto px-4 relative z-10 max-w-5xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Portrait */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <img
              src="/about-photo.png"
              alt="عبدالرحمن العلوني"
              className="w-56 md:w-72 lg:w-80 h-auto object-contain drop-shadow-lg"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-right"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              من أنا
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto lg:mr-0 rounded-full mb-8" />

            <div className="space-y-6 text-lg md:text-xl text-foreground leading-relaxed">
              <p>
                <span className="font-bold text-accent">عبدالرحمن العلوني</span>
                ، قائد في مجال الموارد البشرية، أعمل على تمكين المواهب ودفع عجلة
                النجاح المؤسسي.
              </p>

              <p>
                بخبرة عملية تمتد لأكثر من{" "}
                <span className="font-semibold">12 عامًا</span> في مجال الموارد
                البشرية، طورت فهمًا عميقًا لمواءمة استراتيجيات الأفراد مع أهداف
                الأعمال. نهجي يعزز
                <span className="font-semibold text-primary">
                  {" "}
                  ثقافة الأداء العالي
                </span>{" "}
                مع ضمان رفاهية الموظفين ومشاركتهم الفعّالة.
              </p>

              <p className="text-muted-foreground italic border-r-4 border-accent pr-4">
                &quot;كل تحدٍ هو فرصة للابتكار وإنشاء حلول موارد بشرية مؤثرة.
                تركيزي على إطلاق الإمكانات الكاملة لرأس المال البشري لدفع النمو
                المستدام وبناء منظمات رشيقة ومستعدة للمستقبل.&quot;
              </p>

              <p className="font-semibold text-primary text-2xl">
                دعني أساعدك في تحقيق هذا التحول.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
