"use client";

import React from "react";

interface Category {
  id: number;
  name: string;
  openPositions: number;
}

interface CategoryCardProps {
  category: Category;
  Icon: React.ComponentType<{ size: number }>;
}

const CategoryCard = ({ category, Icon }: CategoryCardProps) => {
  return (
    <div
      key={category.id}
      className={`flex relative items-center gap-4 p-5 rounded-sm bg-primary-foreground border group bg-card-hover cursor-pointer hover:border-primary/30 duration-200`}>
      <div className="bg-primary text-primary-foreground w-12 h-12 rounded-sm flex items-center justify-center">
        <Icon size={24} />
      </div>

      <div>
        <h3 className={`font-semibold`}>{category.name}</h3>
        <p className="text-sm text-muted-foreground">
          {category.openPositions} Open position
        </p>
      </div>
    </div>
  );
};

export { CategoryCard };
