import {
  AtSignIcon,
  CommandIcon,
  EclipseIcon,
  ZapIcon,
  UserPlusIcon,
  BellIcon,
  BriefcaseIcon,
  HelpCircleIcon,
  CircleQuestionMark,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Heading } from "../ui/heading";
import { SubHeading } from "../ui/sub-heading";

const items = [
  {
    id: "1",
    icon: CommandIcon,
    title: "What makes Jobify different from other job portals?",
    content:
      "Jobify stands out for its smart matching technology that connects the right candidates with the right employers. With a clean, intuitive interface and real-time updates, Jobify makes job searching and hiring faster, easier, and more personalized.",
  },
  {
    id: "2",
    icon: EclipseIcon,
    title: "How can I customize my Jobify profile?",
    content:
      "You can personalize your Jobify profile by adding your resume, skills, experience, and a professional summary. Employers can also customize their company pages with logos, descriptions, and job categories to attract the right talent.",
  },
  {
    id: "3",
    icon: ZapIcon,
    title: "Is Jobify optimized for mobile and performance?",
    content:
      "Absolutely! Jobify is fully responsive and optimized for performance across all devices. Whether you're browsing on desktop or mobile, you’ll experience smooth navigation, quick load times, and instant job alerts.",
  },
  {
    id: "4",
    icon: AtSignIcon,
    title: "Is my personal information safe on Jobify?",
    content:
      "Yes, your data privacy is our top priority. Jobify uses advanced encryption and secure authentication to protect your information. You’re always in control of what you share with employers.",
  },
  {
    id: "5",
    icon: UserPlusIcon,
    title: "How do I create a Jobify account?",
    content:
      "Creating a Jobify account is simple. Click the 'Sign Up' button, choose whether you're a Job Seeker or Employer, fill out your basic details, and verify your email. Once registered, you can start applying for jobs or posting openings right away.",
  },
  {
    id: "6",
    icon: BellIcon,
    title: "How do job alerts work on Jobify?",
    content:
      "You can set up custom job alerts by selecting your preferred job title, industry, and location. Jobify will automatically notify you via email or dashboard when new opportunities that match your preferences are posted.",
  },
  {
    id: "7",
    icon: BriefcaseIcon,
    title: "How can employers post and manage job listings?",
    content:
      "Employers can easily post job openings from their dashboard. Each listing can include a detailed job description, salary range, and requirements. You can edit, pause, or remove listings anytime, and view applicant profiles in real time.",
  },
  {
    id: "8",
    icon: HelpCircleIcon,
    title: "How can I contact Jobify support?",
    content:
      "Our support team is here to help! You can reach us through the 'Contact Us' page or via email at support@jobify.com. We respond to most inquiries within 24 hours.",
  },
];

export default function FaqSection() {
  return (
    <section className="px-6 md:px-2 py-12 mt-8">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
        <Heading>Frequently Asked Questions</Heading>
        <SubHeading>
          Find answers to common questions about using Jobify for job seekers
          and employers.
        </SubHeading>
      </div>
      <Accordion type="single" collapsible className="w-full" defaultValue="1">
        {items.map((item) => (
          <AccordionItem
            defaultValue={"2"}
            value={item.id}
            key={item.id}
            className="py-2">
            <AccordionTrigger className="py-2 text-lg sm:text-xl hover:text-muted-secondary cursor-pointer leading-6 hover:no-underline">
              <span className="flex items-center gap-3">
                <item.icon
                  size={16}
                  className="shrink-0 opacity-60"
                  aria-hidden="true"
                />
                <span>{item.title}</span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base ps-7 pb-2">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
