import { FC } from "react";

import { Heading } from "../ui/heading";
import { SubHeading } from "../ui/sub-heading";
import { IJob, JobCard } from "../job/job-card";

const jobData: IJob[] = [
  {
    id: 1,
    title: "Backend Developer",
    role: "Node.js Developer",
    tags: ["React", "TypeScript", "Express.js", "Node.js"],
    description:
      "We are seeking a passionate frontend developer to join our growing engineering team and build modern web interfaces.",
    responsibilities:
      "Develop responsive web apps using React and Next.js. Collaborate with designers and backend developers to deliver high-quality products.",
    companyName: "Tech Solution",
    companyLogoUrl: "https://example.com/company-logo.png",
    city: "Kathmandu",
    state: "Bagmati",
    country: "Nepal",
    remoteAllowed: true,
    minSalary: 80000,
    maxSalary: 150000,
    salaryType: "yearly",
    salaryCurrency: "NPR",
    education: "Bachelor's",
    experience: "2+ years of experience in frontend development",
    jobType: "full-time",
    workplaceType: "hybrid",
    totalOpenings: 3,
    jobLevel: "mid-level",
    jobLocation: "Kathmandu, Nepal",
    status: "closed",
    isApproved: false,
    isFeatured: false,
    isDeleted: false,
    applicationDeadline: "2026-02-28T23:59:59.000Z",
    deletedAt: null,
    createdAt: "2025-10-22T14:17:00.000Z",
    updatedAt: "2025-10-22T14:17:00.000Z",
  },
  {
    id: 2,
    recruiterId: 1,
    title: "Backend Developer",
    role: "Node.js Developer",
    tags: ["React", "TypeScript", "Express.js", "Node.js"],
    description:
      "We are seeking a passionate frontend developer to join our growing engineering team and build modern web interfaces.",
    responsibilities:
      "Develop responsive web apps using React and Next.js. Collaborate with designers and backend developers to deliver high-quality products.",
    companyName: "Tech Solution",
    companyLogoUrl: "https://example.com/company-logo.png",
    city: "Kathmandu",
    state: "Bagmati",
    country: "Nepal",
    remoteAllowed: true,
    minSalary: 80000,
    maxSalary: 150000,
    salaryType: "yearly",
    salaryCurrency: "NPR",
    education: "Bachelor's",
    experience: "2+ years of experience in frontend development",
    jobType: "full-time",
    workplaceType: "hybrid",
    totalOpenings: 3,
    jobLevel: "mid-level",
    jobLocation: "Kathmandu, Nepal",
    status: "closed",
    isApproved: false,
    isFeatured: false,
    isDeleted: false,
    applicationDeadline: "2026-02-28T23:59:59.000Z",
    deletedAt: null,
    createdAt: "2025-10-22T14:17:14.000Z",
    updatedAt: "2025-10-22T14:17:14.000Z",
  },
  {
    id: 3,
    recruiterId: 1,
    title: "Backend Developer",
    role: "Node.js Developer",
    tags: ["React", "TypeScript", "Express.js", "Node.js"],
    description:
      "We are seeking a passionate frontend developer to join our growing engineering team and build modern web interfaces.",
    responsibilities:
      "Develop responsive web apps using React and Next.js. Collaborate with designers and backend developers to deliver high-quality products.",
    companyName: "Tech Solution",
    companyLogoUrl: "https://example.com/company-logo.png",
    city: "Kathmandu",
    state: "Bagmati",
    country: "Nepal",
    remoteAllowed: true,
    minSalary: 80000,
    maxSalary: 150000,
    salaryType: "yearly",
    salaryCurrency: "NPR",
    education: "Bachelor's",
    experience: "2+ years of experience in frontend development",
    jobType: "full-time",
    workplaceType: "hybrid",
    totalOpenings: 3,
    jobLevel: "mid-level",
    jobLocation: "Kathmandu, Nepal",
    status: "paused",
    isApproved: false,
    isFeatured: false,
    isDeleted: false,
    applicationDeadline: "2026-02-28T23:59:59.000Z",
    deletedAt: null,
    createdAt: "2025-10-22T14:17:15.000Z",
    updatedAt: "2025-10-22T14:17:15.000Z",
  },
  {
    id: 4,
    recruiterId: 1,
    title: "Backend Developer",
    role: "Node.js Developer",
    tags: ["React", "TypeScript", "Express.js", "Node.js"],
    description:
      "We are seeking a passionate frontend developer to join our growing engineering team and build modern web interfaces.",
    responsibilities:
      "Develop responsive web apps using React and Next.js. Collaborate with designers and backend developers to deliver high-quality products.",
    companyName: "Tech Solution",
    companyLogoUrl: "https://example.com/company-logo.png",
    city: "Kathmandu",
    state: "Bagmati",
    country: "Nepal",
    remoteAllowed: true,
    minSalary: 80000,
    maxSalary: 150000,
    salaryType: "yearly",
    salaryCurrency: "NPR",
    education: "Bachelor's",
    experience: "2+ years of experience in frontend development",
    jobType: "full-time",
    workplaceType: "hybrid",
    totalOpenings: 3,
    jobLevel: "mid-level",
    jobLocation: "Kathmandu, Nepal",
    status: "active",
    isApproved: true,
    isFeatured: false,
    isDeleted: false,
    applicationDeadline: "2026-02-28T23:59:59.000Z",
    deletedAt: null,
    createdAt: "2025-10-22T14:17:17.000Z",
    updatedAt: "2025-10-22T14:17:17.000Z",
  },
  {
    id: 5,
    recruiterId: 1,
    title: "Frontend Developer",
    role: "React.js Developer",
    tags: ["React", "TypeScript", "Express.js", "Node.js"],
    description:
      "We are seeking a passionate frontend developer to join our growing engineering team and build modern web interfaces.",
    responsibilities:
      "Develop responsive web apps using React and Next.js. Collaborate with designers and backend developers to deliver high-quality products.",
    companyName: "Tech Solution",
    companyLogoUrl: "https://example.com/company-logo.png",
    city: "Kathmandu",
    state: "Bagmati",
    country: "Nepal",
    remoteAllowed: true,
    minSalary: 80000,
    maxSalary: 150000,
    salaryType: "yearly",
    salaryCurrency: "NPR",
    education: "Bachelor's",
    experience: "2+ years of experience in frontend development",
    jobType: "full-time",
    workplaceType: "hybrid",
    totalOpenings: 3,
    jobLevel: "mid-level",
    jobLocation: "Kathmandu, Nepal",
    status: "draft",
    isApproved: false,
    isFeatured: true,
    isDeleted: false,
    applicationDeadline: "2026-02-28T23:59:59.000Z",
    deletedAt: null,
    createdAt: "2025-10-22T14:57:33.000Z",
    updatedAt: "2025-10-22T14:57:33.000Z",
  },
];

export const FeaturedJob: FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-2 py-12 mt-8">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
        <Heading>Find Your Dream Job</Heading>
        <SubHeading>
          Explore top companies hiring now and take the next step in your
          career.
        </SubHeading>
      </div>
      <div className="flex items-center justify-between mb-8">
        <Heading as="h2" className="mx-0">
          Featured Jobs
        </Heading>
      </div>
      <div className="space-y-4">
        {jobData.map((job) => (
          <JobCard key={job.id} job={job} isListView={true} />
        ))}
      </div>
    </section>
  );
};
