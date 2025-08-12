import Link from "next/link";

import { Button } from "./ui/button";
import Navigation from "./navigation";
import Logo from "./logo";

export default function Header() {
    return (
        <div className="z-50 w-full max-w-screen-2xl mx-auto flex items-center justify-between p-10 relative border-l border-l-border border-r border-r-border">
            <Link href="/"><img src="/assets/logo/emmi_logo_white.svg" alt="Logo" className='h-6' /></Link>
            <Navigation />
            <div className="flex gap-4 text-sm">
                <Button variant="secondary">
                    <a href="https://emmiai.recruitee.com">We are hiring</a>
                </Button>
                <Button>
                    <a href="/contact">Contact us</a>
                </Button>
            </div>
        </div>
    )
}