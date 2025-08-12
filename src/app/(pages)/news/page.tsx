
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { posts } from "@/app/data/posts";
import ImagePlaceholder from "@/components/imagePlaceholder";

const News = () => {
  return (

    <main className="px-4 py-16">
      <div className="max-w-screen-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl text-foreground mb-4">
            News
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest insights, researches, and industry trends from our team of experts.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-3 gap-8 md:gap-6">
          {posts.map((article, idx) => {
            const dateStr = article.date;
            const date = new Date(dateStr);

            const formatted = date.toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric"
            });

            return (
               <article key={idx} className="mb-8">
                <a href={`/news/${article.id}`}>
                <div className="aspect-square relative mb-6">
                  <Badge className="absolute top-4 left-4">{article.category}</Badge>
                  <ImagePlaceholder className="w-full h-full"/>
                </div>
                <div className="space-y-4 lg:px-6">
                  <span className="block uppercase text-muted-foreground text-sm">{formatted}</span>
                  <h3 className="text-2xl">{article.title}</h3>
                  {/* <p className="text-muted-foreground">{article.description}</p> */}
                </div>
                </a>
              </article>
            )
          })}
        </div>


      </div>
    </main>
  );
};

export default News;