import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Linkedin, ThumbsUp, MessageCircle, BookOpen, Download, Gift, ExternalLink } from "lucide-react";
import concentricCircles from "@/assets/concentric-circles.png";
import coralCircle from "@/assets/coral-circle.png";

// Placeholder LinkedIn posts - replace with real data later
const linkedInPosts = [
    {
        title: "5 خطوات لبناء ثقافة عمل قوية",
        excerpt: "مقتطف من المنشور الذي يتناول أهم الأساليب العملية لتحسين بيئة العمل.",
        url: "https://linkedin.com/posts/abdulrahman-alalwani/post1",
        likes: 245,
        comments: 18,
    },
    {
        title: "كيف تحافظ على أفضل الكفاءات في فريقك؟",
        excerpt: "استراتيجيات عملية لتقليل معدل الاستقالات وزيادة ولاء الموظفين.",
        url: "https://linkedin.com/posts/abdulrahman-alalwani/post2",
        likes: 312,
        comments: 24,
    },
    {
        title: "أخطاء شائعة في إدارة الموارد البشرية",
        excerpt: "تعرف على أهم الأخطاء التي يقع فيها مديرو الموارد البشرية وكيفية تجنبها.",
        url: "https://linkedin.com/posts/abdulrahman-alalwani/post3",
        likes: 428,
        comments: 35,
    },
];

// Placeholder books - replace with real data later
const booksForSale = [
    {
        title: "استراتيجيات الموارد البشرية",
        description: "كتاب عملي يحتوي على خطوات تنفيذية لتحسين أداء الموارد البشرية في مؤسستك.",
        price: "120 ريال",
    },
    {
        title: "القيادة الفعالة في بيئة العمل",
        description: "دليل شامل لتطوير مهاراتك القيادية وبناء فرق عمل عالية الأداء.",
        price: "150 ريال",
    },
    {
        title: "إدارة المواهب والاحتفاظ بالكفاءات",
        description: "استراتيجيات مجربة لجذب أفضل المواهب والحفاظ عليها في منظمتك.",
        price: "135 ريال",
    },
];

