"use client";

import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { BriefcaseBusiness, Building2, Users } from "lucide-react";

function Counter({
  value,
  duration = 2,
}: {
  value: number;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const increment = end / (duration * 60);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [value, duration, isInView]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

export function Stats({ className }: { className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    {
      number: 7532,
      label: "Live Jobs",
      icon: BriefcaseBusiness,
    },
    {
      number: 97354,
      label: "Companies",
      icon: Building2,
    },
    {
      number: 3847154,
      label: "Candidates",
      icon: Users,
    },
    {
      number: 3847154,
      label: "New Jobs",
      icon: BriefcaseBusiness,
    },
  ];

  return (
    <div
      ref={ref}
      className={cn("grid grid-cols-2 lg:grid-cols-4 gap-6", className)}>
      {stats.map(({ label, number, icon: Icon }, index) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="group border hover:border-primary/30 bg-primary-foreground rounded-md px-4 py-3 flex items-center gap-4 flex-wrap">
          <div className="bg-primary text-primary-foreground w-12 h-12 rounded-sm flex items-center justify-center">
            <Icon size={24} />
          </div>

          <div className="flex flex-col">
            <p className="text-lg lg:text-xl font-medium">
              <Counter value={number} />
            </p>
            <p className="text-sm text-muted-foreground mt-1">{label}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
