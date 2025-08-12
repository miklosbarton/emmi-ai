
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { articles } from "@/app/data/articles";
import { Button } from "@/components/ui/button";

const CORE = () => {
  return (

    <main>
      <section>
        <div className="max-w-screen-2xl mx-auto p-20 border-l border-r border-l-border border-r-border">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-6xl max-w-3xl mx-auto text-foreground mb-8">
              Next-Gen Physics Simulations at Lightning Speed
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our SDK delivers high-fidelity simulations on a single GPU, unlocking design iteration speeds up to 100x faster than traditional tools.
            </p>
            <div className="mt-8 flex items-center gap-4 justify-center">
              <Button>Get started</Button>
              <Button variant="outline">Get started</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-t-border">
        <div className="max-w-screen-2xl justify-center mx-auto p-10 lg:p-20 border-l border-r border-l-border border-r-border">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-5xl">Build and Run Physics Simulations, all in one toolkit</h2>
            <p className="text-muted-foreground max-w-lg mx-auto text-lg">Our SDK makes it easy to create and run complex physics simulations by guiding users through five essential steps:</p>
          </div>
          <div className="gap-2 justify-evenly w-full py-20">
            {["Geometry", "Meshing", "Physics Modeling", "Discretization", "Parallelization"].map((item,index) => (
              <Button key={index} variant="ghost">{item}</Button>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-20">
          <div className="space-y-4">
            <h3 className="text-3xl">Geometry</h3>
            <p className="text-muted-foreground">Start with the shape or structure of the object you're studying, like the wing of an airplane or the inside of a pipe.</p>
          </div>
          <div className="bg-muted aspect-video col-span-2">

          </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-screen-2xl mx-auto p-20 border-l border-r border-l-border border-r-border space-y-20">
          <div className="grid grid-cols-2 gap-20">
            <div className="aspect-video bg-muted"></div>
            <div>
              <h3 className="text-2xl mb-3 max-w-lg">Streamlined Data Management Tailored for CFD Workflows</h3>
              <p className="text-muted-foreground mb-5">Our comprehensive data management package is designed specifically for computational fluid dynamics (CFD), offering robust tools for organizing, processing, and transforming simulation data. From preprocessing to post-analysis, we simplify every step, enabling efficient and scalable data handling for AI-driven physics applications.</p>
              <Button><a href="#">Learn more</a></Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-20">
            <div className="aspect-video bg-muted"></div>
            <div>
              <h3 className="text-2xl mb-3 max-w-xl">Scalable AI Training Framework</h3>
              <p className="text-muted-foreground mb-5">We offer a highly optimized and configurable framework for distributed training of AI models, specifically tailored for physics applications. Alongside this, our curated collection of model architectures supports efficient training, fine-tuning, and experimentation, empowering researchers to build and scale physics-based AI solutions with ease.</p>
              <Button><a href="#">Learn more</a></Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-20">
            <div className="aspect-video bg-muted"></div>
            <div>
              <h3 className="text-2xl mb-3 max-w-xl">Inference for Physics-Based AI Surrogates</h3>
              <p className="text-muted-foreground mb-5">Our optimized inference module enables seamless deployment of surrogate models trained with our framework, ensuring high performance and scalability. Emmi AI also offers a growing library of ready-to-use, pre-trained physics models, allowing users to accelerate simulation tasks and integrate intelligent solutions out of the box.</p>
              <Button><a href="#">Learn more</a></Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CORE;