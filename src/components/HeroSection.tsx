import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import concentricCircles from "@/assets/concentric-circles.png";
const jobTitles = [
  "مستشار موارد بشرية",
  "خبير ثقافة وبيئة العمل"
];

const HeroSection = () => {
  const [currentTitle, setCurrentTitle] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000; // Pause before deleting

    const timer = setTimeout(() => {
      const fullTitle = jobTitles[titleIndex];

      if (!isDeleting && charIndex < fullTitle.length) {
        // Typing forward
        setCurrentTitle(fullTitle.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (!isDeleting && charIndex === fullTitle.length) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && charIndex > 0) {
        // Deleting
        setCurrentTitle(fullTitle.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (isDeleting && charIndex === 0) {
        // Move to next title
        setIsDeleting(false);
        setTitleIndex((titleIndex + 1) % jobTitles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, titleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <img
          src={concentricCircles}
          alt=""
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] max-w-none opacity-40 animate-spin-slow"
          style={{ animationDuration: "120s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
          {/* Profile Image - blended with background */}
          <motion.div
            className="flex-1 flex justify-center mt-20 lg:mt-0 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Colored overlay behind image to neutralize gray background */}
              <div
                className="absolute inset-0 rounded-full"
                style={{ backgroundColor: "#FCFAF8", filter: "blur(40px)", transform: "scale(0.85)" }}
              />
              <img
                src="/hero-4k.png"
                alt="عبدالرحمن العلوني"
                className="relative w-80 md:w-[28rem] lg:w-[36rem] h-auto object-contain mix-blend-multiply"
                style={{
                  maskImage: "radial-gradient(ellipse 85% 90% at 50% 35%, black 55%, transparent 90%)",
                  WebkitMaskImage: "radial-gradient(ellipse 85% 90% at 50% 35%, black 55%, transparent 90%)",
                }}
              />
            </div>
          </motion.div>

          {/* Text Content - Now on the left */}
          <motion.div
            className="flex-1 text-center lg:text-right"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              أهلاً بك
              <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-accent mt-2">
                عبدالرحمن العلوني
              </span>
            </motion.h1>

            {/* Typing Animation - right-aligned under the name (use start in RTL) */}
            <motion.div
              className="min-h-[80px] flex items-center justify-center lg:justify-start mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground text-right">
                {currentTitle}
                <span className="text-accent animate-pulse">|</span>
              </h2>
            </motion.div>

            {/* Description Text */}
            <motion.p
              className="text-lg md:text-xl text-muted-foreground/90 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              أساعدك في بناء ثقافة أداء عالية وبيئة عمل محفزة، من خلال استراتيجيات عملية تعزز مشاركة الموظفين وتدفع النمو المستدام للمنظمات.
            </motion.p>

            {/* Primary CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <a
                href="/contact"
                className="btn-hero group relative overflow-hidden inline-block"
              >
                <span className="relative z-10">استشارة مجانية</span>
                <span className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
