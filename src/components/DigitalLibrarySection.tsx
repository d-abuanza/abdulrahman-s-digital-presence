import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import concentricCircles from "@/assets/concentric-circles.png";
import coralCircle from "@/assets/coral-circle.png";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const LINKEDIN_TAB = "linkedin";
const BOOKS_TAB = "books";

const DOWNLOAD_NOTIFY_EMAIL = "diaaabuanza7@gmail.com";
const downloadNotifyEndpoint = import.meta.env.VITE_DOWNLOAD_NOTIFY_ENDPOINT as string | undefined;

const linkedInPosts: {
    title: string;
    excerpt: string;
    url: string;
    coverImage?: string;
    postPagePath?: string;
    pdfUrl?: string;
}[] = [
    {
        title: "أكثر من 63% من الموظفين يغادرون لأن الرواتب أقل من توقعاتهم",
        excerpt: "الراتب لم يعد مجرد رقم بل رسالة مباشرة من الشركة تقول فيها للموظف: «أنت تستحق.» وعندما تكون هذه الرسالة ضعيفة، فإن أقوى المواهب تردّ عليها بالاستقالة.",
        url: "https://linkedin.com/in/abdulrahman-alalwani",
        coverImage: "/first-post/post1_pages-to-jpg-0001.jpg",
        postPagePath: "/library/post/1",
        pdfUrl: "/post1.pdf",
    },
    {
        title: "5 خطوات لبناء ثقافة عمل قوية",
        excerpt: "مقتطف من المنشور الذي يتناول أهم الأساليب العملية لتحسين بيئة العمل.",
        url: "https://linkedin.com/in/abdulrahman-alalwani",
    },
    {
        title: "كيف تحافظ على أفضل الكفاءات في فريقك؟",
        excerpt: "استراتيجيات عملية لتقليل معدل الاستقالات وزيادة ولاء الموظفين.",
        url: "https://linkedin.com/in/abdulrahman-alalwani",
    },
    {
        title: "أخطاء شائعة في إدارة الموارد البشرية",
        excerpt: "تعرف على أهم الأخطاء التي يقع فيها مديرو الموارد البشرية وكيفية تجنبها.",
        url: "https://linkedin.com/in/abdulrahman-alalwani",
    },
];

const booksForSale = [
    {
        title: "دليل القادة لبناء بيئة عمل إيجابية",
        description: "خارطة طريق عملية تساعدك على بناء بيئة مؤسسية صحية، وتحوّلك من قائدٍ مشغول بالمهام إلى قائدٍ يُلهم ويؤثّر ويصنع فارقًا في منظمته. أدوات عملية، نماذج واقعية، والركائز السبع لبيئة عمل إيجابية.",
        price: "19$",
        url: "https://alalwani.gumroad.com/l/positiveleader",
    },
];

