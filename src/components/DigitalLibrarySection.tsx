import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import concentricCircles from "@/assets/concentric-circles.png";
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
        pdfUrl: "/first-post/post1.pdf",
    },
    {
        title: "منهجية 60-30-10 — المعادلة السرية لتوزيع وقت القائد الفعال",
        excerpt: "في كل فريق يتقدم، وكل منظمة نجحت، هناك شيء واحد مشترك: القائد يعرف أين يضع وقته. ولهذا أعتمد قاعدة ذهبية في إدارة وقتي: قاعدة 60-30-10.",
        url: "https://linkedin.com/in/abdulrahman-alalwani",
        coverImage: "/secound-post/post2_page-0001.jpg",
        postPagePath: "/library/post/2",
        pdfUrl: "/secound-post/post2.pdf",
    },
    {
        title: "الترحيب بالموظف الجديد لا يكفي",
        excerpt: "لا شيء يُربك الموظف في يومه الأول أكثر من الغموض. لا يعرف من يتبع، أو كيف يتصرّف، أو ما المتوقع منه. وهنا يأتي دور الدليل الإرشادي، الذي لا يعتبر ترفًا، بل أداة تزرع الاستقرار والولاء من اليوم الأول.",
        url: "https://linkedin.com/in/abdulrahman-alalwani",
        coverImage: "/thired-post/post3_page-0001.jpg",
        postPagePath: "/library/post/3",
        pdfUrl: "/thired-post/post3.pdf",
    },
];

const booksForSale = [
    {
        title: "دليل القادة لبناء بيئة عمل إيجابية",
        description: "خارطة طريق عملية تساعدك على بناء بيئة مؤسسية صحية، وتحوّلك من قائدٍ مشغول بالمهام إلى قائدٍ يُلهم ويؤثّر ويصنع فارقًا في منظمته. أدوات عملية، نماذج واقعية، والركائز السبع لبيئة عمل إيجابية.",
        price: "19$",
        url: "https://alalwani.gumroad.com/l/positiveleader",
        coverImage: "/Book-2/الكتاب الاول للعلونى_page-0001.jpg",
    },
    ];

const FREE_BOOK = {
    title: "الليد ماجنت الأول — من عبدالرحمن العلوني",
    coverImage: "/Book-1/الليد_ماجنت_الاول_لعبدالرحمن_العلونى_page-0001.jpg",
    pdfPath: "/Book-1/الليد_ماجنت_الاول_لعبدالرحمن_العلونى.pdf",
};

