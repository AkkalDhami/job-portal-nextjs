"use client";

import React from "react";
import { MapPin, DollarSign, Calendar, ArrowRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { BookmarkButton } from "../ui/bookmark-button";
import { useRouter } from "next/navigation";
import { differenceInDays } from "date-fns";

export interface IJob {
  id: number;
  title: string;
  role: string;
  tags: string[];
  description: string;
  responsibilities: string;
  companyName: string;
  companyLogoUrl: string;
  city: string;
  state: string;
  country: string;
  remoteAllowed: boolean;
  minSalary: number;
  maxSalary: number;
  salaryType: string;
  salaryCurrency: string;
  education: string;
  experience: string;
  jobType: string;
  workplaceType: string;
  totalOpenings: number;
  jobLevel: string;
  jobLocation: string;
  status: string;
  isApproved: boolean;
  isFeatured: boolean;
  isDeleted: boolean;
  applicationDeadline: string;
  deletedAt: Date | null;
  createdAt: string;
  updatedAt: string;
  recruiterId?: number;
}

interface JobCardProps {
  job: IJob;
  isListView: boolean;
}

const JobCard: React.FC<JobCardProps> = ({ job, isListView = false }) => {
  const {
    companyLogoUrl,
    companyName,
    title,
    jobType,
    applicationDeadline,
    jobLocation,
    minSalary,
    maxSalary,
    salaryCurrency,
    id,
  } = job;

  const salaryRange = `${minSalary.toLocaleString()} - ${maxSalary.toLocaleString()} ${salaryCurrency}`;

  const router = useRouter();

  const ApplyJobButton = () => {
    return (
      <Button size={"lg"} variant={"default"} className="">
        Apply Now <ArrowRight size={18} />
      </Button>
    );
  };

  if (isListView) {
    return (
      <Card className="relative gap-4 rounded-sm bg-primary-foreground border group bg-card-hover cursor-pointer hover:border-primary/30">
        <CardContent>
          <div className="flex justify-between flex-wrap gap-4">
            <div className="flex sm:items-center gap-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Avatar className="rounded-sm size-12">
                      <AvatarImage
                        src={companyLogoUrl}
                        alt={companyName}
                        onClick={() => router.push(`/jobs/${id}`)}
                        className="rounded-sm"
                      />
                      <AvatarFallback className="bg-primary text-primary-foreground rounded-sm flex items-center justify-center">
                        {companyName?.charAt(0)?.toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{companyName}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap gap-4 items-center">
                  <h3
                    className="font-medium hover:text-primary-500 cursor-pointer"
                    onClick={() => router.push(`/jobs/${id}`)}>
                    {title}
                  </h3>
                  <Badge
                    variant={"outline"}
                    className="bg-orange-100 border-orange-500 text-orange-500 dark:bg-orange-500/10 dark:text-orange-600">
                    {jobType}
                  </Badge>
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-4 text-muted-foreground text-sm items-center">
                  <div className="flex gap-2 items-center">
                    <MapPin size={16} />
                    <p>{jobLocation}</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <DollarSign size={16} />
                    <p>{salaryRange}</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Calendar size={16} />
                    <p>
                      {differenceInDays(
                        new Date(applicationDeadline),
                        new Date()
                      )}{" "}
                      days left
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <ApplyJobButton />
              <BookmarkButton />
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  // grid view
  return (
    <Card className="relative gap-4 rounded-sm bg-primary-foreground border group bg-card-hover cursor-pointer hover:border-primary/30">
      <CardContent>
        <div className="flex justify-between flex-wrap gap-4">
          <div className="flex sm:items-center gap-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Avatar className="rounded-sm w-[50px] h-[50px]">
                    <AvatarImage
                      src={companyLogoUrl}
                      alt={companyName}
                      className="rounded-sm w-22"
                      onClick={() => router.push(`/jobs/${id}`)}
                    />
                    <AvatarFallback className="bg-primary text-primary-foreground rounded-sm flex items-center justify-center">
                      {companyName?.charAt(0)?.toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{companyName}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <div className="flex flex-col gap-2">
              <h3
                className="font-medium hover:text-primary-500 cursor-pointer"
                onClick={() => router.push(`/jobs/${id}`)}>
                {title}
              </h3>

              <div className="flex flex-wrap gap-2 sm:gap-4 text-muted-foreground text-sm items-center">
                <div className="flex gap-2 items-center">
                  <MapPin size={16} />
                  <p>{jobLocation}</p>
                </div>
                <div className="flex gap-2 items-center">
                  <DollarSign size={16} />
                  <p>{salaryRange}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-between gap-4 items-center">
            <Badge
              variant={"outline"}
              className="bg-orange-100 border-orange-500 text-orange-500 dark:bg-orange-500/10 dark:text-orange-600">
              {jobType}
            </Badge>
            <div className="flex text-xs text-muted-secondary gap-2 items-center">
              <Calendar size={16} />
              <p>
                {differenceInDays(new Date(applicationDeadline), new Date())}{" "}
                days left
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <ApplyJobButton />
            <BookmarkButton />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export { JobCard };
