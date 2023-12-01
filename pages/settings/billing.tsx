 
import AppLayout from "@/components/layouts/app";
import Navbar from "@/components/settings/navbar";  
import { useRouter } from "next/router"; 
import { toast } from "sonner";

export default function Billing() {
  const router = useRouter();

  return (
    <AppLayout>
      <Navbar current="Billing" />
      <div className="p-4 sm:p-4 sm:m-4">
        <div className="flex items-center justify-between mb-4 md:mb-8 lg:mb-12">
          <div className="space-y-1">
            <h3 className="text-2xl text-foreground font-semibold tracking-tight">
              Billing
            </h3>
            <p className="text-sm text-muted-foreground">
              Manage your subscription
            </p>
          </div>
        </div>
 
         
      </div>
    </AppLayout>
  );
}
