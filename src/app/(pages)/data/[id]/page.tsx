import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, SlashIcon, User } from "lucide-react";
import Link from "next/link";
import { Datasets } from "@/app/data/datasets";
import { ScatterChart } from '@mui/x-charts/ScatterChart';
import { data } from "@/app/data/randomData";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import ImagePlaceholder from "@/components/imagePlaceholder";

export const generateStaticParams = () => {
    return Datasets.map(({ id }) => ({
        id: String(id),
    }));
};

const colors: string[] = ['#006BD6', '#006BD6'];

export type paramsType = Promise<{ id: string }>;


type CTAButton = {
    label: string;
    url: string;
};

type Stat = {
    metric: string;
    label: string;
};


type Dataset = {
    id: string;
    title: string;
    subtitle: string;
    hero: string;
    badges: string[];
    cta: CTAButton[];
    overview_title: string;
    overview_content: string;
    stats: Stat[];
};

export default async function Dataset(props: { params: paramsType }) {
    const { id } = await props.params;
    const dataset: Dataset | undefined = Datasets.find((p) => p.id === id);

    const badges = dataset?.badges;
    const ctas = dataset?.cta;
    const stats = dataset?.stats;

    if (!dataset) {
        return <div className="min-h-screen bg-background mb-20">
            <main className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl font-bold text-foreground mb-4">Page Not Found</h1>
                    <p className="text-muted-foreground mb-8">The page you're looking for doesn't exist.</p>
                    <Button asChild>
                        <Link href="/data">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back
                        </Link>
                    </Button>
                </div>
            </main>
        </div>;
    }

    return (

        <main className="w-full">
            <section className="relative grid grid-cols-2 border-l border-r border-r-border border-l-border mx-auto max-w-screen-2xl p-20">

                <div className="">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/data">Data</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator>
                                <SlashIcon />
                            </BreadcrumbSeparator>
                            <BreadcrumbItem>
                                <BreadcrumbLink>{dataset.title}</BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    <div className="space-y-4 mt-8">
                        <h1 className="text-6xl">{dataset.title}</h1>
                        <p className="text-3xl max-w-xl text-muted-foreground font-light">{dataset.subtitle}</p>
                        <div className="flex gap-4">
                            {
                                dataset.badges && dataset.badges.map((badge, idx) => (
                                    <Badge variant="outline" key={idx}>{badge}</Badge>
                                )

                                )}
                        </div>
                        <div className="flex gap-4">
                            <Button variant="default"><a href="#">Get Instant Access</a></Button>
                            <Button variant="outline"><a href="#">Download Sample Data</a></Button>
                        </div>
                    </div>
                </div>

                <ImagePlaceholder className="w-full aspect-video h-full" />


            </section>

            <section className="border-t border-t-border">
                <div className="flex flex-col p-20 space-y-4">
                    <h2 className="text-4xl w-md">{dataset.overview_title}</h2>
                    <p className="w-2xl text-xl text-muted-foreground">{dataset.overview_content}</p>
                </div>
                <div className="flex justify-evenly gap-10 p-20 bg-muted">
                    {stats && stats.map((stat, idx) => (
                        <div key={idx}>
                            <p className="text-5xl mb-2">{stat.metric}</p>
                            <p className="text-muted-foreground">{stat.label}</p>
                        </div>
                    )

                    )}
                </div>
            </section>

            <section className="border-t border-t-border">
                <div className="flex flex-col justify-center p-20 space-y-4">
                    <h2 className="text-4xl text-center">What's included</h2>
                    <p className="mx-auto w-xl text-center text-xl text-muted-foreground">{dataset.overview_content}</p>
                </div>

                <div className="grid grid-cols-3 gap-1">
                    {Array.from({ length: 9 }).map((_, index) => (
                        <div className="hover:bg-muted p-4 transition-colors duration-150" key={index}
                        >

                            <ScatterChart
                                height={300}
                                series={[
                                    {
                                        label: 'Series A',
                                        data: data.map((v) => ({ x: v.x1, y: v.y1, id: v.id })),
                                    },
                                    {
                                        label: 'Series B',
                                        data: data.map((v) => ({ x: v.x1, y: v.y2, id: v.id })),
                                    },
                                ]}
                                grid={{ vertical: true, horizontal: true }}
                                colors={colors}
                                slotProps={{
                                    legend: {
                                        sx: {
                                            fontSize: 14,
                                            color: "#ccc",
                                        },
                                    },
                                }}
                            />

                        </div>
                    ))}

                </div>
            </section>

            <section className="border-t border-t-border">
                <div className="border-l border-r border-l-border border-r-border mx-auto max-w-screen-2xl p-20 space-y-16 grid grid-cols-2">
                    <div>
                        <h2 className="text-3xl">Flow Conditions</h2>

                        <p>Tech Descriptions</p>
                        <ul>
                            <li>Reynolds Numbers: 1×10⁵ to 5×10⁷</li>
                            <li>Mach Numbers**: 0.1 to 0.85 (subsonic to transonic)</li>
                            <li>Angles of Attack**: -20° to +25° (including stall)</li>
                            <li>Sideslip Angles**: -10° to +10°</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-3xl">Simulation Data</h2>

                        <p className="text-muted-foreground">Tech Descriptions</p>
                        <ul className="space-y-3">
                            <li>Flow Fields: Velocity, pressure, density, temperature</li>
                            <li>Surface Data**: Pressure coefficient (Cp), skin friction (Cf)</li>
                            <li>Integral Forces: Lift, drag, pitching moment</li>
                            <li>Turbulence Quantities: k-ω SST model variables</li>
                        </ul>
                    </div>
                </div>

            </section>
            <section className="border-t border-t-border">
                {/* **Technical Specifications Block & Getting started** */}
                <div className="border-l border-r border-l-border border-r-border mx-auto max-w-screen-2xl p-20 space-y-16">
                    <h2 className="text-5xl">Technical Details</h2>
                    <ul>
                        <li>Mesh Quality</li>
                        <li>Simulation Setup</li>
                        <li>Data Formats</li>
                    </ul>
                </div>
            </section>
            <section className="border-t border-t-border">
                {/* 5. Key Applications Block */}
                <div className="border-l border-r border-l-border border-r-border mx-auto max-w-screen-2xl p-20 space-y-16">
                    <h2 className="text-6xl w-3xl text-center mx-auto">Enable Next-Generation Applications</h2>
                    <div className="grid grid-cols-2 gap-20">
                        <div></div>
                        <div className="space-y-10">
                            <div>
                                <h3 className="text-2xl">Rapid Design Optimization</h3>
                                <p className="text-muted-foreground">Train surrogate models that evaluate new wing designs in seconds instead of hours</p>
                            </div>
                            <div>
                                <h3 className="text-2xl">Real-Time Performance Prediction</h3>
                                <p className="text-muted-foreground">Deploy models for performance monitoring and optimization</p>
                            </div>
                            <div>
                                <h3 className="text-2xl">Generative Design</h3>
                                <p className="text-muted-foreground">Create AI models that generate optimal wing shapes for specific requirements</p>
                            </div><div>
                                <h3 className="text-2xl">Digital Twin Development</h3>
                                <p className="text-muted-foreground">Build high-fidelity digital twins for aircraft fleet management</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="border-t border-t-border py-20 space-y-10">
                <div className="flex flex-col justify-center space-y-4  px-20">
                    <h2 className="text-4xl text-center">Ready to accelerate your development?</h2>
                    <p className="mx-auto w-lg text-center text-xl text-muted-foreground">Join 500+ researchers and engineers already using the Wings database.</p>
                </div>
                <div className="flex justify-center gap-4 px-20">
                    <Button variant="default"><a href="#">Get Instant Access</a></Button>
                    <Button variant="outline"><a href="#">Download Sample Data</a></Button>
                </div>
            </section>

        </main >
    );
};