import React from "react";

import { Button } from "@/components/ui/button";
import {
  Search,
  Users,
  Shield,
  TrendingUp,
  Bell,
  FileText,
  Target,
  Zap,
} from "lucide-react";
import { FeatureCard } from "./feature-card";
import { Heading } from "../ui/heading";
import { SubHeading } from "../ui/sub-heading";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge?: string;
}

export const FeaturesSection = () => {
  const features: Feature[] = [
    {
      icon: <Search className="h-6 w-6" />,
      title: "Smart Job Search",
      description:
        "AI-powered job matching with personalized recommendations based on your skills and preferences.",
      badge: "Popular",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Precision Matching",
      description:
        "Advanced algorithms that match your profile with the most relevant job opportunities.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Company Insights",
      description:
        "Get detailed company reviews, salary insights, and culture information before applying.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure Profile",
      description:
        "Control your privacy with options to make your profile visible only to selected employers.",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Career Analytics",
      description:
        "Track your application performance and get insights to improve your success rate.",
    },
    {
      icon: <Bell className="h-6 w-6" />,
      title: "Instant Alerts",
      description:
        "Real-time notifications for new job postings that match your criteria.",
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Resume Builder",
      description:
        "Create professional resumes with our built-in templates and AI-powered suggestions.",
      badge: "New",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Quick Apply",
      description:
        "One-click application process with auto-filled information from your profile.",
    },
  ];

  return (
    <section className="px-6 md:px-2 py-12 mt-8">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
        <Heading className="">Powerful Features for Your Career</Heading>
        <SubHeading>
          Everything you need to find your dream job and advance your career.
          Our platform is designed to make job hunting efficient and successful.
        </SubHeading>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            badge={feature.badge}
          />
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
        <Button size="lg" className="">
          <Zap className="h-4 w-4" />
          <span>Get Started Free</span>
        </Button>
      </div>
    </section>
  );
};
