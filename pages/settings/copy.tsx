 
import AppLayout from "@/components/layouts/app";
import Navbar from "@/components/settings/navbar";
import { Button } from "@/components/ui/button";
import { useDomains } from "@/lib/swr/use-domains";
import { useState } from "react";
import { mutate } from "swr";

export default function Copy() {
  const { domains } = useDomains();
  const [open, setOpen] = useState<boolean>(false);
  

 

  return (
    <AppLayout>
      <Navbar current="Domains"/>
      <div className="p-4 sm:p-4 sm:m-4">
        <div className="flex items-center justify-between mb-4 md:mb-8 lg:mb-12">
          <div className="space-y-1">
            <h3 className="text-2xl text-foreground font-semibold tracking-tight">
              Domains
            </h3>
            <p className="text-sm text-muted-foreground">Manage your custom domain for document sharing</p>
          </div>
          <ul className="flex items-center justify-between gap-4">
       
          </ul>
        </div>
      </div>
    </AppLayout>
  );
}


