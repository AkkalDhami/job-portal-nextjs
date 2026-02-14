import React from "react";
import Link from "next/link";
import { Facebook, Linkedin, Heart, MapPin, Phone, Github } from "lucide-react";
import { APP_NAME } from "@/config/app";
import AppLogo from "./app-logo";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-linear-b border-gray-500/30 bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)]">
      <div className="max-w-7xl relative flex items-center justify-center mx-auto px-4 py-8">
        <div>
          © {currentYear} {APP_NAME} | All rights reserved | Made with{" "}
          <Heart className="h-3 w-3 inline fill-red-500 text-red-500 mx-1" />{" "}
          for job seekers
        </div>
      </div>
    </footer>
  );
};

export default Footer;
