
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import Link from "next/link";
import { articles } from "@/app/data/articles"

export const generateStaticParams = () => {
    return articles.map(({ id }) => ({
        id: String(id),
    }));
};

export type paramsType = Promise<{ id: string }>;

type Article = {
    id: string;
    title: string;
    description: string;
    author: string;
    date: string;
    category: string;
    readTime: string;
    content: string;
};

export default async function Article(props: { params: paramsType }) {
    const { id } = await props.params;
    const article: Article | undefined = articles.find((p) => p.id === id);

    if (!article) {
        return  <div className="min-h-screen bg-background mb-20">
            <main className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl font-bold text-foreground mb-4">Article Not Found</h1>
                    <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
                    <Button asChild>
                        <Link href="/news">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back
                        </Link>
                    </Button>
                </div>
            </main>
        </div>;
    }
    
    return (

    <div className="min-h-screen bg-background">

        <main className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
                {/* Back Button */}
                <Button variant="ghost" asChild className="mb-8">
                    <Link href="/news">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back
                    </Link>
                </Button>

                {/* Article Header */}
                <header className="mb-12">
                    <Badge variant="secondary" className="mb-4">
                        {article.category}
                    </Badge>

                    <h1 className="text-6xl font-light text-foreground mb-6 leading-tight">
                        {article.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <User className="h-4 w-4" />
                            <span>{article.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(article.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span>{article.readTime}</span>
                        </div>
                    </div>
                </header>

                {/* Article Content */}
                <article className="prose prose-lg max-w-none">
                    <div
                        className="text-foreground leading-relaxed space-y-4"
                        dangerouslySetInnerHTML={{ __html: article.content }}
                    />
                </article>

                {/* Article Footer */}
                <footer className="mt-16 pt-8 border-t border-border">
                    <div className="flex justify-between items-center">
                        <Button variant="outline" asChild>
                            <Link href="/blog">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                More Articles
                            </Link>
                        </Button>

                        <div className="text-sm text-muted-foreground">
                            Share this article
                        </div>
                    </div>
                </footer>
            </div>
        </main>
    </div>
   );
};