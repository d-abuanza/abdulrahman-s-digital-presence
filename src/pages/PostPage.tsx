import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog";

const FIRST_POST_IMAGES = Array.from({ length: 10 }, (_, i) =>
    `/first-post/post1_pages-to-jpg-${String(i + 1).padStart(4, "0")}.jpg`
);

const SECOND_POST_IMAGES = Array.from({ length: 6 }, (_, i) =>
    `/secound-post/post2_page-${String(i + 1).padStart(4, "0")}.jpg`
);

const THIRD_POST_IMAGES = Array.from({ length: 10 }, (_, i) =>
    `/thired-post/post3_page-${String(i + 1).padStart(4, "0")}.jpg`
);

const NOTIFY_EMAIL = "diaaabuanza7@gmail.com";
const downloadNotifyEndpoint = import.meta.env.VITE_DOWNLOAD_NOTIFY_ENDPOINT as string | undefined;

const POST_CONTENT: Record<string, { title: string; content: string; images: string[]; pdfUrl?: string }> = {
    "1": {
        title: "أكثر من 63% من الموظفين يغادرون لأن الرواتب أقل من توقعاتهم",
        images: FIRST_POST_IMAGES,
        pdfUrl: "/first-post/post1.pdf",
        content: `أكثر من 63% من الموظفين يغادرون لأن الرواتب أقل من توقعاتهم

الراتب لم يعد مجرد رقم بل رسالة مباشرة من الشركة تقول فيها للموظف: "أنت تستحق."

وعندما تكون هذه الرسالة ضعيفة، فإن أقوى المواهب تردّ عليها بالاستقالة.

في هذا الدليل سأوجهك لبناء نظام رواتب يكافئ الموظفين لا يجبرهم على الرحيل.`,
    },
    "2": {
        title: "منهجية 60-30-10 — المعادلة السرية لتوزيع وقت القائد الفعال",
        images: SECOND_POST_IMAGES,
        pdfUrl: "/secound-post/post2.pdf",
        content: `منهجية 60-30-10
المعادلة السرية لتوزيع وقت القائد الفعال

في كل فريق يتقدم، وكل منظمة نجحت، هناك شيء واحد مشترك:
القائد يعرف أين يضع وقته.
ولهذا أعتمد قاعدة ذهبية في إدارة وقتي: قاعدة 60-30-10`,
    },
    "3": {
        title: "الترحيب بالموظف الجديد لا يكفي",
        images: THIRD_POST_IMAGES,
        pdfUrl: "/thired-post/post3.pdf",
        content: `الترحيب بالموظف الجديد لا يكفي

لا شيء يُربك الموظف في يومه الأول أكثر من الغموض.
لا يعرف من يتبع، أو كيف يتصرّف، أو ما المتوقع منه.
وهنا يأتي دور الدليل الإرشادي، الذي لا يعتبر ترفًا، بل أداة تزرع الاستقرار والولاء من اليوم الأول.`,
    },
};