const DigitalLibrarySection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [activeTab, setActiveTab] = useState<typeof LINKEDIN_TAB | typeof BOOKS_TAB>(LINKEDIN_TAB);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [guideDownloadOpen, setGuideDownloadOpen] = useState(false);
    const [guideDownloadEmail, setGuideDownloadEmail] = useState("");
    const [guideDownloadSubmitting, setGuideDownloadSubmitting] = useState(false);
    const [guideDownloadPost, setGuideDownloadPost] = useState<typeof linkedInPosts[0] | null>(null);

    const LEAD_MAGNET_FROM_EMAIL = "diaaabuanza7@gmail.com";
    const leadMagnetEndpoint = import.meta.env.VITE_LEAD_MAGNET_ENDPOINT as string | undefined;

    const handleLeadMagnetDownload = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim() || !email.trim() || !email.includes("@")) return;
        setIsSubmitting(true);
        setSubmitSuccess(false);
        try {
            if (leadMagnetEndpoint) {
                const res = await fetch(leadMagnetEndpoint, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        name: name.trim(),
                        email: email.trim(),
                        fromEmail: LEAD_MAGNET_FROM_EMAIL,
                    }),
                });
                if (!res.ok) throw new Error("Submit failed");
            }
            setSubmitSuccess(true);
            setName("");
            setEmail("");
        } catch {
            setSubmitSuccess(true);
            setName("");
            setEmail("");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleGuideDownloadSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!guideDownloadPost || !guideDownloadEmail.trim() || !guideDownloadEmail.includes("@")) return;
        setGuideDownloadSubmitting(true);
        try {
            if (downloadNotifyEndpoint) {
                await fetch(downloadNotifyEndpoint, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify({
                        email: guideDownloadEmail.trim(),
                        guideTitle: guideDownloadPost.title,
                        notifyEmail: DOWNLOAD_NOTIFY_EMAIL,
                        message: `This email address has downloaded [${guideDownloadPost.title}].`,
                    }),
                });
            }
            const link = document.createElement("a");
            link.href = guideDownloadPost.pdfUrl ?? "/post1.pdf";
            link.download = "دليل-رواتب.pdf";
            link.rel = "noopener";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            setGuideDownloadOpen(false);
            setGuideDownloadEmail("");
            setGuideDownloadPost(null);
        } finally {
            setGuideDownloadSubmitting(false);
        }
    };

    return (
        <section
            id="library"
            ref={ref}
            className="relative py-24 lg:py-32 section-white overflow-hidden"
        >
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
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                        المكتبة الرقمية
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        منشورات مختارة من لينكدإن، كتب عملية، وكتاب مجاني عند إدخال بريدك.
                    </p>
                    <div className="w-24 h-1 bg-accent mx-auto rounded-full mt-6" />
                </motion.div>

                {/* Tabs – text only */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="flex justify-center gap-1 p-1.5 bg-primary/5 rounded-2xl max-w-md mx-auto mb-12"
                >
                    <button
                        type="button"
                        onClick={() => setActiveTab(LINKEDIN_TAB)}
                        className={`flex-1 py-3 px-6 rounded-xl font-semibold text-lg transition-all duration-300 ${
                            activeTab === LINKEDIN_TAB
                                ? "bg-background text-primary shadow-sm"
                                : "text-muted-foreground hover:text-primary"
                        }`}
                    >
                        منشورات لينكدإن
                    </button>
                    <button
                        type="button"
                        onClick={() => setActiveTab(BOOKS_TAB)}
                        className={`flex-1 py-3 px-6 rounded-xl font-semibold text-lg transition-all duration-300 ${
                            activeTab === BOOKS_TAB
                                ? "bg-background text-primary shadow-sm"
                                : "text-muted-foreground hover:text-primary"
                        }`}
                    >
                        الكتب
                    </button>
                </motion.div>

                {/* LinkedIn content */}
                {activeTab === LINKEDIN_TAB && (
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35 }}
                        className="mb-16"
                    >
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {linkedInPosts.map((post, index) => (
                                <motion.article
                                    key={post.title}
                                    initial={{ opacity: 0, y: 24 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.4, delay: index * 0.08 }}
                                    className="group bg-background rounded-2xl border border-primary/10 shadow-md hover:shadow-xl hover:border-primary/15 overflow-hidden transition-all duration-300"
                                >
                                    {/* Cover: first-post image or LinkedIn strip */}
                                    {post.coverImage ? (
                                        <div className="aspect-[3/4] max-h-52 overflow-hidden bg-muted/30 border-b border-border">
                                            <img
                                                src={post.coverImage}
                                                alt=""
                                                className="w-full h-full object-cover object-top"
                                            />
                                        </div>
                                    ) : (
                                        <div className="h-28 bg-gradient-to-br from-[#0A66C2]/90 to-[#0A66C2]/70" />
                                    )}
                                    <div className="p-6 text-right">
                                        <h3 className="text-lg font-bold text-primary mb-3 leading-tight group-hover:text-accent transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex flex-wrap gap-3">
                                            {post.postPagePath ? (
                                                <Link
                                                    to={post.postPagePath}
                                                    className="inline-block px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors"
                                                >
                                                    قراءة المزيد
                                                </Link>
                                            ) : (
                                                <a
                                                    href={post.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-block px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors"
                                                >
                                                    قراءة المزيد
                                                </a>
                                            )}
                                            {post.pdfUrl && (
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        setGuideDownloadPost(post);
                                                        setGuideDownloadOpen(true);
                                                    }}
                                                    className={cn(
                                                        "inline-block px-5 py-2.5 rounded-full font-medium text-sm",
                                                        "bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
                                                    )}
                                                >
                                                    تحميل الدليل
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                        <p className="text-center mt-8">
                            <a
                                href="https://linkedin.com/in/abdulrahman-alalwani"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-accent font-semibold hover:underline"
                            >
                                عرض جميع المنشورات
                            </a>
                        </p>
                    </motion.div>
                )}

                {/* Books content – single book, reduced card size, centered */}
                {activeTab === BOOKS_TAB && (
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35 }}
                        className="mb-16 flex justify-center"
                    >
                        <div className="w-full max-w-sm">
                            {booksForSale.map((book, index) => (
                                <motion.article
                                    key={book.title}
                                    initial={{ opacity: 0, y: 24 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.4, delay: index * 0.08 }}
                                    className="group bg-background rounded-xl border border-primary/10 shadow-md hover:shadow-xl hover:border-primary/15 overflow-hidden transition-all duration-300"
                                >
                                    <div className="w-full aspect-[3/4] max-h-56 bg-gradient-to-br from-accent/15 via-primary/10 to-accent/20 group-hover:from-accent/25 group-hover:to-primary/15 transition-colors duration-300" />
                                    <div className="p-4 text-right">
                                        <h3 className="text-base font-bold text-primary mb-2 leading-tight">
                                            {book.title}
                                        </h3>
                                        <p className="text-muted-foreground text-xs leading-relaxed mb-4 line-clamp-3">
                                            {book.description}
                                        </p>
                                        <div className="flex items-center justify-between gap-3 pt-3 border-t border-border">
                                            <span className="text-lg font-bold text-accent">{book.price}</span>
                                            <a
                                                href={book.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-4 py-2 rounded-lg bg-accent text-accent-foreground font-semibold text-sm hover:shadow-lg hover:shadow-accent/25 transition-all inline-block"
                                            >
                                                شراء
                                            </a>
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Free lead magnet – name + email, then book sent to that email (from diaaabuanza7@gmail.com) */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="bg-primary rounded-3xl p-8 md:p-12 text-primary-foreground shadow-2xl relative overflow-hidden">
                        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 relative z-10 items-center">
                            {/* Form side – first in DOM so it appears on the right in RTL */}
                            <div className="w-full lg:max-w-md flex-shrink-0">
                                <h3 className="text-xl font-semibold text-accent mb-1">
                                    تحميل مجاني
                                </h3>
                                <h4 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                                    دليلك المبسط إلى كشف المشكلات الصامتة التي تعيق الولاء والإنتاجية
                                </h4>
                                {submitSuccess ? (
                                    <p className="text-lg text-primary-foreground/95">
                                        شكراً! تم إرسال رابط التحميل إلى بريدك الإلكتروني. راجع صندوق الوارد (أو البريد المزعج) من{" "}
                                        <span className="font-medium">{LEAD_MAGNET_FROM_EMAIL}</span>.
                                    </p>
                                ) : (
                                    <form onSubmit={handleLeadMagnetDownload} className="space-y-4">
                                        <input
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="الاسم"
                                            required
                                            className="w-full px-5 py-3.5 rounded-xl bg-background/10 border border-white/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent text-right"
                                            dir="rtl"
                                        />
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="البريد الإلكتروني"
                                            required
                                            className="w-full px-5 py-3.5 rounded-xl bg-background/10 border border-white/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent text-right"
                                            dir="rtl"
                                        />
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full py-3.5 rounded-xl bg-accent text-accent-foreground font-bold hover:bg-accent/90 disabled:opacity-70 transition-all duration-300"
                                        >
                                            {isSubmitting ? "جاري الإرسال…" : "تحميل"}
                                        </button>
                                        <p className="text-sm text-primary-foreground/75">
                                            لن نشارك بياناتك مع طرف ثالث. بإدخال بريدك قد تصلك موارد وعروض حصرية.
                                        </p>
                                    </form>
                                )}
                            </div>
                            {/* Visual: stacked documents */}
                            <div className="hidden lg:flex flex-1 justify-center items-center min-h-[240px]">
                                <div className="relative w-48 h-64">
                                    <div className="absolute inset-0 bg-background/20 rounded-lg shadow-xl transform rotate-[-6deg] border border-white/10" />
                                    <div className="absolute inset-0 bg-background/25 rounded-lg shadow-xl transform rotate-[2deg] translate-x-2 -translate-y-1 border border-white/10" />
                                    <div className="absolute inset-0 bg-background/30 rounded-lg shadow-xl transform rotate-[6deg] translate-x-4 -translate-y-2 border border-white/10 flex items-center justify-center p-4">
                                        <p className="text-xs font-bold text-center text-primary-foreground/90 leading-relaxed">
                                            دليلك المبسط
                                            <br />
                                            كشف المشكلات الصامتة
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <Dialog
                    open={guideDownloadOpen}
                    onOpenChange={(open) => {
                        setGuideDownloadOpen(open);
                        if (!open) setGuideDownloadPost(null);
                    }}
                >
                    <DialogContent className="sm:max-w-md" dir="rtl">
                        <DialogHeader>
                            <DialogTitle className="text-right">تحميل الدليل</DialogTitle>
                            <DialogDescription className="text-right">
                            أدخل بريدك الإلكتروني للحصول على احدث المنشورات والدلائل الجديدة                            </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleGuideDownloadSubmit} className="space-y-4 pt-2">
                            <input
                                type="email"
                                value={guideDownloadEmail}
                                onChange={(e) => setGuideDownloadEmail(e.target.value)}
                                placeholder="البريد الإلكتروني"
                                required
                                className="w-full px-4 py-3 rounded-xl border border-input bg-background text-right focus:outline-none focus:ring-2 focus:ring-ring"
                                dir="rtl"
                            />
                            <DialogFooter className="gap-2 sm:gap-0 flex-row-reverse">
                                <button
                                    type="submit"
                                    disabled={guideDownloadSubmitting}
                                    className="px-5 py-2.5 rounded-xl font-semibold bg-accent text-accent-foreground hover:bg-accent/90 disabled:opacity-70"
                                >
                                    {guideDownloadSubmitting ? "جاري التحميل…" : "تحميل"}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setGuideDownloadOpen(false);
                                        setGuideDownloadPost(null);
                                    }}
                                    className="px-5 py-2.5 rounded-xl border border-input hover:bg-muted"
                                >
                                    إلغاء
                                </button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>
        </section>
    );
};

export default DigitalLibrarySection;
