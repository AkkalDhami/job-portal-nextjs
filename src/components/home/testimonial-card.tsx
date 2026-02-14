import React from "react";
import { ITestimonial } from "./testimonial";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export function TestimonialCard({
  testimonial,
}: {
  testimonial: ITestimonial;
}) {
  return (
    <Card className="bg-linear-b flex-[0_0_100%] sm:flex-[0_0_80%] md:flex-[0_0_60%] lg:flex-[0_0_50%] px-4 ml-4">
      <CardContent className="flex flex-col space-y-4">
        <div className="flex items-center gap-2">
          <Star size={24} className="fill-amber-500 text-amber-500" />
          <Star size={24} className="fill-amber-500 text-amber-500" />
          <Star size={24} className="fill-amber-500 text-amber-500" />
          <Star size={24} className="fill-amber-500 text-amber-500" />
          <Star size={24} className="fill-amber-500 text-amber-500" />
        </div>
        <p className="text-sm italic font-medium sm:text-base text-muted-foreground leading-relaxed">
          “{testimonial.quote}”
        </p>

        <div className="flex items-center gap-3">
          <Avatar className="w-12 h-12">
            <AvatarImage src={testimonial.image} alt={testimonial.name} />
            <AvatarFallback className="bg-primary text-base text-primary-foreground">
              {testimonial.name[0]}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-0.5">
            <h4 className="font-semibold">{testimonial.name}</h4>
            <span className="text-xs text-muted-foreground">
              {testimonial.role}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