const PostPage = () => {
    const { id } = useParams<{ id: string }>();
    const post = id ? POST_CONTENT[id] : null;
    const [pageIndex, setPageIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [downloadOpen, setDownloadOpen] = useState(false);
    const [downloadEmail, setDownloadEmail] = useState("");
    const [downloadSubmitting, setDownloadSubmitting] = useState(false);

    const totalPages = post?.images.length ?? 0;
    const canGoPrev = pageIndex > 0;
    const canGoNext = pageIndex < totalPages - 1;

    const goPrev = () => {
        setDirection(-1);
        setPageIndex((i) => Math.max(0, i - 1));
    };
    const goNext = () => {
        setDirection(1);
        setPageIndex((i) => Math.min(totalPages - 1, i + 1));
    };

    useEffect(() => {
        if (!post || totalPages === 0) return;
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight" || e.key === "ArrowDown") {
                setDirection(1);
                setPageIndex((i) => Math.min(totalPages - 1, i + 1));
            }
            if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
                setDirection(-1);
                setPageIndex((i) => Math.max(0, i - 1));
            }
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [post, totalPages]);

    const handleDownloadSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!post || !downloadEmail.trim() || !downloadEmail.includes("@")) return;
        setDownloadSubmitting(true);
        try {
            if (downloadNotifyEndpoint) {
                await fetch(downloadNotifyEndpoint, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify({
                        email: downloadEmail.trim(),
                        guideTitle: post.title,
                        notifyEmail: NOTIFY_EMAIL,
                        message: `This email address has downloaded [${post.title}].`,
                    }),
                });
            }
            if (post.pdfUrl) {
                const link = document.createElement("a");
                link.href = post.pdfUrl;
                link.download = post.pdfUrl.split("/").pop() ?? "دليل.pdf";
                link.rel = "noopener";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
            setDownloadOpen(false);
            setDownloadEmail("");
        } finally {
            setDownloadSubmitting(false);
        }
    };

    if (!post) {
        return (
            <div className="min-h-screen bg-background">
                <Navbar />
                <div className="pt-16 lg:pt-24 container mx-auto px-4 py-24 text-center">
                    <p className="text-muted-foreground mb-6">المنشور غير موجود.</p>
                    <Link to="/library" className="text-accent font-semibold hover:underline">
                        العودة إلى المكتبة الرقمية
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background" dir="rtl">
            <Navbar />
            <main className="pt-24 container mx-auto px-4 py-8 max-w-4xl">
                <Link
                    to="/library"
                    className="inline-flex items-center gap-2 rounded-xl border-2 border-primary text-primary px-5 py-2.5 text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-colors mb-8 w-fit"
                >
                    ← العودة إلى المكتبة الرقمية
                </Link>

                <article className="space-y-8">
                    <header className="text-right">
                        <h1 className="text-2xl md:text-3xl font-bold text-primary leading-tight">
                            {post.title}
                        </h1>
                    </header>

                    <div className="rounded-xl bg-muted/50 p-6 text-right whitespace-pre-line text-muted-foreground leading-relaxed">
                        {post.content}
                    </div>

                    <div className="space-y-6">
                        <div className="rounded-xl border border-primary/10 overflow-hidden shadow-lg bg-background">
                            <div className="relative flex items-center justify-center min-h-[60vh] bg-muted/20 overflow-hidden">
                                <AnimatePresence mode="wait" initial={false} custom={direction}>
                                    <motion.img
                                        key={pageIndex}
                                        src={post.images[pageIndex]}
                                        alt={`صفحة ${pageIndex + 1} من ${totalPages}`}
                                        className="w-full h-auto max-h-[70vh] object-contain absolute"
                                        custom={direction}
                                        initial={(d) => ({ opacity: 0, x: (d ?? 1) * 80 })}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={(d) => ({ opacity: 0, x: -(d ?? 1) * 80 })}
                                        transition={{ duration: 0.25, ease: "easeInOut" }}
                                    />
                                </AnimatePresence>
                            </div>
                            <div className="flex items-center justify-between gap-4 p-4 border-t border-border bg-muted/30">
                                <button
                                    type="button"
                                    onClick={goPrev}
                                    disabled={!canGoPrev}
                                    className="px-5 py-2.5 rounded-xl font-semibold bg-primary text-primary-foreground disabled:opacity-40 disabled:cursor-not-allowed hover:bg-primary/90 transition-colors"
                                >
                                    السابق
                                </button>
                                <span className="text-sm font-medium text-muted-foreground">
                                    صفحة {pageIndex + 1} من {totalPages}
                                </span>
                                <button
                                    type="button"
                                    onClick={goNext}
                                    disabled={!canGoNext}
                                    className="px-5 py-2.5 rounded-xl font-semibold bg-primary text-primary-foreground disabled:opacity-40 disabled:cursor-not-allowed hover:bg-primary/90 transition-colors"
                                >
                                    التالي
                                </button>
                            </div>
                        </div>

                        {post.pdfUrl && (
                            <div className="flex justify-center pt-4">
                                <button
                                    type="button"
                                    onClick={() => setDownloadOpen(true)}
                                    className="px-6 py-3 rounded-xl font-semibold bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/25 transition-all"
                                >
                                    تحميل المنشور
                                </button>
                            </div>
                        )}

                        <Dialog open={downloadOpen} onOpenChange={setDownloadOpen}>
                            <DialogContent className="sm:max-w-md" dir="rtl">
                                <DialogHeader>
                                    <DialogTitle className="text-right">تحميل المنشور</DialogTitle>
                                    <DialogDescription className="text-right">
                                        حمّل المنشور واحصل على أحدث المنشورات. أدخل بريدك الإلكتروني لتحميل المنشور.
                                    </DialogDescription>
                                </DialogHeader>
                                <form onSubmit={handleDownloadSubmit} className="space-y-4 pt-2">
                                    <input
                                        type="email"
                                        value={downloadEmail}
                                        onChange={(e) => setDownloadEmail(e.target.value)}
                                        placeholder="البريد الإلكتروني"
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-input bg-background text-right focus:outline-none focus:ring-2 focus:ring-ring"
                                        dir="rtl"
                                    />
                                    <DialogFooter className="gap-2 sm:gap-0 flex-row-reverse">
                                        <button
                                            type="submit"
                                            disabled={downloadSubmitting}
                                            className="px-5 py-2.5 rounded-xl font-semibold bg-accent text-accent-foreground hover:bg-accent/90 disabled:opacity-70"
                                        >
                                            {downloadSubmitting ? "جاري التحميل…" : "تحميل"}
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setDownloadOpen(false)}
                                            className="px-5 py-2.5 rounded-xl border border-input hover:bg-muted"
                                        >
                                            إلغاء
                                        </button>
                                    </DialogFooter>
                                </form>
                            </DialogContent>
                        </Dialog>
                    </div>
                </article>
            </main>
        </div>
    );
};

export default PostPage;
