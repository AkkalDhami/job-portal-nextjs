import { Metadata } from "next";
import { APP_NAME } from "@/config/app";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: "website" | "article" | "profile";
  noIndex?: boolean;
}

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
const DEFAULT_IMAGE = `${BASE_URL}/og.png`;

export function generateSEO({
  title,
  description,
  keywords = [],
  image = DEFAULT_IMAGE,
  url,
  type = "website",
  noIndex = false,
}: SEOProps): Metadata {
  const fullTitle = `${title} | ${APP_NAME}`;
  const canonicalUrl = url ? `${BASE_URL}${url}` : BASE_URL;

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(", "),
    authors: [{ name: APP_NAME }],
    creator: APP_NAME,
    publisher: APP_NAME,
    robots: noIndex
      ? "noindex, nofollow"
      : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type,
      locale: "en_US",
      url: canonicalUrl,
      title: fullTitle,
      description,
      siteName: APP_NAME,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
      creator: `@${APP_NAME.toLowerCase()}`,
    },
    metadataBase: new URL(BASE_URL),
  };
}

export const SEO_CONFIGS = {
  home: {
    title: "Find Your Dream Job",
    description:
      "Discover thousands of job opportunities from top companies. Connect with recruiters and take the next step in your career with our comprehensive job portal.",
    keywords: [
      "jobs",
      "careers",
      "employment",
      "job search",
      "hiring",
      "recruitment",
      "job portal",
      "job board",
    ],
  },
  jobs: {
    title: "Browse Jobs",
    description:
      "Explore thousands of job listings across various industries and locations. Filter by salary, experience, job type, and more to find your perfect match.",
    keywords: [
      "job listings",
      "job openings",
      "career opportunities",
      "employment opportunities",
      "job vacancies",
    ],
  },
  companies: {
    title: "Top Companies",
    description:
      "Discover leading companies hiring talented professionals. Explore company profiles, culture, benefits, and open positions.",
    keywords: [
      "companies",
      "employers",
      "top companies",
      "company profiles",
      "hiring companies",
    ],
  },
  applicantDashboard: {
    title: "Applicant Dashboard",
    description:
      "Manage your job applications, track application status, save jobs, and update your profile all in one place.",
    keywords: [
      "applicant dashboard",
      "job applications",
      "application tracking",
      "job seeker dashboard",
    ],
  },
  recruiterDashboard: {
    title: "Recruiter Dashboard",
    description:
      "Manage your job postings, review applications, track candidates, and find the best talent for your company.",
    keywords: [
      "recruiter dashboard",
      "post jobs",
      "manage applications",
      "hiring dashboard",
      "talent acquisition",
    ],
  },
  login: {
    title: "Login",
    description:
      "Sign in to your account to access your dashboard, manage applications, and connect with opportunities.",
    keywords: ["login", "sign in", "account access"],
    noIndex: true,
  },
  register: {
    title: "Create Account",
    description:
      "Join thousands of job seekers and recruiters. Create your free account to start your journey today.",
    keywords: ["register", "sign up", "create account", "join"],
    noIndex: true,
  },
  myProfile: {
    title: "My Profile",
    description:
      "Update your profile, add skills, work experience, education, and make yourself stand out to recruiters.",
    keywords: ["profile", "resume", "cv", "professional profile"],
    noIndex: true,
  },
  appliedJobs: {
    title: "Applied Jobs",
    description:
      "View and track all your job applications in one place. Monitor application status and follow up on opportunities.",
    keywords: ["applied jobs", "job applications", "application status"],
    noIndex: true,
  },
  savedJobs: {
    title: "Saved Jobs",
    description:
      "Access your saved job listings and apply when you're ready. Never lose track of interesting opportunities.",
    keywords: ["saved jobs", "bookmarked jobs", "favorite jobs"],
    noIndex: true,
  },
  postJob: {
    title: "Post a Job",
    description:
      "Create and publish job listings to attract top talent. Reach thousands of qualified candidates.",
    keywords: ["post job", "create job listing", "hire talent", "recruitment"],
    noIndex: true,
  },
  myCompanies: {
    title: "My Companies",
    description:
      "Manage your company profiles, update information, and showcase your organization to potential candidates.",
    keywords: ["company management", "company profile", "employer branding"],
    noIndex: true,
  },
  recruiterJobs: {
    title: "My Job Postings",
    description:
      "View and manage all your active job postings. Edit listings, review applications, and track hiring progress.",
    keywords: ["job postings", "manage jobs", "active listings"],
    noIndex: true,
  },
  settings: {
    title: "Settings",
    description:
      "Manage your account settings, preferences, notifications, and privacy options.",
    keywords: ["settings", "account settings", "preferences"],
    noIndex: true,
  },
};
