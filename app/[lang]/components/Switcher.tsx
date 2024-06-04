"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n, type Locale } from "@/i18n-config";

const Switcher = ({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: "en" | "ge";
}) => {
  const pathName = usePathname();

  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <Link
      href={redirectedPathName(lang === "ge" ? "en" : "ge")}
      className="bg-white text-black p-2 rounded-xl hover:bg-gray-100 active:bg-gray-200 text-sm sm:text-base"
    >
      {children}
    </Link>
  );
};

export default Switcher;
