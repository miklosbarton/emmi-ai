import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, Atom, Car, Fish, Loader2Icon, Plane, Satellite, Sparkles, TestTubeDiagonal } from "lucide-react";
import Link from "next/link";

const industries = [
  {
    title: "Energy",
    slug: "energy",
    icon: <Atom />
  },
  {
    title: "Aerospace",
    slug: "aerospace",
    icon: <Plane />,
  },
  {
    title: "Automotive",
    slug: "automotive",
    icon: <Car />
  },
  {
    title: "Marine",
    slug: "marine",
    icon: <Fish />
  },
  {
    title: "Life Science",
    slug: "lifescience",
    icon: <TestTubeDiagonal />
  },
  {
    title: "Defense",
    slug: "defense",
    icon: <Satellite />
  },
]

import Spline from '@splinetool/react-spline/next';
import { Badge } from "@/components/ui/badge";
import { posts } from "./data/posts";
import ImagePlaceholder from "@/components/imagePlaceholder";


export default function Home() {
  return (
    <main>
      <section>
        <div className="mx-auto space-y-6 text-center max-w-screen-2xl border-l border-l-border border-r border-r-border p-5 py-20 lg:p-20">
          <span className="block uppercase text-xs font-mono tracking-widest text-muted-foreground">From numerics to deep learning</span>
          <h1 className="text-4xl lg:text-8xl lg:max-w-4xl mx-auto font-light">Enabling data-driven AI for Engineering</h1>
          <p className="max-w-2xl mx-auto text-xl lg:text-2xl text-muted-foreground font-light leading-relaxed">Our AI-Powered physics architecture and models unlock real-time interaction, slashing simulation times from days to seconds.</p>
          <div className="flex space-x-4 mx-auto w-fit">
            <Button className="mt-4" variant="secondary" size="lg"><a href="/core">Discover our SDK</a></Button>
            <Button className="mt-4" variant="default" size="lg"><a href="/models">View AI Models</a></Button>
          </div>
        </div>
      </section>

      <section className="py-20 text-center border-t border-t-border space-y-8">
        <div className="text-muted-foreground">Trusted by industry leaders and innovators worldwide</div>
        <div className="flex gap-10 mx-auto w-fit">
          <img src="/assets/logo/nvidia.svg" className="h-6" />
          <img src="/assets/logo/simcon.svg" className="h-6" />
          <img src="/assets/logo/siemens.svg" className="h-6" />
        </div>
      </section>

      <section className="border-t border-t-border">
        <div className="mx-auto space-y-4 max-w-screen-2xl border-l border-l-border border-r border-r-border p-10 py-20 lg:p-20">
          <p className="text-3xl lg:text-5xl max-w-3xl font-light leading-14">Emmi compresses weeks of simulation into minutes, unlocking faster product cycles, real-time digital twins, and massive cost savings.</p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-screen-2xl border-l border-l-border border-r border-r-border grid lg:grid-cols-3 gap-x-20 p-10 py-20 lg:p-20">

          <div className="space-y-3">
            <ImagePlaceholder className="w-full aspect-square"/>
            <h2 className="text-2xl mt-8">SDK</h2>
            <p className="text-muted-foreground max-w-2xl mb-8 leading-relaxed"><span className="text-foreground">Build smarter, faster with less friction</span> — Our SDKs give you everything you need to seamlessly integrate advanced AI into your apps, products, and workflows.</p>
            <Button variant="secondary"><a href="/data">Learn more</a></Button>
          </div>
          <div className="space-y-3">
            <ImagePlaceholder className="w-full aspect-square"/>
            <h2 className="text-2xl mt-8">Datasets</h2>
            <p className="text-muted-foreground max-w-2xl mb-8 leading-relaxed"><span className="text-foreground">Smart, adaptive data models built for you</span> — Our data models are designed to do more than crunch numbers they understand your world.</p>
            <Button variant="secondary"><a href="/data">Learn more</a></Button>
          </div>
          <div className="space-y-3">
            <ImagePlaceholder className="w-full aspect-square"/>
            <h2 className="text-2xl mt-8">AI Models</h2>
            <p className="text-muted-foreground max-w-2xl mb-8 leading-relaxed"><span className="text-foreground">Breakthrough performance</span> — Built for engineers and researchers, it empowers rapid prototyping and decision-making without compromising on accuracy.</p>
            <Button variant="secondary"><a href="/models">Learn more</a></Button>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto space-y-8 max-w-screen-2xl border-l border-l-border border-r border-r-border p-10 lg:p-20">
          <header className="flex items-center justify-between">
            <h2 className="text-4xl font-light">Latest updates</h2>
            <Button variant="ghost"><a href="/news">All updates</a> <ArrowUpRight /></Button>
          </header>
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-1">
            {posts.slice(0, 3).map((article, idx) => (
              <article key={idx}>
                <div className="aspect-square relative mb-6">
                  <Badge className="absolute top-4 left-4">{article.category}</Badge>
                  <ImagePlaceholder className="w-full aspect-square"/>
                </div>
                <div className="space-y-4 lg:px-6">
                  <span className="block uppercase text-muted-foreground text-sm">{article.date}</span>
                  <h3 className="text-2xl">{article.title}</h3>
                  <p className="text-muted-foreground">{article.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="grid lg:grid-cols-2 border border-b max-w-screen-xl mx-auto">
          <h3>Our investors</h3>
          <div className="grid grid-cols-2 border border-b max-w-screen-xl mx-auto text-center">
            <div className="border-r border-b">1</div>
            <div>2</div>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-screen-2xl border-l border-l-border border-r border-r-border grid lg:grid-cols-2">
          <div className="space-y-4 p-10 lg:p-20">
            <p className="text-4xl max-w-xl font-light">Our vision</p>
            <p className="text-muted-foreground mb-8 text-lg">Pioneering universally applicable AI-driven physics simulation models that accelerate engineering and manufacturing processes across industries</p>
            <div className="flex items-center gap-4">
              <Button><a href="/about">About us</a></Button>
              <Button variant="outline"><a href="/careers">Open positions</a></Button>
            </div>
          </div>
          <ImagePlaceholder className="w-full aspect-square"/>
        </div>
      </section>

    </main>



  );
}
