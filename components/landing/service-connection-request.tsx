"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

type ServiceConnectionRequestProps = {
  vocabulary: {
    title: string;
    description: string;
    button: string;
    placeholder: string;
    toaster: {
      title: string;
      subtitle: string;
    };
  };
};

const ServiceConnectionRequest = ({
  vocabulary,
}: ServiceConnectionRequestProps) => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) {
      return;
    }

    toast({
      title: vocabulary.toaster.title,
      description: vocabulary.toaster.subtitle,
    });

    setEmail("");
  };

  return (
    <div id="dashboard" className="py-4">
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
            {vocabulary.title}
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {vocabulary.description}
          </p>
        </div>
        <div className="w-full max-w-sm space-y-2 rounded-lg p-3 bg-white shadow-md transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
          <form className="flex space-x-2" onSubmit={handleEmailSubmit}>
            <Input
              className="max-w-lg flex-1"
              placeholder={vocabulary.placeholder}
              type="email"
              name="name"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              type="submit"
              className="bg-gray-900 text-white hover:bg-gray-800"
            >
              {vocabulary.button}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

ServiceConnectionRequest.displayName = "ServiceConnectionRequest";

export { ServiceConnectionRequest };
