"use client";

import Footer from "@/components/layouts/app-footer";
import { AppHeader } from "@/components/layouts/app-header";
import { cn } from "@/lib/utils";
import React from "react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AppHeader />

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      {children}
      <Footer />
    </>
  );
}