const DigitalLibrarySection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [activeTab, setActiveTab] = useState<typeof LINKEDIN_TAB | typeof BOOKS_TAB>(LINKEDIN_TAB);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [leadSaved, setLeadSaved] = useState(false);
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
        setLeadSaved(false);
        let saved = false;
        try {
            if (leadMagnetEndpoint) {
                const res = await fetch(leadMagnetEndpoint, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        name: name.trim(),
                        email: email.trim(),
                        fromEmail: LEAD_MAGNET_FROM_EMAIL,
                        pdfPath: FREE_BOOK.pdfPath,
                        bookTitle: FREE_BOOK.title,
                    }),
                });
                if (res.ok) saved = true;
                else throw new Error("Submit failed");
            }
        } catch {
            // Continue to download even if save failed
        }
        setLeadSaved(saved);
        // Always trigger download
        const link = document.createElement("a");
        link.href = FREE_BOOK.pdfPath;
        link.download = "الليد-ماجنت-الأول-عبدالرحمن-العلوني.pdf";
        link.rel = "noopener";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setSubmitSuccess(true);
        setName("");
        setEmail("");
        setIsSubmitting(false);
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
            if (guideDownloadPost.pdfUrl) {
                const link = document.createElement("a");
                link.href = guideDownloadPost.pdfUrl;
                link.download = guideDownloadPost.pdfUrl.split("/").pop() ?? "دليل.pdf";
                link.rel = "noopener";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
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
                    <motion.div
                    className="w-24 h-1 bg-accent mx-auto rounded-full mt-6"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    style={{ transformOrigin: "center" }}
                />
                </motion.div>

                {/* Tabs – text only */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="flex justify-center gap-1 p-1.5 bg-primary/5 rounded-2xl max-w-md mx-auto mb-12"
                >
                    <motion.button
                        type="button"
                        onClick={() => setActiveTab(LINKEDIN_TAB)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`flex-1 py-3 px-6 rounded-xl font-semibold text-lg transition-all duration-300 ${
                            activeTab === LINKEDIN_TAB
                                ? "bg-background text-primary shadow-sm"
                                : "text-muted-foreground hover:text-primary"
                        }`}
                    >
                        منشورات لينكدإن
                    </motion.button>
                    <motion.button
                        type="button"
                        onClick={() => setActiveTab(BOOKS_TAB)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`flex-1 py-3 px-6 rounded-xl font-semibold text-lg transition-all duration-300 ${
                            activeTab === BOOKS_TAB
                                ? "bg-background text-primary shadow-sm"
                                : "text-muted-foreground hover:text-primary"
                        }`}
                    >
                        الكتب
                    </motion.button>
                </motion.div>

                <AnimatePresence mode="wait">
                {activeTab === LINKEDIN_TAB && (
                    <motion.div
                        key="linkedin"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.3 }}
                        className="mb-16"
                    >
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {linkedInPosts.map((post, index) => (
                                <motion.article
                                    key={post.title}
                                    initial={{ opacity: 0, y: 24 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.4, delay: index * 0.08 }}
                                    whileHover={{ y: -6, transition: { duration: 0.2 } }}
                                    className="group bg-background rounded-2xl border border-primary/10 shadow-md hover:shadow-xl hover:border-primary/15 overflow-hidden transition-all duration-300"
                                >
                                    {/* Cover: first-post image or LinkedIn strip – fits fully inside card */}
                                    {post.coverImage ? (
                                        <div className="w-full aspect-[3/4] max-h-72 overflow-hidden rounded-t-2xl bg-muted/30 border-b border-border flex items-center justify-center p-2">
                                            <img
                                                src={post.coverImage}
                                                alt=""
                                                className="max-w-full max-h-full w-auto h-auto object-contain"
                                                style={{ objectFit: 'contain', objectPosition: 'center' }}
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
                                                    تحميل المنشور
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

                {activeTab === BOOKS_TAB && (
                    <motion.div
                        key="books"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.3 }}
                        className="mb-16 flex justify-center"
                    >
                        <div className="flex flex-wrap justify-center gap-6 lg:gap-8 max-w-4xl mx-auto">
                            {booksForSale.map((book, index) => (
                                <motion.article
                                    key={book.title}
                                    initial={{ opacity: 0, y: 24 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.4, delay: index * 0.08 }}
                                    whileHover={{ y: -6, transition: { duration: 0.2 } }}
                                    className="group bg-background rounded-xl border border-primary/10 shadow-md hover:shadow-xl hover:border-primary/15 overflow-hidden transition-all duration-300 w-full max-w-sm"
                                >
                                    {"coverImage" in book && book.coverImage ? (
                                        <div className="w-full aspect-[3/4] max-h-56 overflow-hidden bg-muted/30 border-b border-border flex items-center justify-center">
                                            <img
                                                src={book.coverImage}
                                                alt={book.title}
                                                className="w-full h-full object-contain object-center"
                                                style={{ objectFit: "contain", objectPosition: "center" }}
                                            />
                                        </div>
                                    ) : (
                                        <div className="w-full aspect-[3/4] max-h-56 bg-gradient-to-br from-accent/15 via-primary/10 to-accent/20 group-hover:from-accent/25 group-hover:to-primary/15 transition-colors duration-300" />
                                    )}
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
                </AnimatePresence>

                {/* Free book: direct download + save name/email via API for future leads (no email sent to user) */}
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
                                    {FREE_BOOK.title}
                                </h4>
                                {submitSuccess ? (
                                    <p className="text-lg text-primary-foreground/95">
                                        شكراً! تم بدء تحميل الكتاب.
                                        {leadSaved && " تم حفظ بريدك لدينا لتلقي عروض وموارد حصرية لاحقاً."}
                                        {!leadSaved && leadMagnetEndpoint && " لم نتمكن من حفظ بريدك الآن؛ جرّب لاحقاً أو تواصل معنا."}
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
                                        <motion.button
                                            type="submit"
                                            disabled={isSubmitting}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="w-full py-3.5 rounded-xl bg-accent text-accent-foreground font-bold hover:bg-accent/90 disabled:opacity-70 transition-all duration-300"
                                        >
                                            {isSubmitting ? "جاري الإرسال…" : "تحميل"}
                                        </motion.button>
                                        <p className="text-sm text-primary-foreground/75">
                                            لن نشارك بياناتك مع طرف ثالث. بإدخال بريدك قد تصلك موارد وعروض حصرية.
                                        </p>
                                    </form>
                                )}
                            </div>
                            {/* Visual: free book cover – artistic frame and soft overlay */}
                            <div className="hidden lg:flex flex-1 justify-center items-center min-h-[380px]">
                                <motion.div
                                    className="relative"
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    {/* Back shadow layer for depth */}
                                    <div className="absolute inset-0 w-60 h-[360px] rounded-xl bg-primary/40 blur-xl scale-95 translate-x-1 translate-y-2" />
                                    {/* Decorative accent strip */}
                                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-40 h-1.5 bg-accent/80 rounded-full blur-sm z-10" />
                                    <div className="relative w-60 h-[360px] rounded-xl overflow-hidden shadow-2xl border-2 border-white/30 ring-2 ring-white/10">
                                        <img
                                            src={FREE_BOOK.coverImage}
                                            alt={FREE_BOOK.title}
                                            className="w-full h-full object-cover object-top saturate-110 contrast-[1.02]"
                                        />
                                        {/* Gradient overlay to soften and add depth */}
                                        <div
                                            className="absolute inset-0 pointer-events-none"
                                            style={{
                                                background: "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, transparent 25%, transparent 70%, rgba(0,0,0,0.15) 100%)",
                                            }}
                                        />
                                        {/* Subtle vignette */}
                                        <div
                                            className="absolute inset-0 pointer-events-none rounded-xl"
                                            style={{
                                                boxShadow: "inset 0 0 60px rgba(0,0,0,0.12)",
                                            }}
                                        />
                                    </div>
                                </motion.div>
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
                            <DialogTitle className="text-right">تحميل المنشور</DialogTitle>
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
