import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

import concentricCircles from "@/assets/concentric-circles.png";

interface AboutSectionProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutSection = ({ isOpen, onClose }: AboutSectionProps) => {
  // Lock scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.section
          id="about"
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-xl overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Background decoration */}
          <img
            src={concentricCircles}
            alt=""
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full opacity-20 pointer-events-none"
          />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="fixed top-6 left-6 z-50 w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg"
            aria-label="إغلاق"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Content Container */}
          <motion.div
            className="container mx-auto px-4 py-20 relative z-10 max-w-5xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              {/* Portrait */}
              <motion.div
                className="flex-shrink-0"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-accent/20 blur-3xl" />
                  <img
                    src="/alawani-photo.jfif"
                    alt="عبدالرحمن العلوني"
                    className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full shadow-2xl relative z-10"
                  />
                </div>
              </motion.div>

              {/* Text Content */}
              <motion.div
                className="flex-1 text-center lg:text-right"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                  من أنا
                </h2>
                <div className="w-24 h-1 bg-accent mx-auto lg:mr-0 rounded-full mb-8" />

                <div className="space-y-6 text-lg md:text-xl text-foreground leading-relaxed">
                  <p>
                    <span className="font-bold text-accent">عبدالرحمن العلوني</span>،
                    قائد في مجال الموارد البشرية، أعمل على تمكين المواهب ودفع عجلة النجاح المؤسسي.
                  </p>

                  <p>
                    بخبرة عملية تمتد لأكثر من <span className="font-semibold">12 عامًا</span> في مجال الموارد البشرية،
                    طورت فهمًا عميقًا لمواءمة استراتيجيات الأفراد مع أهداف الأعمال. نهجي يعزز
                    <span className="font-semibold text-primary"> ثقافة الأداء العالي</span> مع ضمان رفاهية الموظفين ومشاركتهم الفعّالة.
                  </p>



                  <p className="text-muted-foreground italic border-r-4 border-accent pr-4">
                    "كل تحدٍ هو فرصة للابتكار وإنشاء حلول موارد بشرية مؤثرة. تركيزي على إطلاق الإمكانات الكاملة لرأس المال البشري لدفع النمو المستدام وبناء منظمات رشيقة ومستعدة للمستقبل."
                  </p>

                  <p className="font-semibold text-primary text-2xl">
                    دعني أساعدك في تحقيق هذا التحول.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default AboutSection;
