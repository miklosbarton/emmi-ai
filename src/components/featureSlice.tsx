"use client"

import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ImagePlaceholder from "./imagePlaceholder";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
    title: string;
    description: string;
    image: string;
}

const items: AccordionItem[] = [
    {
        title: "Geometry",
        description: "Start with the shape or structure of the object you're studying, like the wing of an airplane or the inside of a pipe.",
        image: "/images/feature1.jpg",
    },
    {
        title: "Meshing",
        description: "Description for feature two.",
        image: "/images/feature2.jpg",
    },
    {
        title: "Modeling",
        description: "Description for feature three.",
        image: "/images/feature3.jpg",
    },
    {
        title: "Discretization",
        description: "Description for feature three.",
        image: "/images/feature3.jpg",
    },
    {
        title: "Parallelization",
        description: "Description for feature four.",
        image: "/images/feature4.jpg",
    }
];

export default function FeatureComponent() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [progress, setProgress] = useState(0);

    // Cycle through accordions automatically

    const [key, setKey] = useState(0); // forces bar re-animation

    // This runs when the progress bar finishes its 5s animation
    useEffect(() => {
        const timer = setTimeout(() => {
            setActiveIndex((prev) => (prev + 1) % items.length);
            setKey((k) => k + 1); // restart progress bar
        }, 5000);
        return () => clearTimeout(timer);
    }, [activeIndex]);

    // Reset progress when manually switching
    const handleClick = useCallback((index: number) => {
        setActiveIndex(index);
        setKey((k) => k + 1);
        setProgress(0);
    }, []);


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            <div className="flex flex-col gap-8">
                {items.map((item, index) => {
                    const isActive = index === activeIndex;
                    return (
                        <div
                            key={index}
                            className="overflow-hidden"
                        >
                            <button
                                className="w-full flex justify-between items-center py-1"
                                onClick={() => handleClick(index)}
                            >
                                <span className="text-2xl">{item.title}</span>
                                <motion.span
                                    animate={{ rotate: isActive ? 0 : 180 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ChevronDown className="size-5" />
                                </motion.span>
                            </button>

                            {/* Description */}
                            <motion.div
                                initial={false}
                                animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <p className="text-muted-foreground pb-4">{item.description}</p>
                            </motion.div>

                            {/* Timer Progress Bar */}
                            <div className="w-full h-px">
                                {isActive && (
                                    <motion.div
                                        key={key} // restart animation when activeIndex changes
                                        className="h-full bg-white/20"
                                        initial={{ width: "0%" }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 5, ease: "linear" }}
                                    />
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
            {/* Left: Image */}
            <div className="relative w-full h-80 md:h-full">
                <ImagePlaceholder className="w-full h-full" />
            </div>
        </div>
    );
}
