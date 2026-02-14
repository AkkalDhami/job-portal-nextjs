"use client";

import { FC } from "react";
import {
  Code,
  Music,
  Briefcase,
  Activity,
  BarChart3,
  HeartPulse,
  Video,
  Megaphone,
  Star,
} from "lucide-react";
import { CategoryCard } from "./category-card";
import { Heading } from "../ui/heading";
import { SubHeading } from "../ui/sub-heading";

interface Category {
  id: number;
  name: string;
  icon: React.ComponentType<{ size: number }>;
  openPositions: number;
}

const categories: Category[] = [
  {
    id: 1,
    name: "Graphics & Design",
    icon: Briefcase,
    openPositions: 357,
  },
  {
    id: 2,
    name: "Code & Programming",
    icon: Code,
    openPositions: 312,
  },
  {
    id: 3,
    name: "Digital Marketing",
    icon: Megaphone,
    openPositions: 297,
  },
  {
    id: 4,
    name: "Video & Animation",
    icon: Video,
    openPositions: 247,
  },
  {
    id: 5,
    name: "Music & Audio",
    icon: Music,
    openPositions: 204,
  },
  {
    id: 6,
    name: "Account & Finance",
    icon: BarChart3,
    openPositions: 167,
  },
  {
    id: 7,
    name: "Health & Care",
    icon: HeartPulse,
    openPositions: 125,
  },
  {
    id: 8,
    name: "Data & Science",
    icon: Activity,
    openPositions: 57,
  },
];

export const PopularCategories: FC = () => {
  return (
    <section className="px-6 md:px-2 py-12 mt-8">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
        <Heading>Find Your Dream Job</Heading>
        <SubHeading>
          Explore the most in-demand job categories and discover exciting
          opportunities tailored to your skills and interests.
        </SubHeading>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {categories.map(({ icon: Icon, ...category }) => (
          <CategoryCard key={category.id} category={category} Icon={Icon} />
        ))}
      </div>
    </section>
  );
};
