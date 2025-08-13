import { Button } from "@/components/ui/button";
import { jobs } from "@/app/data/jobs"
import Link from "next/link";
import { Datasets } from "@/app/data/datasets";
import { ArrowRight, ChevronRight, SlashIcon } from "lucide-react";


const Data = () => {

  return (

    <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 p-20">

      <div className="mb-16">
        <h1 className="text-6xl text-foreground mb-6">Smart, Adaptive Data Models Built for You</h1>
        <p className="text-muted-foreground text-2xl font-light">
          Emmi.ai’s data models are designed to do more than crunch numbers — they understand your world.
        </p>
      </div>

      <div className="grid grid-cols-3">
        {Datasets.map((item, index) => (
          <div key={index} className="bg-muted">
            <div className="aspect-square bg-muted" />
            <div className="p-5 space-y-2">
              <h3 className="text-foreground text-2xl">{item.title}</h3>
              <p className="text-muted-foreground">{item.subtitle}</p>
              <Link href={`/data/${item.id}`} className="flex items-center gap-1">Learn more <ChevronRight className="size-4" /></Link>
            </div>
          </div>
        ))}
      </div>

    </main>

  );
};

export default Data;