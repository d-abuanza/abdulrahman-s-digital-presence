import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { BookOpen, Download, Gift } from "lucide-react";
import concentricCircles from "@/assets/concentric-circles.png";

const booksForSale = [
    {
        title: "دليل بناء ثقافة العمل المستدامة",
        description: "كتاب شامل يغطي استراتيجيات بناء ثقافة عمل إيجابية ومؤثرة.",
        price: "99 ر.س",
    },
    {
        title: "القيادة الفعالة في الموارد البشرية",
        description: "دليل عملي لتطوير مهارات القيادة وإدارة الفرق بكفاءة.",
        price: "129 ر.س",
    },
    {
        title: "إدارة المواهب والاحتفاظ بالكفاءات",
        description: "استراتيجيات مجربة لجذب أفضل المواهب والحفاظ عليها.",
        price: "149 ر.س",
    },
];

const BooksSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [email, setEmail] = useState("");

    const handleLeadMagnetDownload = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            // In production, this would send to backend
            alert(`شكراً! سيتم إرسال الكتاب إلى: ${email}`);
            setEmail("");
        }
    };

    return (
        <section
            id="books"
            ref={ref}
            className="relative py-24 lg:py-32 section-white overflow-hidden"
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
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                        📚 كتب ومراجع – تحميل وشراء
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        في هذا القسم مكتبة كتب ومراجع تطبيقية في الموارد البشرية وبيئة العمل.
                    </p>
                    <div className="w-24 h-1 bg-accent mx-auto rounded-full mt-6" />
                </motion.div>

                {/* Books for Purchase */}
                <div className="mb-20">
                    <motion.h3
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-2xl font-bold text-primary mb-8 text-right"
                    >
                        الكتب المتاحة للشراء
                    </motion.h3>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {booksForSale.map((book, index) => (
                            <motion.div
                                key={book.title}
                                initial={{ opacity: 0, y: 40 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                className="group bg-background rounded-3xl p-8 shadow-lg card-hover flex flex-col"
                            >
                                {/* Book Cover Placeholder */}
                                <div className="w-full h-64 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl mb-6 flex items-center justify-center group-hover:from-accent/30 group-hover:to-primary/30 transition-all duration-300">
                                    <BookOpen className="w-20 h-20 text-accent/60" />
                                </div>

                                <h4 className="text-xl font-bold text-primary mb-3 leading-tight">
                                    📕 {book.title}
                                </h4>

                                <p className="text-muted-foreground mb-4 leading-relaxed flex-1">
                                    {book.description}
                                </p>

                                <div className="flex items-center justify-between pt-4 border-t border-border">
                                    <span className="text-2xl font-bold text-accent">{book.price}</span>
                                    <button className="bg-accent text-accent-foreground px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-accent/30 transition-all duration-300">
                                        شراء
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Free Lead Magnet */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="bg-gradient-to-l from-accent to-accent/90 rounded-3xl p-8 md:p-12 text-accent-foreground shadow-2xl">
                        <div className="flex flex-col lg:flex-row items-center gap-8">
                            {/* Icon */}
                            <div className="flex-shrink-0">
                                <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                                    <Gift className="w-16 h-16" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 text-center lg:text-right">
                                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                                    🎁 كتاب مجاني: دليل عملي في تحسين ثقافة العمل
                                </h3>
                                <p className="text-lg text-accent-foreground/90 mb-6">
                                    احصل على دليل شامل يتضمن استراتيجيات عملية ونماذج جاهزة لتحسين
                                    ثقافة العمل في منظمتك. مجاناً تماماً!
                                </p>

                                {/* Email Form */}
                                <form onSubmit={handleLeadMagnetDownload} className="flex flex-col sm:flex-row gap-4">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="أدخل بريدك الإلكتروني"
                                        required
                                        className="flex-1 px-6 py-4 rounded-full text-primary text-right text-lg focus:outline-none focus:ring-2 focus:ring-white"
                                        dir="rtl"
                                    />
                                    <button
                                        type="submit"
                                        className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold hover:shadow-lg transition-all duration-300 whitespace-nowrap flex items-center justify-center gap-2"
                                    >
                                        <Download className="w-5 h-5" />
                                        تحميل مجاني
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

export default BooksSection;
