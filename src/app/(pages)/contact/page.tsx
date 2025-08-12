import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Handshake } from "lucide-react";

export default function Contact() {
    return (
        <div>
            <div className="max-w-screen-xl mx-auto p-20 py-16 grid lg:grid-cols-2 gap-40 border-l border-r border-l-border border-r-border">
                <div className="space-y-8">
                    <Handshake/>
                    <div className="text-5xl text-foreground mb-4">Let’s change the physical world engineering together</div>

                    <div className="prose prose-lg max-w-none text-muted-foreground space-y-6 mt-8">

                        <p className="leading-relaxed">We collaborate with high-growth companies like Apple, Samsung, Boing and BMW to unlock new opportunities through intelligent, AI-powered infrastructure.</p>

                        <div className="flex gap-3"><CheckCircle2 /> <span>Pre-trained models and a platform for custom model development</span></div>
                        <div className="flex gap-3"><CheckCircle2 /> <span>Built to power simulations, digital twins, and complex agent-based systems</span></div>
                        <div className="flex gap-3"><CheckCircle2 /> <span>Transparent, usage-based pricing</span></div>

                        <p className="leading-relaxed">We’d love to learn more about your engineering challenges and how we can support your growth. Fill out the form, and a member of our team will reach out shortly.</p>

                    </div>
                </div>
                <div className="bg-card flex justify-center">
                    <div className="max-w-2xl space-y-4">
                        <div className="grid lg:grid-cols-2 gap-4">
                            <div className="space-y-3">
                                <Label>First name</Label>
                                <Input placeholder="" />
                            </div>
                            <div className="space-y-3">
                                <Label>Last name</Label>
                                <Input placeholder="" />
                            </div>
                        </div>
                        <div className="space-y-3">
                            <Label>E-mail address</Label>
                            <Input placeholder="" />
                        </div>
                        <div className="space-y-3">
                            <Label>Phone number</Label>
                            <Input placeholder="" />
                        </div>
                        <div className="space-y-3">
                            <Label>Company website</Label>
                            <Input placeholder="" />
                        </div>
                        <div className="space-y-3">
                            <Label>Message</Label>
                            <Textarea className="min-h-[160px]" />
                        </div>
                        <Button className="w-full">Send message</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};