const DigitalLibrarySection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [email, setEmail] = useState("");

    const handleLeadMagnetDownload = (e: React.FormEvent) => {
        e.preventDefault();
        if (email && email.includes("@")) {
            alert(`شكراً! سيتم إرسال الكتاب المجاني إلى: ${email}`);
            setEmail("");
        }
    };

    return (
        <section
            id="library"
            ref={ref}
            className="relative py-24 lg:py-32 section-white overflow-hidden"
        >
            {/* Background decoration */}
            <img
                src={concentricCircles}
                alt=""
                className="absolute top-0 right-0 w-2/3 opacity-20 pointer-events-none translate-x-1/3 -translate-y-1/4"
            />

            <motion.img
                src={coralCircle}
                alt=""
                className="absolute bottom-32 left-10 w-24 h-24 opacity-40"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                        📚 المكتبة الرقمية
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        في هذا القسم ستجد كتبًا عملية، منشورات مختارة من LinkedIn، وكتابًا مجانيًا تحصل عليه عند إدخال بريدك الإلكتروني.
                    </p>
                    <div className="w-24 h-1 bg-accent mx-auto rounded-full mt-6" />
                </motion.div>

                {/* Block 1: LinkedIn Posts Preview */}
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex items-center gap-3 mb-8"
                    >
                        <div className="w-10 h-10 bg-[#0A66C2] rounded-lg flex items-center justify-center">
                            <Linkedin className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-primary">منشورات لينكدإن المختارة</h3>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {linkedInPosts.map((post, index) => (
                            <motion.a
                                key={post.title}
                                href={post.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 40 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                className="group bg-background rounded-2xl p-6 shadow-lg card-hover border-2 border-transparent hover:border-[#0A66C2]/20"
                            >
                                <div className="flex items-start gap-3 mb-4">
                                    <div className="w-10 h-10 bg-[#0A66C2] rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Linkedin className="w-5 h-5 text-white" />
                                    </div>
                                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors mr-auto" />
                                </div>

                                <h4 className="text-lg font-bold text-primary mb-3 leading-tight group-hover:text-accent transition-colors">
                                    {post.title}
                                </h4>

                                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                    <div className="flex items-center gap-1">
                                        <ThumbsUp className="w-3 h-3" />
                                        <span>{post.likes}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <MessageCircle className="w-3 h-3" />
                                        <span>{post.comments}</span>
                                    </div>
                                </div>

                                <div className="mt-4 pt-4 border-t border-border">
                                    <span className="text-accent font-medium text-sm group-hover:underline">
                                        عرض على LinkedIn ←
                                    </span>
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    {/* View All LinkedIn Posts */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="text-center mt-8"
                    >
                        <a
                            href="https://linkedin.com/in/abdulrahman-alalwani"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold group"
                        >
                            <Linkedin className="w-5 h-5" />
                            عرض جميع المنشورات
                            <ExternalLink className="w-4 h-4 group-hover:translate-x-[-4px] transition-transform" />
                        </a>
                    </motion.div>
                </div>

                {/* Block 2: Books for Purchase */}
                <div className="mb-20">
                    <motion.h3
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="text-2xl font-bold text-primary mb-8 flex items-center gap-3"
                    >
                        <span className="text-3xl">📘</span>
                        الكتب المتاحة للبيع
                    </motion.h3>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {booksForSale.map((book, index) => (
                            <motion.div
                                key={book.title}
                                initial={{ opacity: 0, y: 40 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                                className="group bg-background rounded-2xl p-6 shadow-lg card-hover"
                            >
                                {/* Book Cover Placeholder */}
                                <div className="w-full h-64 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl mb-6 flex items-center justify-center group-hover:from-accent/30 group-hover:to-primary/30 transition-all duration-300">
                                    <BookOpen className="w-16 h-16 text-accent/60" />
                                </div>

                                <h4 className="text-lg font-bold text-primary mb-3 leading-tight">
                                    📕 {book.title}
                                </h4>

                                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                                    {book.description}
                                </p>

                                <div className="flex items-center justify-between pt-4 border-t border-border">
                                    <span className="text-xl font-bold text-accent">{book.price}</span>
                                    <button className="bg-accent text-accent-foreground px-6 py-2.5 rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-accent/30 transition-all duration-300">
                                        شراء
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Block 3: Free Lead Magnet */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1.1 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="bg-gradient-to-l from-accent to-accent/90 rounded-3xl p-8 md:p-12 text-accent-foreground shadow-2xl relative overflow-hidden">
                        {/* Decorative elements */}
                        <motion.img
                            src={coralCircle}
                            alt=""
                            className="absolute top-0 right-0 w-32 h-32 opacity-20"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        />

                        <div className="flex flex-col lg:flex-row items-center gap-8 relative z-10">
                            {/* Icon */}
                            <div className="flex-shrink-0">
                                <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                                    <Gift className="w-16 h-16" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 text-center lg:text-right">
                                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                                    🎁 كتاب مجاني: دليل عملي في تحسين ثقافة العمل
                                </h3>
                                <p className="text-lg text-accent-foreground/90 mb-6">
                                    احصل على النسخة المجانية عند إدخال بريدك الإلكتروني. يحتوي الدليل على استراتيجيات عملية ونماذج جاهزة للتطبيق الفوري.
                                </p>

                                {/* Email Form */}
                                <form onSubmit={handleLeadMagnetDownload} className="flex flex-col sm:flex-row gap-4">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="📥 أدخل بريدك للحصول على النسخة المجانية"
                                        required
                                        className="flex-1 px-6 py-4 rounded-full text-primary text-right text-lg focus:outline-none focus:ring-2 focus:ring-white placeholder:text-primary/50"
                                        dir="rtl"
                                    />
                                    <button
                                        type="submit"
                                        className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold hover:shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap flex items-center justify-center gap-2"
                                    >
                                        <Download className="w-5 h-5" />
                                        تحميل الآن
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default DigitalLibrarySection;
