"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { ChevronLeft, ChevronRight, MessagesSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Heading } from "../ui/heading";
import { SubHeading } from "../ui/sub-heading";
import { TestimonialCard } from "./testimonial-card";

export interface ITestimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
}

const testimonials: ITestimonial[] = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Software Engineer @TechNepal",
    image: "",
    quote:
      "Finding my dream job was seamless through this portal! The interface is clean and user-friendly.",
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "UI/UX Designer @Designify",
    image: "",
    quote:
      "I love how easy it was to connect with recruiters. The experience feels modern and transparent!",
  },
  {
    id: 3,
    name: "Anisha Khatri",
    role: "Data Analyst @InsightLab",
    image: "",
    quote:
      "This job portal helped me transition into tech effortlessly. The support and resources were incredibly helpful.",
  },
  {
    id: 4,
    name: "Kiran Thapa",
    role: "Frontend Developer @WebCraft",
    image: "",
    quote:
      "The design and UX of this portal are unmatched. It genuinely feels like a premium job search experience!",
  },
  {
    id: 5,
    name: "Aarav Joshi",
    role: "Project Manager @BizHub",
    image: "",
    quote:
      "This platform connected me to my current company. The alerts and recommendation system are fantastic.",
  },
];

export function Testimonial() {
  const autoplay = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", skipSnaps: false },
    [autoplay.current]
  );
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  // Track active slide
  React.useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  // Pause autoplay on hover
  const handleMouseEnter = React.useCallback(() => {
    autoplay.current.stop();
  }, []);

  const handleMouseLeave = React.useCallback(() => {
    autoplay.current.play();
  }, []);

  return (
    <section className="px-6 md:px-2 py-12 mt-8">
      <div className="relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <Heading>What Our Users Say</Heading>
          <SubHeading>
            Hear from professionals who found their dream jobs using our
            platform.
          </SubHeading>
        </div>

        {/* Carousel Container */}
        <div
          className="overflow-hidden"
          ref={emblaRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          <div className="flex">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -left-4 sm:left-0 -translate-y-1/2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => emblaApi?.scrollPrev()}
              className="rounded-full z-50 shadow-md bg-primary text-primary-foreground dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary-foreground dark:hover:text-primary transition-colors">
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </div>
          <div className="absolute top-1/2 -right-4 sm:right-0 -translate-y-1/2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => emblaApi?.scrollNext()}
              className="rounded-full z-50 shadow-md bg-primary text-primary-foreground dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary-foreground dark:hover:text-primary transition-colors">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all",
                  i === selectedIndex
                    ? "bg-primary w-5"
                    : "bg-muted-foreground cursor-pointer"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
