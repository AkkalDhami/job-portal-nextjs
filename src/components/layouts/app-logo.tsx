"use client";

import { APP_NAME } from "@/config/app";
import Link from "next/link";
import React from "react";

const AppLogo = () => {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <span className="text-2xl font-semibold text-gradient">{APP_NAME}.</span>
    </Link>
  );
};

export default AppLogo;
