
import { industries } from "@/app/data/industries"
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { SlashIcon } from "lucide-react"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import ImagePlaceholder from "@/components/imagePlaceholder";


export const generateStaticParams = () => {
    return industries.map(({ id }) => ({
        id: String(id),
    }));
};

export type paramsType = Promise<{ id: string }>;

type CTA = {
    label: String;
    url: String;
}

type Stat = {
    metric: String;
    label: String;
}

type Industry = {
    id: string;
    title: string;
    description: string;    
};

export default async function IndustryPage(props: { params: paramsType }) {
    const { id } = await props.params;
    const industry: Industry | undefined = industries.find((p) => p.id === id);

    if (!industry) {
        return <div>Industry not found.</div>;
    }

    return (
        <main className="w-full max-w-screen-2xl mx-auto">
            <section>
                <div className="p-20 border-l border-r border-l-border border-r-border">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/solutions">Solutions</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator>
                                <SlashIcon />
                            </BreadcrumbSeparator>
                            <BreadcrumbItem>
                                <BreadcrumbLink>{industry.title}</BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    <div className="space-y-8">
                        <h1 className="text-6xl">{industry.title}</h1>
                        <p className="text-2xl max-w-xl text-muted-foreground">{industry.description}</p>
                        <Button>Explore Energy Solutions</Button>
                    </div>
                </div>
            </section>

            {/* 1. **Hero** - Transform energy engineering with AI
                2. **Intro -** General description
                3. **Key Applications** - Power grid & transformers focus
                4. **Why Emmi** - 3 main benefits with proof points
                5. **One Success Story** - Most relevant case
                6. **Models & Datasets Block -** Link to Pre-Trained Models for Energy Applications
                7. **CTA** - Let's discuss your challenge
                8. **Trust Indicators** */}
            <section>
                <div className="max-w-screen-2xl mx-auto p-20 border-l border-r border-l-border border-r-border">
                    <ImagePlaceholder className="w-full aspect-video" />
                </div>
            </section>
            <section>
                <div className="max-w-screen-2xl mx-auto p-20 border-l border-r border-l-border border-r-border">
                   <h2 className="text-4xl mx-auto">Powering the Future of Energy with AI</h2>
                   <p className="max-w-2xl text-3xl text-muted-foreground mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed lobortis sapien. Morbi tincidunt vel lectus et aliquam. Proin nec ultricies ipsum. Donec commodo faucibus dapibus. Nam malesuada felis id ex consequat, in pulvinar tortor suscipit. </p>
                </div>
            </section>
            <section className="border-t border-t-border">
                <div className="max-w-screen-2xl mx-auto p-20 border-l border-r border-l-border border-r-border grid grid-cols-3">
                    <div className="flex h-full items-end text-5xl">
                        Transform Power Grid Infrastructure with AI
                    </div>
                    <div className="h-[400px] p-10">
                        <div className="text-2xl">Power Transformer Design & Analysis</div>
                        <div className="flex flex-col justify-between"><span>Electromagnetic Field Simulation</span> <span>Accelerate core design and winding optimization</span></div>
                        <div>Thermal Management**: Real-time heat transfer modeling for cooling system design</div>
                    </div>
                    <div>
                        <h2>Smart Grid & Digital Twin Applications**</h2>
                        <div>
                            <b>Predictive Maintenance</b> <p>Real-time transformer health monitoring and failure prediction</p>
                        </div>
                        <div>

                            <b>Asset Management</b>
                            <p>Optimize transformer fleet performance and replacement strategies</p>
                        </div>
                        <div>
                            <b>Fault Detection</b><p>Instant anomaly detection and root cause analysis</p></div>
                        <div>
                            <b>Energy Loss Minimization**: Optimize transformer efficiency across varying load conditions</b></div>
                    </div>
                </div>
            </section>
            <section>
                <div className="max-w-screen-2xl mx-auto p-20 border-l border-r border-l-border border-r-border">

                    <h2 className="text-5xl mx-auto text-center max-w-3xl leading-14">Why leading energy companies choose Emmi</h2>
                    <div className="grid grid-cols-2 gap-20 pt-20">
                    <div>
                    <h3 className="text-4xl mb-2">100-1000x Faster Simulations</h3>
                    <p className="text-muted-foreground text-lg max-w-lg">Replace weeks of traditional CFD/FEM simulations with AI models that deliver results in seconds</p>
                    </div>
                    <div>
                    <h3 className="text-4xl mb-2">Reduced Development Costs</h3>
                    <p className="text-muted-foreground text-lg max-w-lg">Cut simulation costs by 90% while exploring 10x more design variations</p>
                    </div>
                    <div>
                    <h3 className="text-4xl mb-2">Real-Time Optimization</h3>
                    <p className="text-muted-foreground text-lg max-w-lg">Enable real-time decision making for operational efficiency and predictive maintenance</p>
                    </div>
                    <div>
                    <h3 className="text-4xl mb-2">Sustainability Impact</h3>
                    <p className="text-muted-foreground text-lg max-w-lg">Accelerate the development of cleaner, more efficient energy technologies</p>
                    </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="max-w-screen-2xl mx-auto p-20 border-l border-r border-l-border border-r-border">

                    **5. Use Cases Block -** *(One Success Story, Most relevant case)*

                    **Heading:** Success Story in Energy

                    Siemens Energy customer story

                </div>
            </section>
            <section>
                <div className="max-w-screen-2xl mx-auto p-20 border-l border-r border-l-border border-r-border space-y-16">
                    <div className="flex justify-between"><h3 className="text-5xl max-w-xl">Pre-Trained Models for Energy Applications</h3><Button>Explore Energy Models</Button></div>
                    <div className="grid grid-cols-4 gap-1">
                        <div className="bg-muted p-8"><p>AERO Wind</p> <p className="text-muted-foreground">Specialized models for wind turbine aerodynamics</p></div>
                        <div className="bg-muted p-8"><p>THERMO Power</p> <p className="text-muted-foreground">Heat transfer models for power generation</p></div>
                        <div className="bg-muted p-8"><p>FLOW Pipeline</p> <p className="text-muted-foreground">Fluid dynamics models for oil & gas transport</p></div>
                        <div className="bg-muted p-8"><p>Custom Training</p> <p className="text-muted-foreground">Build your own models with our SDK</p></div>
                    </div>

                </div>
            </section>
            <section className="border-t border-t-border">
                <div className="max-w-screen-2xl mx-auto p-20 border-l border-r border-l-border border-r-border">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl mx-auto text-center max-w-xl">Ready to  transform your Energy Simulations?</h2>
                        <p className="text-2xl text-muted-foreground max-w-2xl mx-auto mt-3">Join leading energy companies already accelerating their innovation with Emmi AI</p>
                    </div>
                    <div className=" grid grid-cols-2">
                        <div className="p-20 space-y-8 border border-border text-center"><h3 className="text-2xl">Let's discuss your challenge</h3> <Button>Schedule a Meeting</Button></div>
                        <div className="p-20 space-y-8 gap-4 border border-border text-center"><h3 className="text-2xl">Energy Industry Guide</h3> <Button>Download</Button></div>
                    </div>
                </div>
            </section>
            <section>
                <div className="max-w-screen-2xl mx-auto p-20 border-l border-r border-l-border border-r-border">
                    **8. Trust Indicators**

                    **Heading:** Trusted by Energy Leaders

                    [Logos/testimonials from energy sector clients]

                    - Performance metrics (e.g., "50+ energy projects accelerated")
                    - Partner institutions in energy research
                    - Industry certifications or validations
                </div>
            </section>
        </main>
    );
};
