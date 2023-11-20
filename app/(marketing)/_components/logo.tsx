import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { NotionLogo } from "./svgs";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <NotionLogo fill="#000000" className="dark:hidden" />
      <NotionLogo fill="#fff" className="hidden dark:block" />
      <p className={cn("font-semibold flex-shrink-0", font.className)}>Notion Lite</p>
    </div>
  );
};
