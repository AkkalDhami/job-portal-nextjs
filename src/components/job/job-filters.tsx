"use client";

import React, { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Briefcase,
  Clock,
  DollarSign,
  BookOpen,
  User,
  Search,
  MapPin,
  Layers,
  SlidersHorizontal,
  X,
} from "lucide-react";

import { MIN_EDUCATION, JOB_LEVEL, JOB_TYPE } from "@/config/constant";
import { Checkbox } from "../ui/checkbox";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { BorderBeam } from "@/components/ui/border-beam";
import { cn } from "@/lib/utils";
export const CATEGORIES = [
  "all",
  "design",
  "development",
  "marketing",
  "sales",
  "support",
  "writing",
  "engineering",
  "health",
  "finance",
  "education",
  "design",
  "development",
  "marketing",
  "sales",
  "support",
  "writing",
  "engineering",
  "health",
  "finance",
  "education",
];
export default function JobFiltersSection({
  isFull = false,
}: {
  isFull?: boolean;
}) {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");

  const [selectedExperience, setSelectedExperience] = useState("");
  const [selectedSalary, setSelectedSalary] = useState("");
  const [selectedJobTypes, setSelectedJobTypes] = useState<string[]>([]);
  const [selectedEducation, setSelectedEducation] = useState<string[]>([]);
  const [selectedJobLevel, setSelectedJobLevel] = useState("");
  return (
    <div>
      <Card
        className={cn(
          "border p-4 overflow-hidden relative bg-background/60 backdrop-blur-md",
          "shadow-tertiary hover:shadow-secondary transition-shadow duration-300"
        )}>
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <BorderBeam
          size={160}
          initialOffset={20}
          className="from-transparent via-primary to-transparent"
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 20,
          }}
        />
        <CardContent className="px-3 py-2">
          <div className="flex flex-col md:flex-row gap-3 items-center">
            <div className="flex-1 flex items-center gap-1">
              <Briefcase className="w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Job title, keywords, or company"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                className="border-0 shadow-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-lg h-12"
              />
            </div>
            <div className="flex-1 flex items-center gap-1">
              <MapPin className="w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="City, state, or remote"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="border-0 shadow-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-lg h-12"
              />
            </div>
            {isFull && (
              <div className="flex-1 flex items-center gap-1">
                <Layers className="w-5 h-5 text-muted-foreground" />
              </div>
            )}
            {isFull && (
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size={"lg"}>
                    <SlidersHorizontal className="w-4 h-4 mr-2" />
                    Advance Filter
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-full sm:max-w-lg overflow-y-auto">
                  <SheetHeader className="border-b pb-4">
                    <SheetTitle className="text-2xl font-bold flex items-center gap-2">
                      <SlidersHorizontal className="w-6 h-6 text-primary" />
                      Advanced Filters
                    </SheetTitle>
                    <p className="text-sm text-muted-foreground mt-1">
                      Refine your job search with detailed filters
                    </p>
                  </SheetHeader>
                  <div className="mt-6 pb-2">
                    <div className="space-y-0 font-medium">
                      {/* Experience */}
                      <div className="p-4">
                        <h3 className="font-semibold text-lg flex items-center gap-2">
                          <Briefcase className="w-5 h-5 text-primary" />
                          Experience
                        </h3>
                        <RadioGroup
                          value={selectedExperience}
                          onValueChange={setSelectedExperience}>
                          <div className="grid grid-cols-1 gap-0">
                            {[
                              { value: "fresher", label: "Fresher" },
                              { value: "1-2", label: "1 - 2 Years" },
                              { value: "3-6", label: "3 - 6 Years" },
                              { value: "6-8", label: "6 - 8 Years" },
                              { value: "8-10", label: "8 - 10 Years" },
                              { value: "10-15", label: "10 - 15 Years" },
                              { value: "15+", label: "15+ Years" },
                            ].map((item) => (
                              <div
                                key={item.value}
                                className="flex group items-center hover:text-primary-600 has-[:checked]:text-primary-600 space-x-3 p-2 ">
                                <RadioGroupItem
                                  value={item.value}
                                  id={item.value}
                                />
                                <Label
                                  htmlFor={item.value}
                                  className="cursor-pointer group-has-[:checked]:text-primary-600 flex-1 text-sm font-medium">
                                  {item.label}
                                </Label>
                              </div>
                            ))}
                          </div>
                        </RadioGroup>
                      </div>

                      <Separator />

                      {/* Salary */}
                      <div className="p-4">
                        <h3 className="font-semibold text-lg flex items-center gap-2">
                          <DollarSign className="w-5 h-5 text-primary" />
                          Salary Range
                        </h3>
                        <RadioGroup
                          value={selectedSalary}
                          onValueChange={setSelectedSalary}>
                          <div className="grid grid-cols-1 gap-0">
                            {[
                              { value: "0-1000", label: "$0 - $1,000" },
                              { value: "1000-2000", label: "$1,000 - $2,000" },
                              { value: "2000-4000", label: "$2,000 - $4,000" },
                              { value: "4000-6000", label: "$4,000 - $6,000" },
                              { value: "6000-8000", label: "$6,000 - $8,000" },
                              {
                                value: "8000-10000",
                                label: "$8,000 - $10,000",
                              },
                              {
                                value: "10000-15000",
                                label: "$10,000 - $15,000",
                              },
                              { value: "15000+", label: "$15,000+" },
                            ].map((item) => (
                              <div
                                key={item.value}
                                className="flex group items-center hover:text-primary-600 has-[:checked]:text-primary-600 space-x-3 p-2">
                                <RadioGroupItem
                                  value={item.value}
                                  id={item.value}
                                />
                                <Label
                                  htmlFor={item.value}
                                  className="cursor-pointer flex-1 text-sm font-medium">
                                  {item.label}
                                </Label>
                              </div>
                            ))}
                          </div>
                        </RadioGroup>
                      </div>

                      <Separator />

                      {/* Job Type */}
                      <div className="p-4">
                        <h3 className="font-semibold text-lg flex items-center gap-2">
                          <Clock className="w-5 h-5 text-primary" />
                          Job Type
                        </h3>
                        <div className="grid grid-cols-1">
                          {JOB_TYPE.map((type) => (
                            <div
                              key={type}
                              className="flex group items-center hover:text-primary-600 has-[:checked]:text-primary-600 space-x-3 p-2">
                              <Checkbox
                                id={`job-type-${type}`}
                                checked={selectedJobTypes.includes(type)}
                              />
                              <Label
                                htmlFor={`job-type-${type}`}
                                className="cursor-pointer capitalize flex-1 text-sm font-medium">
                                {type.replace("-", " ")}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Separator />

                      {/* Education */}
                      <div className="p-4">
                        <h3 className="font-semibold text-lg flex items-center gap-2">
                          <BookOpen className="w-5 h-5 text-primary" />
                          Education
                        </h3>
                        <div className="grid grid-cols-1">
                          {MIN_EDUCATION.map((edu) => (
                            <div
                              key={edu}
                              className="flex group items-center hover:text-primary-600 has-[:checked]:text-primary-600 space-x-3 p-2">
                              <Checkbox
                                id={`education-${edu}`}
                                checked={selectedEducation.includes(edu)}
                              />
                              <Label
                                htmlFor={`education-${edu}`}
                                className="cursor-pointer capitalize flex-1 text-sm font-medium">
                                {edu.replace("-", " ")}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Separator />

                      {/* Job Level */}
                      <div className="p-4">
                        <h3 className="font-semibold text-lg flex items-center gap-2">
                          <User className="w-5 h-5 text-primary" />
                          Job Level
                        </h3>
                        <RadioGroup
                          value={selectedJobLevel}
                          onValueChange={setSelectedJobLevel}>
                          <div className="grid grid-cols-1">
                            {JOB_LEVEL.map((item) => (
                              <div
                                key={item}
                                className="flex group items-center hover:text-primary-600 has-[:checked]:text-primary-600 space-x-3 p-2">
                                <RadioGroupItem value={item} id={`${item}`} />
                                <Label
                                  htmlFor={`${item}`}
                                  className="cursor-pointer capitalize flex-1 text-sm font-medium">
                                  {item.replace("-", " ")}
                                </Label>
                              </div>
                            ))}
                          </div>
                        </RadioGroup>
                      </div>
                    </div>
                  </div>
                  {/* Sticky Footer */}
                  <div className=" p-6 bg-background border-t shadow-lg">
                    <div className="flex gap-3">
                      <Button variant="outline" className="flex-1" size="lg">
                        <X className="w-4 h-4 mr-2" />
                        Clear All
                      </Button>
                      <Button className="flex-1 bg-gradient hover-bg" size="lg">
                        <Search className="w-4 h-4 mr-2" />
                        Apply Filters
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            )}
            <Button size="lg" className="h-10 px-8">
              <Search className="w-5 h-5" />
              Search Jobs
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
