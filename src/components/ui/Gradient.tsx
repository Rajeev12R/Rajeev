import { cn } from "@/lib/utils";
import React from "react";

export default function GridBackgroundDemo() {
  return (
    <div
      className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black"
    >
      {/* Grid background with lines at corners */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:60px_60px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
        style={{ maskImage: "radial-gradient(circle, transparent 40%, black 90%)" }}
      />
      {/* Radial gradient to fade out the center */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white/40 [mask-image:radial-gradient(circle,transparent_40%,black_80%)] dark:bg-black"
      ></div>
    </div>
  );
}
