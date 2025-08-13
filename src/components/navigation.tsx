"use client"

import * as React from "react"
import Link from "next/link"
import { AtomIcon, Cpu, Dna, Plane, Radar, Satellite } from "lucide-react"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ReactNode } from "react"
import { Button } from "./ui/button"
import ImagePlaceholder from "./imagePlaceholder"

const models: { title: string; href: string; description: string }[] = [
    {
        title: "AERO Cars",
        href: "/models/aero-cars",
        description:
            "Pre-trained AI models for instant vehicle aerodynamic predictions",
    },
    {
        title: "AERO Planes",
        href: "/models/aero-planes",
        description:
            "Pre-trained AI models for instant plane aerodynamic predictions",
    },
]

const solutions: { icon: ReactNode, title: string; href: string; description: string }[] = [
    {
        icon: <AtomIcon className="size-6 text-white" />,
        title: "Energy",
        href: "/industry/energy",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        icon: <Plane className="size-6 text-white" />,
        title: "Aerospace & Automotive",
        href: "/industry/aero-planes",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        icon: <Cpu className="size-6 text-white" />,
        title: "Semiconductor",
        href: "/industry/semiconductor",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        icon: <Radar className="size-6 text-white" />,
        title: "Marine",
        href: "/industry/marine",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        icon: <Dna className="size-6 text-white" />,
        title: "Life Science",
        href: "/industry/life-science",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        icon: <Satellite className="size-6 text-white" />,
        title: "Defense",
        href: "/industry/defense",
        description:
            "For sighted users to preview content available behind a link.",
    },
]

export default function Navigation() {
    return (
        <NavigationMenu viewport={false}>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>SDK</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <div className="grid gap-2 md:w-[400px] lg:w-[600px] lg:grid-cols-[.75fr_1fr]">
                            <div className="h-full">
                            <div>
                                <NavigationMenuLink asChild>
                                    <a
                                        className="bg-muted flex w-full flex-col justify-end rounded-md p-6 no-underline outline-hidden select-none focus:shadow-md"
                                        href="/core"
                                    ><ImagePlaceholder className="w-full h-[200px]"/>
                                        <div className="mt-4 mb-1 text-xl font-medium">
                                            SDK
                                        </div>
                                        <p className="text-muted-foreground text-sm leading-tight">
                                            Single GPU, speeds up to 100x faster than traditional tools.
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </div>
                            </div>
                            <div className="space-y-2">
                            <ListItem href="/core/data-management" title="Data Management">
                                A complete data management package
                            </ListItem>
                            <ListItem href="/core/training" title="Training">
                                Optimized and configurable framework for distributed models training
                            </ListItem>
                            <ListItem href="/core/inference" title="Inference">
                                Ready-to-use models trained by Emmi AI
                            </ListItem>
                            </div>
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Data</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-2 md:w-[400px] lg:w-[600px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="bg-muted flex h-full w-full flex-col justify-end rounded-md p-6 no-underline outline-hidden select-none focus:shadow-md"
                                        href="/data"
                                    ><ImagePlaceholder className="w-full h-[200px]"/>
                                        <div className="mt-4 text-xl font-medium">
                                            Datasets
                                        </div>
                                        <p className="text-muted-foreground text-sm leading-tight mb-4">
                                            Smart, adaptive Data Models
                                        </p>
                                        <Button>Discover all</Button>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            <ListItem href="/data/wings" title="AERO Wings">
                                Comprehensive CFD data for aircraft wing design and optimization
                            </ListItem>                            
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>AI Models</NavigationMenuTrigger>
                    <NavigationMenuContent>
                         <div className="grid gap-2 md:w-[400px] md:h-[400px] lg:w-[600px] lg:grid-cols-[.75fr_1fr]">
                            <div>
                                <NavigationMenuLink asChild>
                                    <a
                                        className="bg-muted flex h-full w-full flex-col justify-end rounded-md p-6 no-underline outline-hidden select-none focus:shadow-md"
                                        href="/models"
                                    ><ImagePlaceholder className="w-full h-[200px]"/>
                                        <div className="mt-4 text-xl font-medium">
                                           Our AI Models
                                        </div>
                                        <p className="text-muted-foreground text-sm leading-tight mb-4">
                                            Lorem ipsum dolor sit amet
                                        </p>
                                        <Button>Discover all</Button>
                                    </a>
                                </NavigationMenuLink>
                            </div>
                            <div>
                              {models.map((item) => (
                                <ListItem
                                    key={item.title}
                                    title={item.title}
                                    href={item.href}
                                >
                                    {item.description}
                                </ListItem>
                            ))}
                            </div>                            
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <div className="grid gap-2 md:w-[400px] md:min-h-[400px] lg:w-[600px] lg:grid-cols-[1fr_.75fr]">
                            <div>
                            {solutions.map((item, index) => (
                                <li key={index}><NavigationMenuLink asChild>
                                    <Link href={item.href} className="flex flex-row gap-4">
                                        <div className="size-12 flex items-center justify-center shrink-0 bg-muted rounded-xl">{item.icon}</div>
                                        <div>
                                            <span>{item.title}</span>
                                            <span className="block text-muted-foreground">{item.description}</span>
                                        </div>
                                    </Link>
                                </NavigationMenuLink>
                                </li>
                            ))}
                            </div>
                             <div>
                                <NavigationMenuLink asChild>
                                    <a
                                        className="bg-muted flex h-full w-full flex-col justify-end rounded-md p-6 no-underline outline-hidden select-none focus:shadow-md"
                                        href="/models"
                                    ><ImagePlaceholder className="w-full h-[200px]"/>
                                        <div className="mt-4 text-xl font-medium">
                                           Read our success stories
                                        </div>
                                        <p className="text-muted-foreground text-sm leading-tight mb-4">
                                            Lorem ipsum dolor sit amet
                                        </p>
                                        <Button>Discover all</Button>
                                    </a>
                                </NavigationMenuLink>
                            </div>
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[300px] gap-0">
                            <NavigationMenuLink asChild>
                                <Link href="/about">
                                    <div className="font-medium">About</div>
                                    <div className="text-muted-foreground">
                                        Our mission and team
                                    </div>
                                </Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                                <Link href="/research">
                                    <div className="font-medium">Research</div>
                                    <div className="text-muted-foreground">
                                        Read our latest publications
                                    </div>
                                </Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                                <Link href="/news">
                                    <div className="font-medium">News</div>
                                    <div className="text-muted-foreground">
                                        Read updates from the team
                                    </div>
                                </Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                                <Link href="/careers">
                                    <div className="font-medium">Careers</div>
                                    <div className="text-muted-foreground">
                                        Shape the future with us
                                    </div>
                                </Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                                <Link href="/contact">
                                    <div className="font-medium">Contact</div>
                                    <div className="text-muted-foreground">
                                        Shape the future with us
                                    </div>
                                </Link>
                            </NavigationMenuLink>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

function ListItem({
    title,
    children,
    href,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link href={href}>
                    <div className="text-sm leading-none font-medium">{title}</div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}
