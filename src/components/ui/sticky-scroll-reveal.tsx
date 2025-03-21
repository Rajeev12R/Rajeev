"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    techStack?: { icon: React.ReactNode; name: string }[];
    videoSrc: string; // Added videoSrc property for each project
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <motion.div
      className="relative flex h-[30rem] justify-center space-x-20 overflow-y-auto rounded-md py-10 max-w-6xl mx-auto px-6"
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-6xl mx-auto w-full">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-2xl font-bold text-stone-700"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-lg mt-4 max-w-sm text-stone-700"
              >
                {item.description}
              </motion.p>

              {/* Tech Stack Section */}
              {item.techStack && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="flex flex-wrap items-center gap-4 mt-4 text-gray-700 dark:text-gray-300 text-2xl"
                >
                  {item.techStack.map((tech, i) => (
                    <div key={i} className="flex items-center gap-2">
                      {tech.icon} <span className="text-sm">{tech.name}</span>
                    </div>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>

      {/* Right Side (Sticky Content Preview) */}
      <div
        className={cn(
          "sticky top-10 hidden h-80 w-[40rem] overflow-hidden rounded-md bg-white lg:block",
          contentClassName,
        )}
      >
        {/* Video now inside the sticky preview */}
        <video
          key={content[activeCard]?.videoSrc} // Reloads video when active project changes
          className="w-full h-full object-cover rounded-md"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={content[activeCard]?.videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </motion.div>
  );
};
