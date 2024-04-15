import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

export const Logo = () => {
  return (
    <div className="hidden md:flex items-center">
      <Image
        className="dark:hidden"
        src="/logo-no-background.png"
        alt="logo"
        width={60}
        height={60}
      />
      <Image
        className="hidden dark:block"
        src="/logo-white.png"
        alt="logo"
        width={60}
        height={60}
      />
      <p className={cn("font-semibold", font.className)}>Lotion</p>
    </div>
  );
};
