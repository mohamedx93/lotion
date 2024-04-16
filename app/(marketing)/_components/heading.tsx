"use client";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your ideas, Documents and Plans. Unified. Welcomes to{" "}
        <span className="underline">Lotion</span>
      </h1>
      <h3 className="text-base font-medium sm:text-xl md:text-2xl">
        Take your workspace to the next level to <br /> achieve better results
      </h3>
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">
            Enter Lotion
            <ArrowRight className="ml-3 h-4 w-4" />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button>
            Get Lotion free
            <ArrowRight className="ml-3 h-4 w-4" />
          </Button>
        </SignInButton>
      )}
    </div>
  );
};

export default Heading;
