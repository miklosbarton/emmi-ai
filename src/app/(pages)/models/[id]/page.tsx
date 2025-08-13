
import { ModelsData } from "@/app/data/models"
import { Button } from "@/components/ui/button";
import { CheckCircle2, Copy, SlashIcon } from "lucide-react"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Badge } from "@/components/ui/badge";
import Avatar from "@mui/material/Avatar";


export const generateStaticParams = () => {
    return ModelsData.map(({ id }) => ({
        id: String(id),
    }));
};

import Spline from '@splinetool/react-spline/next';

export type paramsType = Promise<{ id: string }>;

type Model = {
    id: string;
    title: string;
    subtitle: string;
    hero: string;
    description: string;
    badges: String[];
    cta: CTA[];
    overview_title: String;
    overview_content: String;
    capabilities: Capability[];
    success_title: String;
    success_quote: String;
    success_person: String;
    metrics: Metric[];

};

type CTA = {
    label: String;
    url: String;
}

type Capability = {
    title: String;
    label: String;
}

type Metric = {
    number: String;
    label: String;
}

export default async function ModelDetailPage(props: { params: paramsType }) {
    const { id } = await props.params;
    const model: Model | undefined = ModelsData.find((p) => p.id === id);

    if (!model) {
        return <div>Page not found.</div>;
    }

    return (
        <main className="w-full">
            <section className="relative">
                <div className="relative h-screen p-20 border-l border-r border-l-border border-r-border max-w-screen-2xl mx-auto z-20">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/models">Models</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator>
                                <SlashIcon />
                            </BreadcrumbSeparator>
                            <BreadcrumbItem>
                                <BreadcrumbLink>{model.title}</BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    <div className="space-y-8 mt-20">
                        <h1 className="text-8xl">{model.title}</h1>
                        <p className="text-4xl max-w-xl">{model.description}</p>
                        <div className="flex gap-4">
                            {
                                model.badges && model.badges.map((badge, idx) => (
                                    <Badge variant="outline" key={idx}>{badge}</Badge>
                                )

                                )}
                        </div>
                    </div>
                </div>
                <div className="w-full h-screen absolute inset-0 z-0 flex justify-center items-center px-20 border-l border-r border-l-border border-r-border">
                    <Spline className="w-full h-full opacity-50" scene="https://prod.spline.design/im7LJHTcZsCiMVO0/scene.splinecode" />
                </div>

            </section>


            <section>
                <div className="max-w-screen-2xl mx-auto px-20 pb-20 border-l border-r border-l-border border-r-border">
                    <h2 className="text-5xl max-w-xl mb-4">{model.overview_title}</h2>
                    <p className="text-xl text-muted-foreground mb-4 max-w-xl">AERO Cars provides state-of-the-art neural network models trained on extensive automotive CFD data.</p>
                    <ul className="flex flex-col space-y-4 mt-8">
                        <li className="flex gap-2 items-center"><CheckCircle2 className="fill-muted-foreground stroke-background"/> 1000x faster aerodynamic predictions</li>
                        <li className="flex gap-2 items-center"><CheckCircle2 className="fill-muted-foreground stroke-background"/> Real-time design optimization</li>
                        <li className="flex gap-2 items-center"><CheckCircle2 className="fill-muted-foreground stroke-background"/> Virtual testing</li>
                        <li className="flex gap-2 items-center"><CheckCircle2 className="fill-muted-foreground stroke-background"/> In-vehicle applications</li>
                    </ul>
                </div>
            </section>

            <section className="">
                <div className="max-w-screen-2xl mx-auto p-20 border border-border grid grid-cols-3">
                    {
                        model.metrics.map((metric, idx) => (
                            <div key={idx} className="flex items-center gap-4 justify-center">
                                <span className="text-6xl">{metric.number}</span>
                                <p className="text-muted-foreground max-w-[16ch]">{metric.label}</p>
                            </div>
                        ))
                    }
                </div>
            </section>

            <section>
                <div className="max-w-screen-2xl mx-auto p-20 border-l border-r border-l-border border-r-border space-y-8">
                    <h2 className="text-2xl"> Key capabilities</h2>
                    <div className="grid grid-cols-4 border-t border-b border-t-border border-b-border">
                        {
                            model.capabilities.map((capability, idx) => (
                                <div key={idx} className="flex flex-col space-y-4 border-l border-border p-10">
                                    <p className="text-xs uppercase text-muted-foreground">{capability.title}</p>
                                    <span className="text-4xl max-w-[14ch]">{capability.label}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="max-w-screen-2xl mx-auto p-20 border-l border-r border-l-border border-r-border">
                    <h2 className="text-5xl">Architecture & Performance</h2>

                    <div className="grid grid-cols-2 mt-12 gap-20">


                        <div>
                            <h4 className="text-xl mb-4">Model Architecture</h4>
                            <div className="grid grid-cols-2 border-b border-b-border py-4">
                                <div className="font-semibold">Type</div>
                                <div className="text-muted-foreground">AB-UPT</div>
                            </div>
                            <div className="grid grid-cols-2 border-b border-b-border py-4">
                                <div className="font-semibold">Input</div>
                                <div className="text-muted-foreground">Surface mesh (150M points)</div>
                            </div>
                            <div className="grid grid-cols-2 border-b border-b-border py-4">
                                <div className="font-semibold">Output</div>
                                <div className="text-muted-foreground">Pressure, velocity fields, integral forces</div>
                            </div>
                            <div className="grid grid-cols-2 border-b border-b-border py-4">
                                <div className="font-semibold">Training Data</div>
                                <div className="text-muted-foreground">500,000+ CFD simulations</div>
                            </div>
                            <div className="grid grid-cols-2 border-b border-b-border py-4">
                                <div className="font-semibold">Physics Constraints</div>
                                <div className="text-muted-foreground">Built-in conservation laws</div>
                            </div>


                        </div>
                        <div>
                            <h4 className="text-xl mb-4">Performance Metrics</h4>
                            <div className="border border-border">
                                <div className="flex justify-between items-center border-b border-b-border p-10">
                                    <span className="text-muted-foreground block">Traditional CFD</span>
                                    <p className="text-5xl">4-8 hours</p>
                                </div>
                                <div className="flex justify-between items-center border-b border-b-border p-10">
                                    <span className="text-muted-foreground block">AERO Cars</span>
                                    <p className="text-5xl">1 - 2 seconds</p>
                                </div>
                                <div className="flex justify-between items-center border-b border-b-border p-10">
                                    <span className="text-muted-foreground block">Speedup</span>
                                    <p className="text-5xl">1000-5000x</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    **Validation Results**
                    Add text
                </div>
                <section className="max-w-screen-2xl mx-auto p-20 border border-border">
                    <div className="grid grid-cols-2 gap-20">
                        <div>
                            <h2 className="text-5xl">Easy to deploy</h2>
                            <p className="text-muted-foreground mt-6 text-xl">With just one command, you’re up and running in seconds.
                                Lightweight, fast, and built for modern workflows.
                                No complex setup—just plug in and start building.
                                Works seamlessly across environments and platforms.
                                Deploy smarter, code faster, and focus on what matters.</p>
                        </div>
                        <div className="font-mono p-10 bg-muted relative rounded-2xl">
                            <Button className="absolute right-4 top-4"><Copy /></Button>
                            <code><pre># Install the EmmiSDK<br />
                                curl -s https://install.emmisdk.io | bash<br />
                                export PATH="$PATH:/opt/emmisdk/bin"<br />
                                emmisdk init --quickstart</pre></code>
                        </div>
                    </div>

                </section>


                <div className="max-w-screen-2xl mx-auto p-20 border-l border-r border-l-border border-r-borde text-center justify-cente space-y-8">
                    <h2 className="text-xl text-muted-foreground">{model.success_title}</h2>
                    <blockquote className="text-4xl max-w-3xl mx-auto leading-14">
                        "{model.success_quote}"
                    </blockquote>
                    <div className="flex items-center gap-3 mx-auto w-fit">
                        <Avatar variant="circular" />
                        <span>{model.success_person}</span>
                    </div>
                </div>


            </section>
        </main>
    );
};
