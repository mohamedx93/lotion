import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
("use-client");

const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your ideas, Documents and Plans. Unified. Welcomes to{" "}
        <span className="underline">Lotion</span>
      </h1>
      <h3 className="text-base font-medium sm:text-xl md:text-2xl">
        Take your workspace to the next level to <br /> achieve better results
      </h3>
      <Button>
        Enter Lotion
        <ArrowRight className="ml-3 h-4 w-4" />
      </Button>
    </div>
  );
};

export default Heading;
