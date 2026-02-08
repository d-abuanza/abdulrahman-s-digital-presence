import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin } from "lucide-react";
import concentricCircles from "@/assets/concentric-circles.png";
import coralCircle from "@/assets/coral-circle.png";

const contactMethods = [
  {
    icon: Mail,
    label: "البريد الإلكتروني",
    href: "mailto:abdulrahmn.alalwani@gmail.com",
  },
  {
    icon: Linkedin,
    label: "لينكدإن",
    href: "https://linkedin.com/in/abdulrahman-alalwani",
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-24 lg:py-32 section-cream overflow-hidden"
    >
      {/* Background decoration */}
      <img
        src={concentricCircles}
        alt=""
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full opacity-20 pointer-events-none"
      />

      <motion.img
        src={coralCircle}
        alt=""
        className="absolute top-20 left-10 w-24 h-24 opacity-40"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            هل أنت مستعد للخطوة التالية؟
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            يسعدني التواصل معك لدعمك في مشاريع الموارد البشرية وثقافة العمل بإستراتيجية واضحة.
          </p>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Contact Methods */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.label}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group bg-background rounded-3xl p-8 shadow-lg card-hover text-center min-w-[280px] flex-1 max-w-[350px]"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                  <method.icon className="w-8 h-8 text-accent" />
                </div>

                <h3 className="text-lg font-bold text-primary mb-2">
                  {method.label}
                </h3>
              </motion.a>
            ))}
          </div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-primary text-primary-foreground rounded-3xl p-8 md:p-12 text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              جاهز لبدء التحول؟
            </h3>
            <p className="text-lg text-primary-foreground/90 mb-6">
              احجز استشارتك المجانية الآن ودعنا نناقش كيف يمكنني مساعدتك.
            </p>
            <a
              href={contactMethods[0].href} // Email link
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-accent/30 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              تواصل عبر البريد الإلكتروني
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
