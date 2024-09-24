"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const ServiceConnectionRequest = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) {
      return;
    }

    toast({
      title: "Request Submitted",
      description:
        "Your service connection request has been received. We will process it shortly.",
    });

    setEmail("");
  };

  return (
    <div id="dashboard" className="py-4">
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
            Ready to Streamline Your Communications?
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Join thousands of businesses using LMNEDATE to improve their
            customer and team communications.
          </p>
        </div>
        <div className="w-full max-w-sm space-y-2 rounded-lg p-3 bg-white shadow-md transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
          <form className="flex space-x-2" onSubmit={handleEmailSubmit}>
            <Input
              className="max-w-lg flex-1"
              placeholder="Enter your email"
              type="email"
              name="name"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              type="submit"
              className="bg-gray-900 text-white hover:bg-gray-800"
            >
              Get Started
            </Button>
          </form>
        </div>
        <p className="text-xs text-gray-500">
          Start your free trial. No credit card required.
        </p>
      </div>
    </div>
  );
};

ServiceConnectionRequest.displayName = "ServiceConnectionRequest";

export { ServiceConnectionRequest };
