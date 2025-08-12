
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { articles } from "@/app/data/articles";
import { ArrowUpRight } from "lucide-react";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background mb-20">
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-6xl text-foreground mb-4">
             Research
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest insights, researches, and industry trends from our team of experts.
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid gap-8 md:gap-6">
            {articles.map((article, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <Badge variant="secondary" className="mb-2">
                      {article.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {article.readTime}
                    </span>
                  </div>
                  <CardTitle className="text-2xl hover:text-primary transition-colors">
                    <Link href={`/news/${article.id}`}>
                      {article.title} <ArrowUpRight/>
                    </Link>
                  </CardTitle>
                  {/* <CardDescription className="text-base">
                    {article.description}
                  </CardDescription> */}
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>By {article.author}</span>
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;