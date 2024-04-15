import { Button } from "@/components/ui/button";
import { Logo } from "./logo";

export const Footer = () => {
  return (
    <div className="flex dark:bg-neutral-900 items-center w-full p-6 bg-background z-50">
      <Logo />
      <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
        <Button variant="ghost" size="sm">
          <div className="text-xs md:text-sm">Privacy policy</div>
        </Button>
        <Button variant="ghost" size="sm">
          <div className="text-xs md:text-sm">Terms & conditions</div>
        </Button>
      </div>
    </div>
  );
};
