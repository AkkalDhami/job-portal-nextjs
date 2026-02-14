"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Search,
  Menu,
  X,
  User,
  Building,
  Bell,
  SearchIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ToggleTheme from "./toggle-theme";
import Link from "next/link";
import AppLogo from "./app-logo";

import { usePathname } from "next/navigation";
export function AppHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const recruiterNavigation = [
    { name: "Find Applicants", href: "/jobs" },
    { name: "Companies", href: "/companies" },
  ];

  const path = usePathname();
  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn("fixed top-0 left-0 right-0 z-50 bg-linear-b")}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <AppLogo />

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Search Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 cursor-pointer text-foreground/70 hover:text-foreground transition-colors">
                <Search className="w-5 h-5" />
              </motion.button>

              {/* Auth Buttons */}
              <div className="flex items-center space-x-3">
                <Button asChild className="flex items-center gap-2">
                  <Link href={"/login"}>
                    {/* <User className="w-4 h-4" /> */}
                    Sign In
                  </Link>
                </Button>

                <ToggleTheme />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden  items-center space-x-4">
              <ToggleTheme />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 text-foreground/70 hover:text-foreground transition-colors">
                <Menu className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-50 md:hidden bg-background/95 backdrop-blur-md">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-border">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <Building className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    JobPortal
                  </span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-foreground/70 hover:text-foreground transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation */}
              {/* <nav className="flex-1 p-6 space-y-6">
                {navigation.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-lg font-medium text-foreground/80 hover:text-foreground transition-colors py-2"
                    whileHover={{ x: 10 }}>
                    {item.name}
                  </motion.a>
                ))}
              </nav> */}

              {/* Mobile Actions */}
              <div className="p-6 border-t border-border space-y-4">
                <div className="flex items-center space-x-4">
                  <button className="p-2 text-foreground/70 hover:text-foreground transition-colors">
                    <Bell className="w-6 h-6" />
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Sign In
                  </Button>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Post a Job
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
